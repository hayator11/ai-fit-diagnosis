import type { Metadata } from "next";
import { DiagnosisForm } from "@/components/diagnosis/DiagnosisForm";

export const metadata: Metadata = {
  title: "AI診断",
  description: "AI初心者、少し使っている人、もっと深く知りたい人に分けて、使えそうなAIと最初の一歩を診断します。"
};

export default function DiagnosisPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">AIで何をしたらいいか診断</h1>
      <p className="mt-3 text-muted">
        はじめに、AIとの距離感を3つに分けます。何を聞いたらいいかわからない人、少し使ってみている人、もっとコアな使い分けを知りたい人。それぞれに合わせて、使えそうなAIと最初の一歩を提案します。
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          ["はじめてに近い", "何を聞いたらいいかわからない人向けに、まず頼みやすい使い方から出します。"],
          ["少し使っている", "ChatGPTなどを触ったことがある人向けに、用途別の使い分けを出します。"],
          ["もっと深く知りたい", "設計、資料整理、実装、DB化など、AIを分担させる使い方まで出します。"]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-line bg-white p-4">
            <h2 className="font-bold">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8"><DiagnosisForm /></div>
    </div>
  );
}
