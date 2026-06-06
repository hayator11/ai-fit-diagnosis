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
      <div className="mt-4 space-y-2 leading-relaxed">
        <p className="text-xl font-bold tracking-tight text-ink md:text-2xl">孤独な挑戦者を、減らしたい。</p>
        <p className="text-lg font-semibold text-muted">だから、あなたに合うAIを見つける。</p>
        <p className="text-lg font-semibold text-muted">道具がわかれば、一歩が軽くなる。</p>
      </div>
      <h1 className="mt-7 max-w-6xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[56px]">
        ひらけば、自分の可能性が<span className="inline-block">見えてくる。</span>
      </h1>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-muted">
        はじめに、今のAIとの距離感に近い玉手箱を選んでください。
        AIで何ができるかわからない人にも、少し使っている人にも、もっと深く使い分けたい人にも、それぞれに合うAI相棒と最初の一歩を出します。
      </p>
      <div className="mt-8"><TamatebakoDiagnosis /></div>
    </div>
  );
}
