import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { UseCaseCard } from "@/components/use-cases/UseCaseCard";
import { getPublishedUseCases, getToolBySlug } from "@/lib/data/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name}の使いどころ`,
    description: tool.summary ?? `${tool.name}が何に向いているか、得意なこと、苦手なこと、使用例を紹介します。`
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [tool, useCases] = await Promise.all([getToolBySlug(slug), getPublishedUseCases()]);
  if (!tool) notFound();
  const related = useCases.filter((item) => item.tools_used.includes(tool.name)).slice(0, 3);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Badge>{tool.category}</Badge>
      <h1 className="mt-4 text-4xl font-bold">{tool.name}</h1>
      <p className="mt-4 max-w-3xl text-muted">{tool.summary}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card><h2 className="font-bold">できること</h2><p className="mt-3 text-sm text-muted">{tool.description}</p></Card>
        <Card><h2 className="font-bold">料金・制限メモ</h2><p className="mt-3 text-sm text-muted">{tool.pricing_note ?? "最新の料金や制限は公式情報を確認してください。"}</p></Card>
        <Card><h2 className="font-bold">得意なこと</h2><ul className="mt-3 list-disc pl-5 text-sm text-muted">{(tool.strengths ?? []).map((item) => <li key={item}>{item}</li>)}</ul></Card>
        <Card><h2 className="font-bold">苦手なこと</h2><ul className="mt-3 list-disc pl-5 text-sm text-muted">{(tool.weaknesses ?? []).map((item) => <li key={item}>{item}</li>)}</ul></Card>
        <Card><h2 className="font-bold">向いている人 / 用途</h2><ul className="mt-3 list-disc pl-5 text-sm text-muted">{(tool.best_use_cases ?? []).map((item) => <li key={item}>{item}</li>)}</ul></Card>
        <Card><h2 className="font-bold">更新日</h2><p className="mt-3 text-sm text-muted">{tool.latest_update ?? tool.updated_at ?? "未設定"}</p></Card>
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-bold">関連する使用例</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{related.map((item) => <UseCaseCard key={item.id ?? item.slug} item={item} />)}</div>
      </section>
    </div>
  );
}
