import { AdminNav } from "@/components/admin/AdminNav";
import { Card } from "@/components/ui/Card";
import { getExperienceLevelChartData, getMainAiChartData, getResultTypeChartData, getSourceChartData } from "@/src/data/ai-tamatebako/chartData";
import { mockResponses } from "@/src/data/ai-tamatebako/mockResponses";
import { getMockSummary } from "@/src/data/ai-tamatebako/mockSummary";
import { results } from "@/src/data/ai-tamatebako/results";

const levelLabels = {
  beginner: "はじめてに近い",
  intermediate: "少し使っている",
  advanced: "もっと深く知りたい"
};

const deviceLabels = {
  mobile: "スマホ",
  desktop: "PC",
  tablet: "タブレット"
};

const resultLabels = Object.fromEntries(results.map((result) => [result.id, result.title]));

export default function AdminTamatebakoPage() {
  const summary = getMockSummary();
  const levelData = getExperienceLevelChartData();
  const mainAiData = getMainAiChartData();
  const resultTypeData = getResultTypeChartData();
  const sourceData = getSourceChartData();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">AI玉手箱診断 管理画面</h1>
      <p className="mt-3 text-muted">今はダミーデータで、診断後に何を確認できるかを見えるようにしています。</p>
      <div className="mt-6"><AdminNav /></div>

      <div className="grid gap-4 md:grid-cols-5">
        <Card><p className="text-sm text-muted">累計診断数</p><p className="mt-2 text-3xl font-bold">{summary.total}</p></Card>
        <Card><p className="text-sm text-muted">完了数</p><p className="mt-2 text-3xl font-bold">{summary.completed}</p></Card>
        <Card><p className="text-sm text-muted">完了率</p><p className="mt-2 text-3xl font-bold">{summary.completionRate}%</p></Card>
        <Card><p className="text-sm text-muted">次の行動クリック</p><p className="mt-2 text-3xl font-bold">{summary.ctaClicks}</p></Card>
        <Card><p className="text-sm text-muted">シェア</p><p className="mt-2 text-3xl font-bold">{summary.shareClicks}</p></Card>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ChartCard title="玉手箱別の人数" data={levelData} />
        <ChartCard title="メインAI別の人数" data={mainAiData} />
        <ChartCard title="診断結果タイプ別の人数" data={resultTypeData.map((item) => ({ ...item, label: resultLabels[item.label] ?? item.label }))} />
        <ChartCard title="流入元別の人数" data={sourceData} />
      </div>

      <div className="mt-6 flex justify-end">
        <a href="/admin/tamatebako/export" className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50">
          CSV出力
        </a>
      </div>

      <Card className="mt-4 overflow-hidden p-0">
        <div className="border-b border-line p-5">
          <h2 className="text-xl font-bold">回答リスト</h2>
          <p className="mt-2 text-sm text-muted">favoriteAi、favoriteCategory、topicsOfInterest も確認できます。</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="bg-slate-50 text-muted">
              <tr>
                <th className="px-4 py-3">日時</th>
                <th className="px-4 py-3">玉手箱</th>
                <th className="px-4 py-3">結果</th>
                <th className="px-4 py-3">メインAI</th>
                <th className="px-4 py-3">favoriteAi</th>
                <th className="px-4 py-3">favoriteCategory</th>
                <th className="px-4 py-3">topicsOfInterest</th>
                <th className="px-4 py-3">端末</th>
              </tr>
            </thead>
            <tbody>
              {mockResponses.map((item) => (
                <tr key={item.id} className="border-t border-line align-top">
                  <td className="px-4 py-3">{new Date(item.createdAt).toLocaleString("ja-JP")}</td>
                  <td className="px-4 py-3">{levelLabels[item.experienceLevel]}</td>
                  <td className="px-4 py-3">{resultLabels[item.resultType] ?? item.resultType}</td>
                  <td className="px-4 py-3 font-semibold">{item.mainAi}</td>
                  <td className="px-4 py-3">{item.favoriteAi.join(" / ")}</td>
                  <td className="px-4 py-3">{item.favoriteCategory.join(" / ")}</td>
                  <td className="px-4 py-3">{item.topicsOfInterest.join(" / ")}</td>
                  <td className="px-4 py-3">{deviceLabels[item.deviceType]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function ChartCard({ title, data }: { title: string; data: { label: string; value: number }[] }) {
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <Card>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-4 space-y-3">
        {data.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm">
              <span className="font-semibold">{item.label}</span>
              <span className="text-muted">{item.value}人</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-gradient-to-r from-amber-300 to-indigo-500" style={{ width: `${(item.value / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
