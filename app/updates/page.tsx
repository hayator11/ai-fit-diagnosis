import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getPublishedUpdates } from "@/lib/data/queries";
import { formatDate } from "@/lib/utils/formatDate";

export const metadata: Metadata = {
  title: "AI更新情報",
  description: "AIツールの公式情報、更新、重要な変更を承認後に公開する更新情報ページです。"
};

export default async function UpdatesPage() {
  const updates = await getPublishedUpdates();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">AIアップデート一覧</h1>
      <div className="mt-8 space-y-4">
        {updates.map((item) => (
          <Link key={item.id} href={`/updates/${item.id}`}>
            <Card className="hover:border-brand">
              <div className="flex flex-wrap items-center gap-2"><Badge>{item.ai_tools?.name ?? "AI"}</Badge><Badge>{item.importance}</Badge><span className="text-sm text-muted">{formatDate(item.published_at)}</span></div>
              <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
