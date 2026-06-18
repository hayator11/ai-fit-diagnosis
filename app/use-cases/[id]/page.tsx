import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getUseCaseById } from "@/lib/data/queries";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const item = await getUseCaseById(id);
  if (!item) return {};
  return {
    title: item.title,
    description: item.lesson ?? item.result ?? `${item.purpose}のAI使用例です。`
  };
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getUseCaseById(id);
  if (!item) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-bold">{item.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">{item.tools_used.map((tool) => <Badge key={tool}>{tool}</Badge>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card><h2 className="font-bold">目的</h2><p className="mt-3 text-sm text-muted">{item.purpose}</p></Card>
        <Card><h2 className="font-bold">使用者タイプ</h2><p className="mt-3 text-sm text-muted">{item.user_type ?? "未設定"}</p></Card>
        <Card><h2 className="font-bold">成果物</h2><p className="mt-3 text-sm text-muted">{item.result}</p></Card>
        <Card><h2 className="font-bold">使った順番</h2><p className="mt-3 text-sm text-muted">{(item.workflow ?? item.tools_used).join(" → ")}</p></Card>
        <Card><h2 className="font-bold">向いている人</h2><p className="mt-3 text-sm text-muted">{(item.recommended_for ?? []).join("、")}</p></Card>
        <Card><h2 className="font-bold">使用量・制限メモ</h2><p className="mt-3 text-sm text-muted">{item.token_note ?? "未設定"}</p></Card>
        <Card><h2 className="font-bold">時間短縮効果</h2><p className="mt-3 text-sm text-muted">{item.time_saved_note ?? "未設定"}</p></Card>
        <Card><h2 className="font-bold">難易度 / おすすめ度</h2><p className="mt-3 text-sm text-muted">{item.difficulty ?? "未設定"} / {item.recommendation_score ? `${item.recommendation_score}/5` : "未設定"}</p></Card>
      </div>
      <Card className="mt-6"><h2 className="font-bold">学び</h2><p className="mt-3 text-sm text-muted">{item.lesson}</p></Card>
      <Card className="mt-6"><h2 className="font-bold">良かった点</h2><ul className="mt-3 list-disc pl-5 text-sm text-muted">{(item.good_points ?? []).map((point) => <li key={point}>{point}</li>)}</ul></Card>
      <Card className="mt-6"><h2 className="font-bold">困った点</h2><ul className="mt-3 list-disc pl-5 text-sm text-muted">{(item.pain_points ?? []).map((point) => <li key={point}>{point}</li>)}</ul></Card>
      <Card className="mt-6"><h2 className="font-bold">本文</h2><p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-muted">{item.body}</p></Card>
    </div>
  );
}
