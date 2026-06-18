export type DeepScoreKey = "marunage" | "template" | "sekkei";

export type DeepQuestionOption = {
  id: string;
  label: string;
  scores: Record<DeepScoreKey, number>;
};

export type DeepQuestion = {
  id: string;
  title: string;
  type: "single";
  options: DeepQuestionOption[];
};

export const deepQuestions: DeepQuestion[] = [
  {
    id: "deep_q1_request_start",
    title: "AIに頼む時、最初に何を伝えますか？",
    type: "single",
    options: [
      { id: "deep_q1_marunage", label: "とりあえず「いい感じに」と頼む", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q1_use", label: "用途だけ伝える", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q1_purpose_reader", label: "目的と読者を伝える", scores: { marunage: 0, template: 2, sekkei: 2 } },
      { id: "deep_q1_full_context", label: "目的・読者・条件・NG表現まで伝える", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q2_output_image",
    title: "完成形をどこまで決めていますか？",
    type: "single",
    options: [
      { id: "deep_q2_none", label: "ほぼ決めていない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q2_vague", label: "なんとなくある", scores: { marunage: 2, template: 1, sekkei: 0 } },
      { id: "deep_q2_format", label: "形式だけ決めている", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q2_reader_place", label: "読後感や使う場所まで決めている", scores: { marunage: 0, template: 1, sekkei: 3 } }
    ]
  },
  {
    id: "deep_q3_background",
    title: "自分の体験や背景をAIに渡しますか？",
    type: "single",
    options: [
      { id: "deep_q3_never", label: "渡さない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q3_sometimes", label: "たまに渡す", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q3_when_needed", label: "必要な時は渡す", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q3_always", label: "必ず渡す", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q4_after_output",
    title: "AIの出力後に何をしますか？",
    type: "single",
    options: [
      { id: "deep_q4_use_as_is", label: "そのまま使う", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q4_fix", label: "少し直す", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q4_ask_improvement", label: "改善点を聞く", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q4_iterate", label: "何度も壁打ちして磨く", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q5_ng_words",
    title: "NG表現を指定しますか？",
    type: "single",
    options: [
      { id: "deep_q5_never", label: "しない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q5_sometimes", label: "たまにする", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q5_when_wrong", label: "違和感がある時だけする", scores: { marunage: 1, template: 2, sekkei: 1 } },
      { id: "deep_q5_from_start", label: "最初から指定する", scores: { marunage: 0, template: 1, sekkei: 3 } }
    ]
  },
  {
    id: "deep_q6_audience",
    title: "AIに誰向けの内容かを伝えますか？",
    type: "single",
    options: [
      { id: "deep_q6_never", label: "伝えない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q6_demographic", label: "年代や属性だけ伝える", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q6_problem_context", label: "悩みや状況まで伝える", scores: { marunage: 0, template: 2, sekkei: 2 } },
      { id: "deep_q6_psychology_action", label: "読者の心理や行動してほしいことまで伝える", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q7_weakness",
    title: "AIに「どこが弱いか」を聞きますか？",
    type: "single",
    options: [
      { id: "deep_q7_never", label: "聞かない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q7_sometimes", label: "たまに聞く", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q7_important", label: "大事な時は聞く", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q7_every_time", label: "毎回聞く", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q8_constraints",
    title: "AIに条件や制約を渡しますか？",
    type: "single",
    options: [
      { id: "deep_q8_rarely", label: "ほとんど渡さない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q8_format_only", label: "文字数や形式だけ伝える", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q8_by_purpose", label: "目的に合わせて条件を伝える", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q8_priority", label: "変更禁止事項や優先順位まで伝える", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q9_misalignment",
    title: "AIの答えがズレた時どうしますか？",
    type: "single",
    options: [
      { id: "deep_q9_stop", label: "使うのをやめる", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q9_fix_myself", label: "自分で直す", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q9_retry_with_gap", label: "どこがズレたか伝えて再依頼する", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q9_analyze_context", label: "ズレた理由を分析して、前提から整え直す", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q10_role",
    title: "AIに役割を渡しますか？",
    type: "single",
    options: [
      { id: "deep_q10_none", label: "渡さない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q10_pro", label: "たまに「プロとして」と言う", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q10_fit_role", label: "目的に合う役割を指定する", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q10_full_role", label: "役割・読者・制約・評価基準まで渡す", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  },
  {
    id: "deep_q11_reuse",
    title: "AIを使った後、型として残しますか？",
    type: "single",
    options: [
      { id: "deep_q11_never", label: "残さない", scores: { marunage: 3, template: 0, sekkei: 0 } },
      { id: "deep_q11_save_good", label: "良かった回答だけ保存する", scores: { marunage: 1, template: 2, sekkei: 0 } },
      { id: "deep_q11_prompt_note", label: "よく使うプロンプトをメモする", scores: { marunage: 0, template: 3, sekkei: 1 } },
      { id: "deep_q11_template", label: "再利用できるテンプレートとして整理する", scores: { marunage: 0, template: 0, sekkei: 4 } }
    ]
  }
];
