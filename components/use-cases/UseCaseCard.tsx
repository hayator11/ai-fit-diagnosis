import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { AiUseCase } from "@/types/database";

export function UseCaseCard({ item }: { item: AiUseCase }) {
  return (
    <Link href={`/use-cases/${item.id ?? item.slug}`}>
      <Card className="h-full hover:border-brand">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-sm text-muted">{item.lesson ?? item.result ?? item.body}</p>
        <p className="mt-3 text-xs font-semibold text-brand">{item.purpose} / {item.user_type ?? "実践例"}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tools_used.slice(0, 4).map((tool) => <Badge key={tool}>{tool}</Badge>)}
        </div>
      </Card>
    </Link>
  );
}
