"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PROJECT_KEY } from "@/lib/project";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils/slugify";

function formValues(formData: FormData, key: string) {
  return formData.getAll(key).map(String).filter(Boolean);
}

export async function submitReview(formData: FormData) {
  const payload = {
    project_key: PROJECT_KEY,
    display_name: String(formData.get("display_name") ?? "") || null,
    display_url: String(formData.get("display_url") ?? "") || null,
    tools_used: formValues(formData, "tools_used"),
    use_purpose: String(formData.get("use_purpose") ?? ""),
    rating: String(formData.get("rating") ?? ""),
    good_points: formValues(formData, "good_points"),
    bad_points: formValues(formData, "bad_points"),
    recommended_for: formValues(formData, "recommended_for"),
    want_to_use_again: String(formData.get("want_to_use_again") ?? ""),
    actual_use_case: String(formData.get("actual_use_case") ?? ""),
    publish_permission: String(formData.get("publish_permission") ?? "admin_only"),
    status: "pending"
  };

  if (!payload.tools_used.length || !payload.use_purpose || !payload.rating || !payload.publish_permission) {
    redirect("/review?error=入力内容を確認してください");
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    redirect(`/review?error=${encodeURIComponent("保存先DBが未設定です。Supabase接続後に投稿を保存できます。")}`);
  }

  const { error } = await supabase.from("ai_reviews").insert(payload);
  if (error) redirect(`/review?error=${encodeURIComponent("保存に失敗しました")}`);

  revalidatePath("/admin/reviews");
  redirect("/review?submitted=1");
}

export async function updateReviewStatus(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "pending");
  const admin_note = String(formData.get("admin_note") ?? "");
  const supabase = getSupabaseAdmin();

  if (supabase && id) {
    await supabase.from("ai_reviews").update({ status, admin_note }).eq("project_key", PROJECT_KEY).eq("id", id);
  }

  revalidatePath("/admin/reviews");
}

export async function convertReviewToUseCase(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const supabase = getSupabaseAdmin();
  if (!supabase || !id) return;

  const { data: review } = await supabase.from("ai_reviews").select("*").eq("project_key", PROJECT_KEY).eq("id", id).single();
  if (!review) return;

  const title = `${review.tools_used.join("と")}を使った${review.use_purpose}の使用例`;
  const slug = `${slugify(review.tools_used.join("-"))}-${slugify(review.use_purpose)}-${Date.now()}`;

  await supabase.from("ai_use_cases").insert({
    project_key: PROJECT_KEY,
    title,
    slug,
    purpose: review.use_purpose,
    user_type: review.recommended_for?.[0] ?? null,
    tools_used: review.tools_used,
    lesson: "投稿レビューから作成した下書きです。管理画面で学びと再現手順を整えてください。",
    good_points: review.good_points ?? [],
    pain_points: review.bad_points ?? [],
    recommended_for: review.recommended_for ?? [],
    body: review.actual_use_case,
    source_review_id: review.id,
    publish_status: "draft"
  });

  await supabase.from("ai_reviews").update({ status: "converted_to_use_case" }).eq("project_key", PROJECT_KEY).eq("id", id);
  revalidatePath("/admin/reviews");
  revalidatePath("/admin/use-cases");
  redirect("/admin/reviews");
}
