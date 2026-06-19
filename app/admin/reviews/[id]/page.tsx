import { notFound } from "next/navigation";
import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { convertReviewToUseCase, updateReviewStatus } from "@/lib/actions/reviews";
import { getReviews } from "@/lib/data/queries";
import { formatDate } from "@/lib/utils/formatDate";
import {
  getReviewOptionLabel,
  reviewPublishPermissionOptions,
  reviewRatingOptions,
  reviewStatusOptions,
  reviewUseAgainOptions
} from "@/src/data/ai-tamatebako/reviewOptions";

function ReviewAdminPasswordCard({ password }: { password: string }) {
  return (
    <Card className="mt-6">
      <h2 className="text-xl font-bold">レビュー管理パスワード</h2>
      <p className="mt-2 text-sm text-muted">レビュー詳細を見るには、管理用パスワードを入力してください。</p>
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

function ReviewAdminUnavailableCard() {
  return (
    <Card className="mt-6 border-amber-200 bg-amber-50 text-amber-900">
      管理画面は現在利用できません。ADMIN_REVIEW_PASSWORD を設定してください。
    </Card>
  );
}

function ValueList({ values }: { values?: string[] | null }) {
  if (!values?.length) return <span className="text-muted">未選択</span>;
  return <span>{values.join("、")}</span>;
}

export default async function AdminReviewDetailPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ password?: string }>;
}) {
  const { id } = await params;
  const query = await searchParams;
  const password = query.password ?? "";
  const adminPassword = process.env.ADMIN_REVIEW_PASSWORD;
  const isAuthorized = Boolean(adminPassword) && password === adminPassword;
  const review = isAuthorized ? (await getReviews()).find((item) => item.id === id) : null;
  if (isAuthorized && !review) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">レビュー詳細</h1>
      <div className="mt-6"><AdminNav /></div>
      {!adminPassword && <ReviewAdminUnavailableCard />}
      {adminPassword && !isAuthorized && <ReviewAdminPasswordCard password={password} />}
      {adminPassword && isAuthorized && review && (
      <>
      <div className="mt-6">
        <Link href={`/admin/reviews${password ? `?password=${encodeURIComponent(password)}` : ""}`} className="text-sm font-semibold text-muted hover:text-ink">レビュー一覧に戻る</Link>
      </div>
      <Card>
        <dl className="grid gap-4 text-sm md:grid-cols-2">
          <div><dt className="font-bold">投稿日</dt><dd className="mt-1 text-muted">{formatDate(review.created_at)}</dd></div>
          <div><dt className="font-bold">ステータス</dt><dd className="mt-1"><StatusBadge value={review.status} /></dd></div>
          <div><dt className="font-bold">使ったAI</dt><dd className="mt-1 text-muted">{review.tools_used.join("、")}</dd></div>
          <div><dt className="font-bold">用途</dt><dd className="mt-1 text-muted">{review.use_purpose}</dd></div>
          <div><dt className="font-bold">評価</dt><dd className="mt-1 text-muted">{getReviewOptionLabel(reviewRatingOptions, review.rating)}</dd></div>
          <div><dt className="font-bold">もう一度使いたいか</dt><dd className="mt-1 text-muted">{getReviewOptionLabel(reviewUseAgainOptions, review.want_to_use_again)}</dd></div>
          <div><dt className="font-bold">公開許可</dt><dd className="mt-1 text-muted">{getReviewOptionLabel(reviewPublishPermissionOptions, review.publish_permission)}</dd></div>
          <div><dt className="font-bold">名前または表示名</dt><dd className="mt-1 text-muted">{review.display_name || "未入力"}</dd></div>
          <div className="md:col-span-2">
            <dt className="font-bold">URL</dt>
            <dd className="mt-1 text-muted">
              {review.display_url ? <a className="underline" href={review.display_url} rel="noreferrer" target="_blank">{review.display_url}</a> : "未入力"}
            </dd>
          </div>
          <div><dt className="font-bold">良かった点</dt><dd className="mt-1 text-muted"><ValueList values={review.good_points} /></dd></div>
          <div><dt className="font-bold">困った点</dt><dd className="mt-1 text-muted"><ValueList values={review.bad_points} /></dd></div>
          <div className="md:col-span-2"><dt className="font-bold">向いていると思う人</dt><dd className="mt-1 text-muted"><ValueList values={review.recommended_for} /></dd></div>
        </dl>
        <h2 className="mt-6 font-bold">具体的な使用例</h2>
        <p className="mt-6 whitespace-pre-wrap text-muted">{review.actual_use_case}</p>
      </Card>
      <Card className="mt-6">
        <form action={updateReviewStatus} className="space-y-3">
          <input type="hidden" name="id" value={review.id} />
          <input type="hidden" name="admin_password" value={password} />
          <select name="status" defaultValue={review.status} className="w-full rounded-lg border border-line p-3">
            {reviewStatusOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
          <textarea name="admin_note" defaultValue={review.admin_note ?? ""} rows={4} className="w-full rounded-lg border border-line p-3" placeholder="管理メモ" />
          <Button type="submit">ステータスを保存</Button>
        </form>
        <form action={convertReviewToUseCase} className="mt-3">
          <input type="hidden" name="id" value={review.id} />
          <input type="hidden" name="admin_password" value={password} />
          <Button type="submit" variant="secondary">使用例に変換</Button>
        </form>
      </Card>
      </>
      )}
    </div>
  );
}
