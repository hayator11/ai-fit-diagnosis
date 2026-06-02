import type { Metadata } from "next";
import { TamatebakoDiagnosis } from "@/components/tamatebako/TamatebakoDiagnosis";

export const metadata: Metadata = {
  title: "AI玉手箱診断",
  description: "3つの玉手箱から入口を選び、自分に合うAI相棒と最初の一歩を診断します。"
};

export default function DiagnosisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold text-brand">AI玉手箱診断</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">ひらけば、自分の可能性が見えてくる。</h1>
      <p className="mt-4 max-w-3xl leading-8 text-muted">
        はじめに、今のAIとの距離感に近い玉手箱を選んでください。
        AIで何ができるかわからない人にも、少し使っている人にも、もっと深く使い分けたい人にも、それぞれに合うAI相棒と最初の一歩を出します。
      </p>
      <div className="mt-8"><TamatebakoDiagnosis /></div>
    </div>
  );
}
