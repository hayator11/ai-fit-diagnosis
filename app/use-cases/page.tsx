import type { Metadata } from "next";
import { UseCaseCard } from "@/components/use-cases/UseCaseCard";
import { getPublishedUseCases } from "@/lib/data/queries";

export const metadata: Metadata = {
  title: "AI使用例DB",
  description: "ホームページ制作、資料整理、SNS発信、音楽制作など、AIを使った具体的な実例を蓄積します。"
};

export default async function UseCasesPage() {
  const useCases = await getPublishedUseCases();
  const filters = ["AI別", "用途別", "初心者向け", "サイト制作", "文章作成", "資料整理", "実装", "音楽制作"];
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">使用例一覧</h1>
      <p className="mt-3 max-w-3xl text-muted">
        AI名ではなく、ホームページ制作、資料整理、SNS発信、世界観づくりなどの使用シーンで保存します。
        使用例が増えるほど、診断結果に近い実践例を出せるようになります。
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {[
          ["使った順番", "どのAIを、どの順番で使ったか。"],
          ["成果物", "何ができたか。投稿、資料、サイト、曲など。"],
          ["学び", "次に同じことをする人が失敗しにくくなる知見。"],
          ["使用量メモ", "トークン、制限、時間短縮の体感。"]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-line bg-white p-4">
            <h2 className="font-bold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">{filters.map((item) => <span key={item} className="rounded-full border border-line bg-white px-3 py-1 text-sm">{item}</span>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{useCases.map((item) => <UseCaseCard key={item.id ?? item.slug} item={item} />)}</div>
    </div>
  );
}
