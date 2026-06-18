"use server";

import { revalidatePath } from "next/cache";
import { PROJECT_KEY } from "@/lib/project";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils/slugify";

function list(formData: FormData, key: string) {
  return String(formData.get(key) ?? "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function saveTool(formData: FormData) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;
  const id = String(formData.get("id") ?? "");
  const name = String(formData.get("name") ?? "");
  const payload = {
    project_key: PROJECT_KEY,
    name,
    slug: String(formData.get("slug") ?? "") || slugify(name),
    category: String(formData.get("category") ?? "general"),
    summary: String(formData.get("summary") ?? ""),
    description: String(formData.get("description") ?? ""),
    strengths: list(formData, "strengths"),
    weaknesses: list(formData, "weaknesses"),
    best_use_cases: list(formData, "best_use_cases"),
    pricing_note: String(formData.get("pricing_note") ?? ""),
    official_url: String(formData.get("official_url") ?? ""),
    latest_update: String(formData.get("latest_update") ?? ""),
    status: String(formData.get("status") ?? "draft"),
    trust_level: String(formData.get("trust_level") ?? "medium")
  };
  if (id) await supabase.from("ai_tools").update(payload).eq("project_key", PROJECT_KEY).eq("id", id);
  else await supabase.from("ai_tools").insert(payload);
  revalidatePath("/tools");
  revalidatePath("/admin/tools");
}

export async function saveUseCase(formData: FormData) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;
  const id = String(formData.get("id") ?? "");
  const title = String(formData.get("title") ?? "");
  const payload = {
    project_key: PROJECT_KEY,
    title,
    slug: String(formData.get("slug") ?? "") || slugify(title),
    purpose: String(formData.get("purpose") ?? ""),
    user_type: String(formData.get("user_type") ?? ""),
    tools_used: String(formData.get("tools_used") ?? "").split(",").map((item) => item.trim()).filter(Boolean),
    workflow: list(formData, "workflow"),
    result: String(formData.get("result") ?? ""),
    lesson: String(formData.get("lesson") ?? ""),
    token_note: String(formData.get("token_note") ?? ""),
    time_saved_note: String(formData.get("time_saved_note") ?? ""),
    difficulty: String(formData.get("difficulty") ?? ""),
    recommendation_score: Number(formData.get("recommendation_score") || 0) || null,
    source_url: String(formData.get("source_url") ?? ""),
    good_points: list(formData, "good_points"),
    pain_points: list(formData, "pain_points"),
    recommended_for: list(formData, "recommended_for"),
    body: String(formData.get("body") ?? ""),
    publish_status: String(formData.get("publish_status") ?? "draft")
  };
  if (id) await supabase.from("ai_use_cases").update(payload).eq("project_key", PROJECT_KEY).eq("id", id);
  else await supabase.from("ai_use_cases").insert(payload);
  revalidatePath("/use-cases");
  revalidatePath("/admin/use-cases");
}

export async function saveUpdate(formData: FormData) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;
  const id = String(formData.get("id") ?? "");
  const payload = {
    project_key: PROJECT_KEY,
    title: String(formData.get("title") ?? ""),
    summary: String(formData.get("summary") ?? ""),
    source_url: String(formData.get("source_url") ?? ""),
    source_type: String(formData.get("source_type") ?? "manual"),
    importance: String(formData.get("importance") ?? "medium"),
    status: String(formData.get("status") ?? "draft"),
    published_at: String(formData.get("status")) === "published" ? new Date().toISOString() : null
  };
  if (id) await supabase.from("ai_updates").update(payload).eq("project_key", PROJECT_KEY).eq("id", id);
  else await supabase.from("ai_updates").insert(payload);
  revalidatePath("/updates");
  revalidatePath("/admin/updates");
}
