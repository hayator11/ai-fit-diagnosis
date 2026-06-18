import { AdminNav } from "@/components/admin/AdminNav";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { saveTool } from "@/lib/actions/admin";
import { getPublishedTools } from "@/lib/data/queries";

export default async function AdminToolsPage() {
  const tools = await getPublishedTools();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">AIツール管理</h1>
      <div className="mt-6"><AdminNav /></div>
      <Card>
        <h2 className="font-bold">AI追加</h2>
        <form action={saveTool} className="mt-4 grid gap-3">
          <input name="name" required placeholder="AI名" className="rounded-lg border border-line p-3" />
          <input name="category" required placeholder="カテゴリ" className="rounded-lg border border-line p-3" />
          <textarea name="summary" rows={3} placeholder="一言説明" className="rounded-lg border border-line p-3" />
          <textarea name="strengths" rows={3} placeholder="得意なこと。1行1件" className="rounded-lg border border-line p-3" />
          <textarea name="weaknesses" rows={3} placeholder="苦手なこと。1行1件" className="rounded-lg border border-line p-3" />
          <textarea name="best_use_cases" rows={3} placeholder="向いている用途。1行1件" className="rounded-lg border border-line p-3" />
          <select name="status" className="rounded-lg border border-line p-3"><option>draft</option><option>published</option><option>archived</option></select>
          <Button type="submit">保存</Button>
        </form>
      </Card>
      <div className="mt-6 grid gap-3 md:grid-cols-2">{tools.map((tool) => <Card key={tool.slug}><div className="flex items-center justify-between"><h3 className="font-bold">{tool.name}</h3><StatusBadge value={tool.status} /></div><p className="mt-2 text-sm text-muted">{tool.summary}</p></Card>)}</div>
    </div>
  );
}
