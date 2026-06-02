import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { diagnosisTypes } from "@/lib/data/constants";
import type { AiUseCase } from "@/types/database";

export function DiagnosisResult({
  typeKey,
  tools,
  relatedUseCases
}: {
  typeKey: string;
  tools: string[];
  relatedUseCases: AiUseCase[];
}) {
  const type = diagnosisTypes.find((item) => item.type_key === typeKey) ?? diagnosisTypes.find((item) => item.type_key === "producer")!;
  const workflow = tools.length ? tools : type.recommended_workflow;

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-white to-blue-50">
        <Badge>診断結果</Badge>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">あなたは「{type.name}」です。</h1>
        <p className="mt-4 max-w-3xl text-muted">{type.description}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-bold">おすすめAIトップ5</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {workflow.slice(0, 5).map((tool) => (
              <Badge key={tool} className="text-ink">{tool}</Badge>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="font-bold">おすすめの使う順番</h2>
          <p className="mt-3 text-sm text-muted">{workflow.join(" → ")}</p>
        </Card>
        <Card>
          <h2 className="font-bold">最初にやること</h2>
          <p className="mt-3 text-sm text-muted">{type.first_action}</p>
        </Card>
        <Card>
          <h2 className="font-bold">避けた方がいい使い方</h2>
          <p className="mt-3 text-sm text-muted">{type.caution}</p>
        </Card>
      </div>
      <Card>
        <h2 className="font-bold">おすすめプロンプト</h2>
        <p className="mt-3 rounded-lg bg-slate-50 p-4 text-sm text-muted">{type.prompt_example}</p>
      </Card>
      <section>
        <h2 className="text-xl font-bold">関連使用例</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {relatedUseCases.map((item) => (
            <Link key={item.id ?? item.slug} href={`/use-cases/${item.id ?? item.slug}`}>
              <Card className="h-full hover:border-brand">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.purpose}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/review">使ってみた感想を投稿する</ButtonLink>
        <ButtonLink href="/tools" variant="secondary">AI図鑑を見る</ButtonLink>
      </div>
    </div>
  );
}
