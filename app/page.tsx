import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ToolCard } from "@/components/tools/ToolCard";
import { UseCaseCard } from "@/components/use-cases/UseCaseCard";
import { getPublishedTools, getPublishedUpdates, getPublishedUseCases } from "@/lib/data/queries";
import { PROJECT_NAME } from "@/lib/project";
import { experienceLevels } from "@/src/data/ai-tamatebako/experienceLevels";

export default async function HomePage() {
  const [useCases, tools, updates] = await Promise.all([getPublishedUseCases(), getPublishedTools(), getPublishedUpdates()]);

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold text-brand">{PROJECT_NAME}</p>
          <div className="mt-4 space-y-2 leading-relaxed">
            <p className="text-xl font-bold tracking-tight text-ink md:text-2xl">孤独な挑戦者を、減らしたい。</p>
            <p className="text-lg font-semibold text-muted">だから、あなたに合うAIを見つける。</p>
            <p className="text-lg font-semibold text-muted">道具がわかれば、一歩が軽くなる。</p>
          </div>
          <h1 className="mt-7 max-w-6xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[56px]">
            <span className="block">ひらけば、自分の可能性が<span className="inline-block">見えてくる。</span></span>
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-muted">
            ChatGPT、Claude、Gemini、NotebookLM、Genspark、Claude Code、Codex、音楽生成AI、動画生成AI。
            まずは「何に困っているか」「何を少し楽にしたいか」から、使えそうなAIと順番を一緒に見つけます。
            慣れてきた人には、設計、資料整理、実装を分ける使い方まで案内します。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/diagnosis">AI診断をはじめる</ButtonLink>
            <ButtonLink href="/review" variant="secondary">使ってみたAIの感想を投稿する</ButtonLink>
            <ButtonLink href="/classic-home" variant="ghost">初期トップ案を見る</ButtonLink>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">3つの玉手箱から始める</h2>
        <p className="mt-3 max-w-3xl text-muted">
          何を聞けばいいかわからない人も、少し使っている人も、もっと深く使いたい人も、まずは今の自分に近い入口を選べます。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {experienceLevels.map((level) => (
            <Card key={level.id} className={level.id === "advanced" ? "border-amber-200 bg-slate-950 text-white" : level.id === "intermediate" ? "border-indigo-200 bg-indigo-950 text-white" : "border-amber-100 bg-amber-50/60"}>
              <p className={level.id === "beginner" ? "text-sm font-semibold text-brand" : "text-sm font-semibold text-amber-200"}>{level.boxName}</p>
              <h3 className="mt-3 text-xl font-bold">{level.title}</h3>
              <p className={level.id === "beginner" ? "mt-3 text-sm leading-7 text-muted" : "mt-3 text-sm leading-7 text-slate-200"}>{level.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6"><ButtonLink href="/diagnosis">玉手箱を選んで診断する</ButtonLink></div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">まず、AIでできること</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["考えを整理する", "頭の中にあるぼんやりした考えを、文章、企画、投稿、ページ構成にできます。"],
            ["資料を読む・まとめる", "PDF、議事録、過去メモ、Google Driveの資料などを、要点や次の行動に整理できます。"],
            ["作る作業を進める", "サイト、資料、画像、音楽、コード、業務フローなど、実際の成果物づくりを助けます。"]
          ].map(([title, body]) => <Card key={title}><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm text-muted">{body}</p></Card>)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">何がしたいかわからない人へ</h2>
        <p className="mt-3 max-w-3xl text-muted">
          最初から「このAIを使いたい」と決めなくて大丈夫です。よくある入口から選ぶと、自分の使い道が見えてきます。
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["時間を減らしたい", "メール、議事録、調べもの、投稿づくりを短くする。"],
            ["考えを形にしたい", "アイデアを企画、文章、LP、スライドにする。"],
            ["資料が多すぎる", "PDF、メモ、過去投稿を読み直さずに整理する。"],
            ["作ってみたい", "サイト、曲、動画、画像、アプリの試作品を作る。"]
          ].map(([title, body]) => (
            <Card key={title}>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">慣れてきた人向けの考え方</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card><h3 className="font-bold">AIを役割で分ける</h3><p className="mt-2 text-sm text-muted">ChatGPTで整理、Claudeで深掘り、NotebookLMで資料理解、Codexで実装のように分担します。</p></Card>
          <Card><h3 className="font-bold">いきなり丸投げしない</h3><p className="mt-2 text-sm text-muted">目的、材料、完成イメージを先に分けると、出力のズレや無駄なやり取りを減らせます。</p></Card>
          <Card><h3 className="font-bold">使用シーンで記録する</h3><p className="mt-2 text-sm text-muted">AI名ではなく、ホームページ制作、X投稿、講演資料、楽曲制作などの場面で知見を貯めます。</p></Card>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">2つのデータで診断を育てる</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card><h3 className="font-bold">診断データ</h3><p className="mt-2 text-sm text-muted">何に困っている人が多いかを集めます。</p></Card>
          <Card><h3 className="font-bold">使用感データ</h3><p className="mt-2 text-sm text-muted">どのAIが何に役立ったかを蓄積します。</p></Card>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">AI活用ロードマップ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {["ChatGPTで壁打ち", "NotebookLMで資料整理", "Claudeで構成", "Codexで実装", "DB化して仕組みにする"].map((step, index) => (
            <Card key={step}><p className="text-sm font-semibold text-brand">Step {index + 1}</p><h3 className="mt-2 font-bold">{step}</h3></Card>
          ))}
        </div>
        <div className="mt-6"><ButtonLink href="/roadmap" variant="secondary">ロードマップを見る</ButtonLink></div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">最近追加された使用例</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{useCases.slice(0, 3).map((item) => <UseCaseCard key={item.id ?? item.slug} item={item} />)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">気になるAI / 新しいAI</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{tools.slice(0, 3).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div>
        <div className="mt-4 text-sm text-muted">{updates[0]?.title}</div>
      </section>
    </div>
  );
}
