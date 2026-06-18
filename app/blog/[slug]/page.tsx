import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getArticle } from "@/lib/content/blog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Badge>{article.category}</Badge>
      <h1 className="mt-4 text-4xl font-bold">{article.title}</h1>
      <p className="mt-4 text-muted">{article.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {article.keywords.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}
      </div>
      <Card className="mt-8 space-y-5">
        {article.body.map((paragraph) => (
          <p key={paragraph} className="leading-8 text-muted">{paragraph}</p>
        ))}
      </Card>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/diagnosis">診断してみる</ButtonLink>
        <ButtonLink href="/use-cases" variant="secondary">関連する使用例を見る</ButtonLink>
      </div>
    </div>
  );
}
