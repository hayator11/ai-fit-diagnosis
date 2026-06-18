import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DeepDiagnosisForm } from "@/components/tamatebako/DeepDiagnosisForm";

export const metadata: Metadata = {
  title: "AIへの頼み方まで診断する",
  description: "AIの選び方だけでなく、頼み方・前提整理・改善の仕方まで見ていく深掘り診断の準備ページです。"
};

const styles = [
  {
    title: "丸投げ型",
    body: "「いい感じにして」で止まりやすい状態。まずは目的・読者・完成形を渡すところから始めます。"
  },
  {
    title: "テンプレ指示型",
    body: "用途や条件は伝えられている状態。次は、相手の悩みやNG表現まで渡せるようにします。"
  },
  {
    title: "設計型",
    body: "AIが答えやすい環境を先に作れる状態。壁打ちしながら、よりよい出力に磨いていきます。"
  }
];

export default function DeepDiagnosisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-sm font-semibold text-brand">AI玉手箱診断</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
        AIへの頼み方まで診断する
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
        AIの成果は、どのAIを使うかだけでは決まりません。
        <br />
        最初に何を渡すかで、出てくる答えは大きく変わります。
      </p>

      <div className="mt-8 max-w-4xl space-y-5 leading-8 text-muted">
        <p>
          ライト診断では、あなたに合うAIと使う順番を見つけました。
          <br />
          深掘り診断では、さらに一歩進んで、AIへの頼み方を見ていきます。
        </p>
        <p>
          誰に届けたいのか。
          <br />
          何を伝えたいのか。
          <br />
          どんな条件があるのか。
          <br />
          何は避けたいのか。
          <br />
          完成後にどう磨くのか。
        </p>
        <p>ここまで整理できると、AIはもっと力を発揮します。</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {styles.map((item) => (
          <Card key={item.title}>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="mt-3 leading-7 text-muted">{item.body}</p>
          </Card>
        ))}
      </div>

      <DeepDiagnosisForm />

      <Card className="mt-8 flex flex-col gap-4 border-amber-100 bg-amber-50/50 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand">孤独な挑戦者を、減らしたい。</p>
          <p className="mt-2 text-sm text-muted">ライト診断に戻って、AI相棒と使う順番をもう一度確認できます。</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/diagnosis" variant="secondary">
            ライト診断に戻る
          </ButtonLink>
        </div>
      </Card>
    </div>
  );
}
