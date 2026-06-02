import type { Metadata } from "next";
import { ReviewForm } from "@/components/review/ReviewForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "AI使用感投稿",
  description: "使ってみたAIの感想、良かった点、困った点、具体的な使用例を投稿できます。"
};

export default async function ReviewPage({ searchParams }: { searchParams: Promise<{ submitted?: string; error?: string }> }) {
  const params = await searchParams;
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold">AI使用感投稿フォーム</h1>
      <p className="mt-3 text-muted">投稿はまず承認待ちとして保存され、管理画面で確認してから公開用データに変換します。</p>
      {params.submitted && <Card className="mt-6 border-emerald-200 bg-emerald-50 text-emerald-800">投稿を受け付けました。ありがとうございます。</Card>}
      {params.error && <Card className="mt-6 border-red-200 bg-red-50 text-red-700">{params.error}</Card>}
      <div className="mt-8"><ReviewForm /></div>
    </div>
  );
}
