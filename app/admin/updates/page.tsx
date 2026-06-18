import { AdminNav } from "@/components/admin/AdminNav";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { saveUpdate } from "@/lib/actions/admin";
import { getAdminUpdates } from "@/lib/data/queries";

export default async function AdminUpdatesPage() {
  const updates = await getAdminUpdates();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">AI更新情報管理</h1>
      <div className="mt-6"><AdminNav /></div>
      <Card>
        <h2 className="font-bold">更新情報追加</h2>
        <form action={saveUpdate} className="mt-4 grid gap-3">
          <input name="title" required placeholder="タイトル" className="rounded-lg border border-line p-3" />
          <textarea name="summary" rows={4} placeholder="要約" className="rounded-lg border border-line p-3" />
          <input name="source_url" placeholder="公式URL / 情報元URL" className="rounded-lg border border-line p-3" />
          <select name="source_type" className="rounded-lg border border-line p-3"><option>official</option><option>news</option><option>blog</option><option>user_report</option><option>social</option><option>manual</option></select>
          <select name="importance" className="rounded-lg border border-line p-3"><option>low</option><option>medium</option><option>high</option><option>critical</option></select>
          <select name="status" className="rounded-lg border border-line p-3"><option>draft</option><option>needs_review</option><option>published</option><option>archived</option></select>
          <Button type="submit">保存</Button>
        </form>
      </Card>
      <div className="mt-6 space-y-3">{updates.map((item) => <Card key={item.id}><div className="flex items-center justify-between"><h3 className="font-bold">{item.title}</h3><StatusBadge value={item.status} /></div><p className="mt-2 text-sm text-muted">{item.summary}</p></Card>)}</div>
    </div>
  );
}
