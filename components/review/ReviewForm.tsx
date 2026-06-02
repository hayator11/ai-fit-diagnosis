import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { aiToolNames } from "@/lib/data/constants";
import { submitReview } from "@/lib/actions/reviews";

const purposes = ["文章作成", "SNS投稿", "サイト制作", "コード実装", "資料整理", "リサーチ", "音楽制作", "動画制作", "画像生成", "業務効率化", "企画づくり", "その他"];
const ratings = ["とても良かった", "良かった", "普通", "微妙だった", "使いにくかった"];
const goodPoints = ["速かった", "考えが整理できた", "文章がうまくなった", "実装が進んだ", "資料整理が楽になった", "アイデアが増えた", "時間短縮になった", "自分ではできないことができた"];
const badPoints = ["制限にかかった", "料金がわかりにくい", "出力がズレた", "コードが壊れた", "情報が古かった", "使い方が難しかった", "日本語が弱かった", "思ったほど便利ではなかった"];
const recommendedFor = ["初心者", "発信者", "クリエイター", "エンジニア", "経営者", "学生", "先生", "チーム運営者", "資料が多い人", "サイトを作りたい人"];

function CheckboxGroup({ name, items }: { name: string; items: string[] }) {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-2 rounded-lg border border-line bg-white p-3 text-sm">
          <input type="checkbox" name={name} value={item} className="h-4 w-4" />
          {item}
        </label>
      ))}
    </div>
  );
}

export function ReviewForm() {
  return (
    <form action={submitReview} className="space-y-5">
      <Card>
        <h2 className="font-bold">Q1. 使ったAI</h2>
        <div className="mt-4">
          <CheckboxGroup name="tools_used" items={[...aiToolNames, "その他"]} />
        </div>
      </Card>
      <Card>
        <h2 className="font-bold">Q2. 何に使いましたか？</h2>
        <select required name="use_purpose" className="mt-4 w-full rounded-lg border border-line p-3">
          <option value="">選択してください</option>
          {purposes.map((item) => <option key={item}>{item}</option>)}
        </select>
      </Card>
      <Card>
        <h2 className="font-bold">Q3. 使ってみてどうでしたか？</h2>
        <select required name="rating" className="mt-4 w-full rounded-lg border border-line p-3">
          <option value="">選択してください</option>
          {ratings.map((item) => <option key={item}>{item}</option>)}
        </select>
      </Card>
      <Card><h2 className="font-bold">Q4. 良かった点</h2><div className="mt-4"><CheckboxGroup name="good_points" items={goodPoints} /></div></Card>
      <Card><h2 className="font-bold">Q5. 困った点</h2><div className="mt-4"><CheckboxGroup name="bad_points" items={badPoints} /></div></Card>
      <Card><h2 className="font-bold">Q6. どんな人に向いていると思いましたか？</h2><div className="mt-4"><CheckboxGroup name="recommended_for" items={recommendedFor} /></div></Card>
      <Card>
        <h2 className="font-bold">Q7. もう一度使いたいですか？</h2>
        <select name="want_to_use_again" className="mt-4 w-full rounded-lg border border-line p-3">
          {["使いたい", "用途によって使いたい", "たぶん使わない", "別のAIを試したい"].map((item) => <option key={item}>{item}</option>)}
        </select>
      </Card>
      <Card>
        <h2 className="font-bold">Q8. 具体的な使用例</h2>
        <textarea name="actual_use_case" rows={6} className="mt-4 w-full rounded-lg border border-line p-3" placeholder="例：Claude Codeでサイト全体を読ませたら便利だったが、長く使うと制限が気になった。Codexに実装だけ任せたら進みが早かった。" />
      </Card>
      <Card>
        <h2 className="font-bold">Q9. 公開してもいいですか？</h2>
        <select required name="publish_permission" className="mt-4 w-full rounded-lg border border-line p-3">
          <option value="anonymous_public">匿名で公開OK</option>
          <option value="named_public">名前付きで公開OK</option>
          <option value="admin_only">運営だけ確認OK</option>
          <option value="private">公開NG</option>
        </select>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h2 className="font-bold">Q10. 名前または表示名</h2><input name="display_name" className="mt-4 w-full rounded-lg border border-line p-3" /></Card>
        <Card><h2 className="font-bold">Q11. URL</h2><input name="display_url" type="url" className="mt-4 w-full rounded-lg border border-line p-3" /></Card>
      </div>
      <Button className="w-full" type="submit">使用感を投稿する</Button>
    </form>
  );
}
