import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { convertReviewToUseCase, updateReviewStatus } from "@/lib/actions/reviews";
import { getReviews } from "@/lib/data/queries";
import { formatDate } from "@/lib/utils/formatDate";
import {
  getReviewOptionLabel,
  reviewPublishPermissionOptions,
  reviewRatingOptions
} from "@/src/data/ai-tamatebako/reviewOptions";

function passwordQuery(password: string) {
  return password ? `?password=${encodeURIComponent(password)}` : "";
}

function ReviewAdminPasswordCard({ password }: { password: string }) {
  return (
    <Card className="mt-6">
      <h2 className="text-xl font-bold">レビュー管理パスワード</h2>
      <p className="mt-2 text-sm text-muted">使用感投稿の管理画面を見るには、管理用パスワードを入力してください。</p>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row" method="get">
        <input
          className="min-h-11 flex-1 rounded-lg border border-line px-3"
          defaultValue={password}
          name="password"
          placeholder="管理用パスワード"
          type="password"
        />
        <Button type="submit">表示する</Button>
      </form>
    </Card>
  );
}

export default async function AdminReviewsPage({ searchParams }: { searchParams: Promise<{ password?: string }> }) {
  const params = await searchParams;
  const password = params.password ?? "";
  const adminPassword = process.env.ADMIN_REVIEW_PASSWORD || process.env.ADMIN_PASSWORD;
  const isAuthorized = !adminPassword || password === adminPassword;
  const reviews = await getReviews();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">使用感投稿管理</h1>
      <div className="mt-6"><AdminNav /></div>
      {!isAuthorized && <ReviewAdminPasswordCard password={password} />}
      {isAuthorized && (
      <div className="space-y-4">
        {reviews.length === 0 && <Card>Supabase接続後、投稿がここに表示されます。</Card>}
        {reviews.map((review) => (
          <Card key={review.id}>
            <div className="grid gap-3 md:grid-cols-7 md:items-center">
              <span className="text-sm text-muted">{formatDate(review.created_at)}</span>
              <span className="font-semibold md:col-span-2">{review.tools_used.join("、")}</span>
              <span>{review.use_purpose}</span>
              <span>{getReviewOptionLabel(reviewRatingOptions, review.rating)}</span>
              <span>{getReviewOptionLabel(reviewPublishPermissionOptions, review.publish_permission)}</span>
              <StatusBadge value={review.status} />
            </div>
            <p className="mt-3 text-sm text-muted">{review.actual_use_case}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={`/admin/reviews/${review.id}${passwordQuery(password)}`} className="rounded-lg border border-line px-3 py-2 text-sm">詳細</Link>
              <form action={convertReviewToUseCase}>
                <input type="hidden" name="id" value={review.id} />
                <input type="hidden" name="admin_password" value={password} />
                <button className="rounded-lg bg-ink px-3 py-2 text-sm text-white">使用例に変換</button>
              </form>
              <form action={updateReviewStatus} className="flex gap-2">
                <input type="hidden" name="id" value={review.id} />
                <input type="hidden" name="admin_password" value={password} />
                <input type="hidden" name="status" value="rejected" />
                <button className="rounded-lg border border-line px-3 py-2 text-sm">却下</button>
              </form>
            </div>
          </Card>
        ))}
      </div>
      )}
    </div>
  );
}
