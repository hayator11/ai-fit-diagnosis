import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ToolCard } from "@/components/tools/ToolCard";
import { UseCaseCard } from "@/components/use-cases/UseCaseCard";
import { getPublishedTools, getPublishedUpdates, getPublishedUseCases } from "@/lib/data/queries";

export const metadata: Metadata = {
  title: "初期トップ案",
  description: "AIは、選ぶ時代から、使い分ける時代へ。という初期提案版のトップページです。",
  robots: {
    index: false,
    follow: true
  }
};

export default async function ClassicHomePage() {
  const [useCases, tools, updates] = await Promise.all([
    getPublishedUseCases(),
    getPublishedTools(),
    getPublishedUpdates()
  ]);

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold text-brand">初期トップ案</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            AIは、選ぶ時代から、使い分ける時代へ。
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            ChatGPT、Claude、Gemini、NotebookLM、Genspark、Claude Code、Codex。
            あなたの目的に合わせて、使うAIと順番を診断します。
            さらに、実際に使った人の声を集めながら、AIの使い方を日々アップデートしていきます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/diagnosis">自分に合うAIを診断する</ButtonLink>
            <ButtonLink href="/review" variant="secondary">使ってみたAIの感想を投稿する</ButtonLink>
            <ButtonLink href="/" variant="ghost">現在のトップに戻る</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">このサイトでできること</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["AI診断", "やりたいことから、向いているAIと使う順番を提案します。"],
            ["使用感レポート", "実際に使った人の感想を集め、リアルな使用例として蓄積します。"],
            ["AI図鑑", "新しいAIや気になるAIを、使いどころ別に紹介します。"]
          ].map(([title, body]) => (
            <Card key={title}>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">2つのデータで診断を育てる</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="font-bold">診断データ</h3>
            <p className="mt-2 text-sm text-muted">何に困っている人が多いかを集めます。</p>
          </Card>
          <Card>
            <h3 className="font-bold">使用感データ</h3>
            <p className="mt-2 text-sm text-muted">どのAIが何に役立ったかを蓄積します。</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">最近追加された使用例</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {useCases.slice(0, 3).map((item) => (
            <UseCaseCard key={item.id ?? item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">気になるAI / 新しいAI</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {tools.slice(0, 3).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
        <div className="mt-4 text-sm text-muted">{updates[0]?.title}</div>
      </section>
    </div>
  );
}
