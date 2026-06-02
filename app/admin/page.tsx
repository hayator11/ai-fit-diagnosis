import { AdminNav } from "@/components/admin/AdminNav";
import { Card } from "@/components/ui/Card";
import { getAdminUpdates, getAdminUseCases, getPublishedTools, getReviews } from "@/lib/data/queries";

export default async function AdminPage() {
  const [reviews, useCases, tools, updates] = await Promise.all([getReviews(), getAdminUseCases(), getPublishedTools(), getAdminUpdates()]);
  const stats = [
    ["新しい診断数", "DBで確認"],
    ["新しい使用感投稿数", reviews.length],
    ["承認待ちレビュー数", reviews.filter((item) => item.status === "pending").length],
    ["公開済み使用例数", useCases.filter((item) => item.publish_status === "published").length],
    ["登録AI数", tools.length],
    ["更新情報の承認待ち数", updates.filter((item) => item.status === "needs_review").length]
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">管理ダッシュボード</h1>
      <p className="mt-3 text-muted">MVPではログインなし。後からSupabase Authで保護できるように /admin 配下へ分離しています。</p>
      <div className="mt-6"><AdminNav /></div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map(([label, value]) => <Card key={label}><p className="text-sm text-muted">{label}</p><p className="mt-2 text-2xl font-bold">{value}</p></Card>)}
      </div>
    </div>
  );
}
