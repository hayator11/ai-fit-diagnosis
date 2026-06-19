import type { Metadata } from "next";
import { ReviewForm } from "@/components/review/ReviewForm";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI使用感投稿",
  description: "使ってみたAIの感想、良かった点、困った点、具体的な使用例を投稿できます。"
};

export default async function ReviewPage({ searchParams }: { searchParams: Promise<{ submitted?: string; error?: string }> }) {
  const params = await searchParams;
  if (params.submitted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Card className="border-emerald-200 bg-emerald-50 text-emerald-900">
          <p className="text-sm font-bold text-emerald-700">投稿ありがとうございます。</p>
          <h1 className="mt-3 text-3xl font-bold">あなたの使用感を受け取りました。</h1>
          <p className="mt-4 leading-relaxed">
            あなたの使用感は、これからAIを選ぶ誰かの助けになります。運営側で確認したうえで、使用例や診断改善の参考にさせていただきます。
          </p>
          <ButtonLink href="/diagnosis" className="mt-6">AI診断に戻る</ButtonLink>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-sm font-bold text-blue-600">AI使用感投稿</p>
      <h1 className="mt-3 text-3xl font-bold">使ってみたAIの感想を投稿する</h1>
      <div className="mt-4 space-y-2 text-muted">
        <p>あなたの「使ってみた」が、誰かのAI選びを助けます。</p>
        <p>うまくいった話だけでなく、迷ったこと、困ったこと、使いにくかったことも大歓迎です。</p>
        <p className="font-semibold text-ink">孤独な挑戦者を、減らしたい。</p>
      </div>
      {params.error && <Card className="mt-6 border-red-200 bg-red-50 text-red-700">{params.error}</Card>}
      <div className="mt-8"><ReviewForm /></div>
    </div>
  );
}
