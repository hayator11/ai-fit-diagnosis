import { notFound } from "next/navigation";
import { AdminNav } from "@/components/admin/AdminNav";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { convertReviewToUseCase, updateReviewStatus } from "@/lib/actions/reviews";
import { getReviews } from "@/lib/data/queries";

export default async function AdminReviewDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const review = (await getReviews()).find((item) => item.id === id);
  if (!review) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">レビュー詳細</h1>
      <div className="mt-6"><AdminNav /></div>
      <Card>
        <dl className="grid gap-4 text-sm md:grid-cols-2">
          <div><dt className="font-bold">使ったAI</dt><dd className="mt-1 text-muted">{review.tools_used.join("、")}</dd></div>
          <div><dt className="font-bold">用途</dt><dd className="mt-1 text-muted">{review.use_purpose}</dd></div>
          <div><dt className="font-bold">評価</dt><dd className="mt-1 text-muted">{review.rating}</dd></div>
          <div><dt className="font-bold">公開許可</dt><dd className="mt-1 text-muted">{review.publish_permission}</dd></div>
        </dl>
        <p className="mt-6 whitespace-pre-wrap text-muted">{review.actual_use_case}</p>
      </Card>
      <Card className="mt-6">
        <form action={updateReviewStatus} className="space-y-3">
          <input type="hidden" name="id" value={review.id} />
          <select name="status" defaultValue={review.status} className="w-full rounded-lg border border-line p-3">
            {["pending", "reviewed", "approved", "rejected", "converted_to_use_case"].map((item) => <option key={item}>{item}</option>)}
          </select>
          <textarea name="admin_note" defaultValue={review.admin_note ?? ""} rows={4} className="w-full rounded-lg border border-line p-3" placeholder="管理メモ" />
          <Button type="submit">ステータスを保存</Button>
        </form>
        <form action={convertReviewToUseCase} className="mt-3"><input type="hidden" name="id" value={review.id} /><Button type="submit" variant="secondary">使用例に変換</Button></form>
      </Card>
    </div>
  );
}
