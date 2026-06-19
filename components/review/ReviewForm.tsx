import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { submitReview } from "@/lib/actions/reviews";
import {
  reviewBadPointOptions,
  reviewGoodPointOptions,
  reviewPublishPermissionOptions,
  reviewPurposeOptions,
  reviewRatingOptions,
  reviewRecommendedForOptions,
  reviewToolOptions,
  reviewUseAgainOptions
} from "@/src/data/ai-tamatebako/reviewOptions";

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
          <CheckboxGroup name="tools_used" items={reviewToolOptions} />
        </div>
      </Card>
      <Card>
        <h2 className="font-bold">Q2. 何に使いましたか？</h2>
        <select required name="use_purpose" className="mt-4 w-full rounded-lg border border-line p-3">
          <option value="">選択してください</option>
          {reviewPurposeOptions.map((item) => <option key={item}>{item}</option>)}
        </select>
      </Card>
      <Card>
        <h2 className="font-bold">Q3. 使ってみてどうでしたか？</h2>
        <select required name="rating" className="mt-4 w-full rounded-lg border border-line p-3">
          <option value="">選択してください</option>
          {reviewRatingOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </Card>
      <Card><h2 className="font-bold">Q4. 良かった点</h2><div className="mt-4"><CheckboxGroup name="good_points" items={reviewGoodPointOptions} /></div></Card>
      <Card><h2 className="font-bold">Q5. 困った点</h2><div className="mt-4"><CheckboxGroup name="bad_points" items={reviewBadPointOptions} /></div></Card>
      <Card><h2 className="font-bold">Q6. どんな人に向いていると思いましたか？</h2><div className="mt-4"><CheckboxGroup name="recommended_for" items={reviewRecommendedForOptions} /></div></Card>
      <Card>
        <h2 className="font-bold">Q7. もう一度使いたいですか？</h2>
        <select required name="want_to_use_again" className="mt-4 w-full rounded-lg border border-line p-3">
          <option value="">選択してください</option>
          {reviewUseAgainOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </Card>
      <Card>
        <h2 className="font-bold">Q8. 具体的な使用例</h2>
        <textarea required name="actual_use_case" rows={6} className="mt-4 w-full rounded-lg border border-line p-3" placeholder="例：Claude Codeでサイト全体を読ませたら便利でした。ただ、長く使うと制限が気になりました。Codexに実装だけ任せたら進みが早かったです。" />
      </Card>
      <Card>
        <h2 className="font-bold">Q9. 公開してもいいですか？</h2>
        <select required name="publish_permission" className="mt-4 w-full rounded-lg border border-line p-3">
          {reviewPublishPermissionOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
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
