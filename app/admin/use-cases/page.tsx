import { AdminNav } from "@/components/admin/AdminNav";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { saveUseCase } from "@/lib/actions/admin";
import { getAdminUseCases } from "@/lib/data/queries";

export default async function AdminUseCasesPage() {
  const items = await getAdminUseCases();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">使用例管理</h1>
      <div className="mt-6"><AdminNav /></div>
      <Card>
        <h2 className="font-bold">新規作成</h2>
        <form action={saveUseCase} className="mt-4 grid gap-3">
          <input name="title" required placeholder="タイトル" className="rounded-lg border border-line p-3" />
          <input name="purpose" required placeholder="目的" className="rounded-lg border border-line p-3" />
          <input name="user_type" placeholder="使用者タイプ" className="rounded-lg border border-line p-3" />
          <input name="tools_used" placeholder="使用AI。カンマ区切り" className="rounded-lg border border-line p-3" />
          <textarea name="workflow" rows={3} placeholder="使った順番。1行1件" className="rounded-lg border border-line p-3" />
          <textarea name="result" rows={3} placeholder="成果物" className="rounded-lg border border-line p-3" />
          <textarea name="lesson" rows={3} placeholder="学び" className="rounded-lg border border-line p-3" />
          <textarea name="token_note" rows={3} placeholder="使用量・制限メモ" className="rounded-lg border border-line p-3" />
          <input name="time_saved_note" placeholder="時間短縮効果" className="rounded-lg border border-line p-3" />
          <input name="difficulty" placeholder="難易度" className="rounded-lg border border-line p-3" />
          <input name="recommendation_score" type="number" min="1" max="5" placeholder="おすすめ度 1-5" className="rounded-lg border border-line p-3" />
          <input name="source_url" type="url" placeholder="投稿・記事URL" className="rounded-lg border border-line p-3" />
          <textarea name="body" rows={4} placeholder="本文" className="rounded-lg border border-line p-3" />
          <select name="publish_status" className="rounded-lg border border-line p-3"><option>draft</option><option>published</option><option>archived</option></select>
          <Button type="submit">保存</Button>
        </form>
      </Card>
      <div className="mt-6 space-y-3">{items.map((item) => <Card key={item.id ?? item.slug}><div className="flex items-center justify-between gap-4"><div><h3 className="font-bold">{item.title}</h3><p className="text-sm text-muted">{item.tools_used.join("、")}</p></div><StatusBadge value={item.publish_status} /></div></Card>)}</div>
    </div>
  );
}
