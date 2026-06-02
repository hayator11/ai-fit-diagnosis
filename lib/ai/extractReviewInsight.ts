import type { AiReview, AiUseCase } from "@/types/database";
import { slugify } from "@/lib/utils/slugify";

export function createUseCaseDraftFromReview(review: AiReview): AiUseCase {
  const title = `${review.tools_used.join("と")}を使った${review.use_purpose}の使用例`;
  return {
    title,
    slug: slugify(title),
    purpose: review.use_purpose,
    user_type: review.recommended_for?.[0] ?? null,
    tools_used: review.tools_used,
    lesson: "投稿レビューから作成した下書きです。管理画面で学びと再現手順を整えてください。",
    good_points: review.good_points ?? [],
    pain_points: review.bad_points ?? [],
    recommended_for: review.recommended_for ?? [],
    body: review.actual_use_case,
    publish_status: "draft"
  };
}
