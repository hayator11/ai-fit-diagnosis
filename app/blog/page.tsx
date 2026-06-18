import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { blogArticles } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "実践ブログ",
  description: "AIツールの比較ではなく、使い分け方、順番、具体的な使用例を記事として整理します。"
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold text-brand">実践ブログ</p>
      <h1 className="mt-3 text-4xl font-bold">AIの選び方ではなく、使い分け方を書く。</h1>
      <p className="mt-4 max-w-3xl text-muted">
        SEOとLLMOの入口として、AIごとの違い、具体的な使用例、失敗例、使う順番を記事化していきます。
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {blogArticles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`}>
            <Card className="h-full hover:border-brand">
              <Badge>{article.category}</Badge>
              <h2 className="mt-3 text-xl font-bold">{article.title}</h2>
              <p className="mt-2 text-sm text-muted">{article.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.keywords.slice(0, 3).map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
