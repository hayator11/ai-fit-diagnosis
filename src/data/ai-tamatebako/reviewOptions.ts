export type ReviewOption = {
  label: string;
  value: string;
};

export const reviewToolOptions = [
  "ChatGPT",
  "Claude",
  "Claude Code",
  "Codex",
  "Gemini",
  "NotebookLM",
  "Genspark",
  "Suno",
  "Udio",
  "Runway",
  "Gamma",
  "Napkin AI",
  "Perplexity",
  "Felo",
  "Supabase",
  "Canva",
  "その他"
];

export const reviewPurposeOptions = [
  "文章作成",
  "SNS投稿",
  "サイト制作",
  "診断サイト制作",
  "コード実装",
  "資料整理",
  "リサーチ",
  "音楽制作",
  "動画制作",
  "画像生成",
  "業務効率化",
  "企画づくり",
  "その他"
];

export const reviewRatingOptions: ReviewOption[] = [
  { label: "とても良かった", value: "very_good" },
  { label: "良かった", value: "good" },
  { label: "普通", value: "normal" },
  { label: "微妙だった", value: "not_good" },
  { label: "使いにくかった", value: "hard_to_use" }
];

export const reviewGoodPointOptions = [
  "速かった",
  "考えが整理できた",
  "文章がうまくなった",
  "実装が進んだ",
  "資料整理が楽になった",
  "アイデアが増えた",
  "時間短縮になった",
  "自分ではできないことができた",
  "使う順番が見えた",
  "仲間と共有しやすくなった"
];

export const reviewBadPointOptions = [
  "制限にかかった",
  "料金がわかりにくい",
  "出力がズレた",
  "コードが壊れた",
  "情報が古かった",
  "使い方が難しかった",
  "日本語が弱かった",
  "思ったほど便利ではなかった",
  "何を聞けばいいかわからなかった",
  "他のAIとの使い分けが難しかった"
];

export const reviewRecommendedForOptions = [
  "初心者",
  "発信者",
  "クリエイター",
  "エンジニア",
  "経営者",
  "学生",
  "先生",
  "チーム運営者",
  "資料が多い人",
  "サイトを作りたい人",
  "AIを使い分けたい人",
  "プロジェクトを動かしたい人"
];

export const reviewUseAgainOptions: ReviewOption[] = [
  { label: "使いたい", value: "yes" },
  { label: "用途によって使いたい", value: "depends" },
  { label: "たぶん使わない", value: "probably_no" },
  { label: "別のAIを試したい", value: "try_other" }
];

export const reviewPublishPermissionOptions: ReviewOption[] = [
  { label: "匿名で公開OK", value: "anonymous_public" },
  { label: "名前付きで公開OK", value: "named_public" },
  { label: "運営だけ確認OK", value: "admin_only" },
  { label: "公開NG", value: "private" }
];

export const reviewStatusOptions: ReviewOption[] = [
  { label: "確認待ち", value: "pending" },
  { label: "確認済み", value: "reviewed" },
  { label: "承認", value: "approved" },
  { label: "却下", value: "rejected" },
  { label: "使用例に変換済み", value: "converted_to_use_case" }
];

export function getReviewOptionLabel(options: ReviewOption[], value?: string | null) {
  return options.find((option) => option.value === value)?.label ?? value ?? "";
}
