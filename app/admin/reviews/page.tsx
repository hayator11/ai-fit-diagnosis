import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card } from "@/components/ui/Card";
import { convertReviewToUseCase, updateReviewStatus } from "@/lib/actions/reviews";
import { getReviews } from "@/lib/data/queries";
import { formatDate } from "@/lib/utils/formatDate";

export default async function AdminReviewsPage() {
  const reviews = await getReviews();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">使用感投稿管理</h1>
      <div className="mt-6"><AdminNav /></div>
      <div className="space-y-4">
        {reviews.length === 0 && <Card>Supabase接続後、投稿がここに表示されます。</Card>}
        {reviews.map((review) => (
          <Card key={review.id}>
            <div className="grid gap-3 md:grid-cols-6 md:items-center">
              <span className="text-sm text-muted">{formatDate(review.created_at)}</span>
              <span className="md:col-span-2">{review.tools_used.join("、")}</span>
              <span>{review.use_purpose}</span>
              <span>{review.rating}</span>
              <StatusBadge value={review.status} />
            </div>
            <p className="mt-3 text-sm text-muted">{review.actual_use_case}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={`/admin/reviews/${review.id}`} className="rounded-lg border border-line px-3 py-2 text-sm">詳細</Link>
              <form action={convertReviewToUseCase}><input type="hidden" name="id" value={review.id} /><button className="rounded-lg bg-ink px-3 py-2 text-sm text-white">使用例に変換</button></form>
              <form action={updateReviewStatus} className="flex gap-2"><input type="hidden" name="id" value={review.id} /><input type="hidden" name="status" value="rejected" /><button className="rounded-lg border border-line px-3 py-2 text-sm">却下</button></form>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
