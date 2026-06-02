import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getUpdateById } from "@/lib/data/queries";
import { formatDate } from "@/lib/utils/formatDate";

export default async function UpdateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getUpdateById(id);
  if (!item) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex flex-wrap gap-2"><Badge>{item.ai_tools?.name ?? "AI"}</Badge><Badge>{item.importance}</Badge><Badge>{item.source_type}</Badge></div>
      <h1 className="mt-4 text-4xl font-bold">{item.title}</h1>
      <p className="mt-3 text-sm text-muted">{formatDate(item.published_at)}</p>
      <Card className="mt-8"><p className="whitespace-pre-wrap text-muted">{item.summary}</p></Card>
      {item.source_url && <div className="mt-6"><ButtonLink href={item.source_url} variant="secondary">情報元を見る</ButtonLink></div>}
    </div>
  );
}
