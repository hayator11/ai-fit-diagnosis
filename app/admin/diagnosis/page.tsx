import { AdminNav } from "@/components/admin/AdminNav";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { diagnosisQuestions, diagnosisTypes } from "@/lib/data/constants";

export default function AdminDiagnosisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">診断ロジック管理</h1>
      <p className="mt-3 text-muted">MVPでは閲覧のみ。質問、選択肢、score_json の設計を確認できます。</p>
      <div className="mt-6"><AdminNav /></div>
      <section className="grid gap-4 md:grid-cols-2">
        {diagnosisTypes.map((type) => <Card key={type.type_key}><Badge>{type.type_key}</Badge><h2 className="mt-3 font-bold">{type.name}</h2><p className="mt-2 text-sm text-muted">{type.short_description}</p></Card>)}
      </section>
      <section className="mt-8 space-y-4">
        {diagnosisQuestions.map((question, index) => (
          <Card key={question.questionKey}>
            <h2 className="font-bold">Q{index + 1}. {question.questionText}</h2>
            <div className="mt-3 grid gap-2 md:grid-cols-2">{question.answers.map((answer) => <div key={answer.answerKey} className="rounded-lg bg-slate-50 p-3 text-sm">{answer.answerText}</div>)}</div>
          </Card>
        ))}
      </section>
    </div>
  );
}
