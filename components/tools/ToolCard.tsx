import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { AiTool } from "@/types/database";

export function ToolCard({ tool }: { tool: AiTool }) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <Card className="h-full hover:border-brand">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold">{tool.name}</h3>
          <Badge>{tool.category}</Badge>
        </div>
        <p className="mt-3 text-sm text-muted">{tool.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(tool.best_use_cases ?? []).slice(0, 3).map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </Card>
    </Link>
  );
}
