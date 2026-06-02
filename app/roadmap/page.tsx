import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI活用ロードマップ",
  description: "ChatGPTで壁打ち、NotebookLMで資料整理、Claudeで構成、Codexで実装するAI活用の流れを紹介します。"
};

const steps = [
  {
    title: "ChatGPTで壁打ち",
    body: "やりたいこと、読者、成果物、困っていることを言葉にします。",
    tools: ["ChatGPT"]
  },
  {
    title: "NotebookLMで資料整理",
    body: "PDF、議事録、過去投稿、活動記録を読み込ませ、使える材料にします。",
    tools: ["NotebookLM", "Gemini"]
  },
  {
    title: "Claudeで構成",
    body: "長文、仕様書、設計思想、ストーリー、ページ構成を深めます。",
    tools: ["Claude", "Claude Code"]
  },
  {
    title: "Codexで実装",
    body: "決まった設計をもとに、Next.js、UI、DB連携、修正を進めます。",
    tools: ["Codex"]
  },
  {
    title: "DB化して仕組みにする",
    body: "使用例、診断ログ、レビューをSupabaseに保存し、サイトを育てます。",
    tools: ["Supabase", "Vercel"]
  }
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold text-brand">AI活用ロードマップ</p>
      <h1 className="mt-3 text-4xl font-bold">初心者から、AIを組み合わせて使う人へ。</h1>
      <p className="mt-4 max-w-3xl text-muted">
        AIはひとつを選ぶより、目的ごとに役割を分けると強くなります。
        このロードマップは、壁打ち、資料整理、構成、実装、DB化までの流れを示します。
      </p>
      <div className="mt-8 grid gap-4">
        {steps.map((step, index) => (
          <Card key={step.title} className="grid gap-4 md:grid-cols-[120px_1fr] md:items-start">
            <div>
              <Badge>Step {index + 1}</Badge>
            </div>
            <div>
              <h2 className="text-xl font-bold">{step.title}</h2>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {step.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/diagnosis">自分の入口を診断する</ButtonLink>
        <ButtonLink href="/use-cases" variant="secondary">実例DBを見る</ButtonLink>
      </div>
    </div>
  );
}
