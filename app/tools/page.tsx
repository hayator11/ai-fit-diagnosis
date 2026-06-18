import type { Metadata } from "next";
import { ToolCard } from "@/components/tools/ToolCard";
import { getPublishedTools } from "@/lib/data/queries";

export const metadata: Metadata = {
  title: "AI道具一覧",
  description: "AIで何ができるかわからない人にも、慣れてきた人にも向けて、ChatGPT、Claude、Gemini、NotebookLM、Codexなどを用途別に整理します。"
};

export default async function ToolsPage() {
  const tools = await getPublishedTools();
  const filters = ["総合", "文章", "調査", "資料整理", "コード", "音楽", "動画", "画像", "業務効率"];
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">AIで何ができる？</h1>
      <p className="mt-3 max-w-3xl text-muted">
        「AIを使え」と言われても、最初は何を頼めばいいかわかりにくいものです。
        ここではAI名より先に、日常や仕事でよくある使い道から見られるようにしています。
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">まずはこの使い道から</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["文章を整える", "メール、SNS投稿、note、案内文、企画書のたたき台を作る。", "ChatGPT / Claude"],
            ["調べてまとめる", "知らないテーマ、比較、競合調査、ニュースの要点を整理する。", "Perplexity / Gemini / Genspark"],
            ["資料を読ませる", "PDF、議事録、過去メモを読ませて、要点や使える材料を出す。", "NotebookLM / Gemini"],
            ["見せ方を作る", "スライド、図解、LP構成、説明資料を見やすくする。", "Gamma / Napkin AI / ChatGPT"],
            ["実際に作る", "サイト、アプリ、コード修正、DB連携などを進める。", "Codex / Claude Code"],
            ["世界観を広げる", "曲、動画、BGM、イベント企画、キャラクターの雰囲気を作る。", "Suno / Udio / Runway"]
          ].map(([title, body, toolsText]) => (
            <div key={title} className="rounded-lg border border-line bg-white p-4">
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
              <p className="mt-3 text-xs font-semibold text-brand">{toolsText}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">慣れてきたら、役割で使い分ける</h2>
        <p className="mt-3 max-w-3xl text-muted">
          玄人っぽい使い方は、難しいAIを使うことではなく、AIごとの役割を分けることです。
          考える、読む、作る、直すを分けると失敗しにくくなります。
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
        {[
          ["総合プロデューサー", "ChatGPTのように、企画、文章、壁打ち、導線設計を横断するAI。"],
          ["設計士", "Claude / Claude Codeのように、深い思考、仕様書、全体理解に向くAI。"],
          ["実装担当", "Codexのように、実装、修正、テスト、既存コード反映に向くAI。"],
          ["AI司書 / 調査役", "NotebookLM、Gemini、Gensparkのように、資料や調査を扱うAI。"]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-line bg-white p-4">
            <h2 className="font-bold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </div>
        ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">AI一覧</h2>
        <p className="mt-3 text-muted">気になるAIがある人は、ここから詳細を見られます。</p>
      </section>
      <div className="mt-6 flex flex-wrap gap-2">{filters.map((item) => <span key={item} className="rounded-full border border-line bg-white px-3 py-1 text-sm">{item}</span>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div>
    </div>
  );
}
