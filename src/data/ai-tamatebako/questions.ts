export type QuestionOption = {
  id: string;
  label: string;
  description?: string;
  scores: {
    writing?: number;
    research?: number;
    design?: number;
    video?: number;
    voice?: number;
    productivity?: number;
    development?: number;
    creative?: number;
    community?: number;
    monetization?: number;
    beginner?: number;
  };
  preferenceTags?: string[];
};

export type Question = {
  id: string;
  title: string;
  description?: string;
  type: "single" | "multiple";
  options: QuestionOption[];
};

export const questions: Question[] = [
  {
    id: "q1_goal",
    title: "AIで一番やりたいことは？",
    description: "今のあなたに一番近いものを選んでください。",
    type: "single",
    options: [
      { id: "q1_writing", label: "文章をつくりたい", scores: { writing: 4, beginner: 1 }, preferenceTags: ["文章", "SNS投稿", "言語化"] },
      { id: "q1_research", label: "調べものをしたい", scores: { research: 4, productivity: 1 }, preferenceTags: ["調査", "情報整理", "資料読み込み"] },
      { id: "q1_design", label: "画像やデザインをつくりたい", scores: { design: 4, creative: 1 }, preferenceTags: ["画像", "デザイン", "資料作成"] },
      { id: "q1_video", label: "動画をつくりたい", scores: { video: 4, creative: 1 }, preferenceTags: ["動画", "ショート動画", "映像表現"] },
      { id: "q1_voice", label: "音声やナレーションをつくりたい", scores: { voice: 4, creative: 1 }, preferenceTags: ["音声", "ナレーション", "音声配信"] },
      { id: "q1_programming", label: "プログラムやアプリをつくりたい", scores: { development: 5, productivity: 1, creative: 1 }, preferenceTags: ["プログラム", "アプリ", "Web制作", "実装"] },
      { id: "q1_productivity", label: "仕事や活動を効率化したい", scores: { productivity: 4, research: 1 }, preferenceTags: ["仕事", "活動", "効率化", "業務改善"] },
      { id: "q1_unknown", label: "まだよくわからない", scores: { beginner: 4, writing: 1, productivity: 1 }, preferenceTags: ["初心者", "AIの始め方"] }
    ]
  },
  {
    id: "q2_problem",
    title: "今、いちばん困っていることは？",
    type: "single",
    options: [
      { id: "q2_idea", label: "アイデアが出ない", scores: { creative: 3, writing: 2 }, preferenceTags: ["アイデア出し", "企画"] },
      { id: "q2_time", label: "作業に時間がかかる", scores: { productivity: 4 }, preferenceTags: ["時短", "効率化"] },
      { id: "q2_sns", label: "発信が続かない", scores: { writing: 3, design: 1, community: 1 }, preferenceTags: ["SNS投稿", "発信"] },
      { id: "q2_material", label: "資料づくりが苦手", scores: { design: 2, productivity: 2, research: 1 }, preferenceTags: ["資料作成", "スライド", "整理"] },
      { id: "q2_video_voice", label: "動画や音声を作れない", scores: { video: 3, voice: 3 }, preferenceTags: ["動画", "音声"] },
      { id: "q2_too_many", label: "AIが多すぎて選べない", scores: { beginner: 3, productivity: 1 }, preferenceTags: ["AI使い分け", "初心者"] }
    ]
  },
  {
    id: "q3_usage",
    title: "あなたの使い方に近いものは？",
    type: "multiple",
    options: [
      { id: "q3_personal", label: "個人で使いたい", scores: { beginner: 1, productivity: 1 }, preferenceTags: ["個人利用"] },
      { id: "q3_work", label: "仕事で使いたい", scores: { productivity: 3, research: 1 }, preferenceTags: ["仕事", "業務効率化"] },
      { id: "q3_team", label: "チームで使いたい", scores: { community: 3, productivity: 2 }, preferenceTags: ["チーム", "コミュニティ"] },
      { id: "q3_sns", label: "SNS発信に使いたい", scores: { writing: 2, design: 2, creative: 1 }, preferenceTags: ["SNS投稿", "発信"] },
      { id: "q3_creation", label: "作品づくりに使いたい", scores: { creative: 3, design: 1, video: 1, voice: 1 }, preferenceTags: ["創作", "作品"] },
      { id: "q3_learning", label: "学びに使いたい", scores: { research: 2, beginner: 1 }, preferenceTags: ["学習", "情報整理"] }
    ]
  },
  {
    id: "q4_preference",
    title: "AIに求めるものは？",
    type: "multiple",
    options: [
      { id: "q4_easy", label: "とにかく簡単", scores: { beginner: 4 }, preferenceTags: ["簡単", "初心者向け"] },
      { id: "q4_quality", label: "高品質な出力", scores: { creative: 2, writing: 1, design: 1 }, preferenceTags: ["高品質"] },
      { id: "q4_japanese", label: "日本語の使いやすさ", scores: { writing: 2, research: 1 }, preferenceTags: ["日本語"] },
      { id: "q4_efficiency", label: "仕事の効率化", scores: { productivity: 4 }, preferenceTags: ["効率化", "仕事"] },
      { id: "q4_creative", label: "クリエイティブ性", scores: { creative: 4, design: 1, video: 1, voice: 1 }, preferenceTags: ["創作", "表現"] },
      { id: "q4_cost", label: "コストの安さ", scores: { beginner: 2, productivity: 1 }, preferenceTags: ["無料", "低コスト"] }
    ]
  },
  {
    id: "q5_interest_ai",
    title: "気になるAIはありますか？",
    description: "複数選んでも大丈夫です。",
    type: "multiple",
    options: [
      { id: "q5_chatgpt", label: "ChatGPT", scores: { writing: 2, beginner: 1, productivity: 1 }, preferenceTags: ["ChatGPT"] },
      { id: "q5_claude", label: "Claude", scores: { writing: 2, creative: 2 }, preferenceTags: ["Claude"] },
      { id: "q5_gemini", label: "Gemini", scores: { productivity: 2, research: 1 }, preferenceTags: ["Gemini"] },
      { id: "q5_canva", label: "Canva", scores: { design: 3 }, preferenceTags: ["Canva"] },
      { id: "q5_notebooklm", label: "NotebookLM", scores: { research: 3 }, preferenceTags: ["NotebookLM"] },
      { id: "q5_voice_video", label: "音声AI・動画AI", scores: { voice: 2, video: 2, creative: 1 }, preferenceTags: ["音声AI", "動画AI"] },
      { id: "q5_coding", label: "Codex・Claude Codeなど実装AI", scores: { productivity: 2, creative: 1 }, preferenceTags: ["Codex", "Claude Code", "実装"] }
    ]
  },
  {
    id: "q6_result_need",
    title: "結果で知りたいことは？",
    type: "multiple",
    options: [
      { id: "q6_first_ai", label: "まず使うべきAI", scores: { beginner: 3 }, preferenceTags: ["最初のAI"] },
      { id: "q6_combination", label: "組み合わせると強いAI", scores: { productivity: 2, creative: 1 }, preferenceTags: ["AI組み合わせ"] },
      { id: "q6_free", label: "無料で試せるAI", scores: { beginner: 2 }, preferenceTags: ["無料"] },
      { id: "q6_work", label: "仕事に使えるAI", scores: { productivity: 3 }, preferenceTags: ["仕事"] },
      { id: "q6_sns", label: "発信に使えるAI", scores: { writing: 2, design: 2 }, preferenceTags: ["SNS投稿", "発信"] },
      { id: "q6_monetize", label: "収益化に使えるAI", scores: { monetization: 3, creative: 1 }, preferenceTags: ["収益化", "アフィリエイト"] }
    ]
  },
  {
    id: "q7_type",
    title: "あなたに近いタイプは？",
    type: "single",
    options: [
      { id: "q7_words", label: "文章で伝える人", scores: { writing: 4 }, preferenceTags: ["文章", "言葉"] },
      { id: "q7_researcher", label: "調べて整理する人", scores: { research: 4 }, preferenceTags: ["調査", "整理"] },
      { id: "q7_visual", label: "デザインで見せる人", scores: { design: 4 }, preferenceTags: ["デザイン", "画像"] },
      { id: "q7_movie", label: "動画で届ける人", scores: { video: 4 }, preferenceTags: ["動画"] },
      { id: "q7_voice", label: "声や音で届ける人", scores: { voice: 4 }, preferenceTags: ["音声"] },
      { id: "q7_searching", label: "まだ自分の型を探している人", scores: { beginner: 3, creative: 1 }, preferenceTags: ["可能性探索", "初心者"] }
    ]
  },
  {
    id: "q8_priority",
    title: "重視したいことは？",
    type: "single",
    options: [
      { id: "q8_speed", label: "速さ", scores: { productivity: 3, beginner: 1 }, preferenceTags: ["速さ", "時短"] },
      { id: "q8_easy_to_understand", label: "わかりやすさ", scores: { beginner: 3, writing: 1 }, preferenceTags: ["わかりやすさ", "初心者"] },
      { id: "q8_accuracy", label: "正確さ", scores: { research: 3, productivity: 1 }, preferenceTags: ["正確さ", "調査"] },
      { id: "q8_expression", label: "表現力", scores: { writing: 2, creative: 2 }, preferenceTags: ["表現力", "文章", "創作"] },
      { id: "q8_implementation", label: "実装力", scores: { development: 4, productivity: 1 }, preferenceTags: ["実装力", "開発"] },
      { id: "q8_design", label: "デザイン性", scores: { design: 4, creative: 1 }, preferenceTags: ["デザイン性", "見た目"] },
      { id: "q8_team_sharing", label: "チーム共有", scores: { community: 3, productivity: 1 }, preferenceTags: ["チーム共有", "コミュニティ"] },
      { id: "q8_operation", label: "継続運用", scores: { productivity: 3, community: 1 }, preferenceTags: ["継続運用", "仕組み化"] }
    ]
  },
  {
    id: "q9_prompt_style",
    title: "AIへの頼み方はどれに近いですか？",
    type: "single",
    options: [
      { id: "q9_good_feeling", label: "「いい感じにして」と頼むことが多い", scores: { beginner: 3 }, preferenceTags: ["頼み方", "初心者"] },
      { id: "q9_use_only", label: "用途だけ伝えることが多い", scores: { beginner: 2, productivity: 1 }, preferenceTags: ["用途", "頼み方"] },
      { id: "q9_reader_purpose", label: "読者や目的も少し伝える", scores: { writing: 2, productivity: 1 }, preferenceTags: ["読者", "目的"] },
      { id: "q9_conditions_ng", label: "条件やNG表現も伝える", scores: { writing: 2, creative: 1, productivity: 1 }, preferenceTags: ["条件", "NG表現"] },
      { id: "q9_ask_improvement", label: "出力後に改善点まで聞く", scores: { productivity: 2, creative: 2 }, preferenceTags: ["改善", "磨き込み"] },
      { id: "q9_iterate", label: "何度も壁打ちしながら磨く", scores: { creative: 3, community: 1 }, preferenceTags: ["壁打ち", "改善"] }
    ]
  },
  {
    id: "q10_goal_state",
    title: "最終的に目指したい状態は？",
    type: "single",
    options: [
      { id: "q10_use_conveniently", label: "AIを便利に使いたい", scores: { beginner: 3, productivity: 1 }, preferenceTags: ["便利", "初心者"] },
      { id: "q10_writing_stronger", label: "AIで文章や発信を強くしたい", scores: { writing: 4 }, preferenceTags: ["文章", "発信"] },
      { id: "q10_build_service", label: "AIでサイトやサービスを作りたい", scores: { development: 4, productivity: 1 }, preferenceTags: ["サイト制作", "サービス制作"] },
      { id: "q10_research_easy", label: "AIで資料整理や調査を楽にしたい", scores: { research: 4, productivity: 1 }, preferenceTags: ["資料整理", "調査"] },
      { id: "q10_systemize_work", label: "AIで仕事を仕組み化したい", scores: { productivity: 4, community: 1 }, preferenceTags: ["仕組み化", "仕事"] },
      { id: "q10_expand_creative", label: "AIでクリエイティブを広げたい", scores: { creative: 4 }, preferenceTags: ["クリエイティブ", "創作"] },
      { id: "q10_move_project", label: "AIを使って仲間とプロジェクトを動かしたい", scores: { community: 4, productivity: 1 }, preferenceTags: ["仲間", "プロジェクト"] },
      { id: "q10_use_multiple_ai", label: "AIを使い分けられる人になりたい", scores: { creative: 2, productivity: 2, research: 1 }, preferenceTags: ["AI使い分け", "実践"] }
    ]
  },
  {
    id: "q11_current_self",
    title: "今の自分に一番近い言葉は？",
    type: "single",
    options: [
      { id: "q11_anxious", label: "まだAIに少し不安がある", scores: { beginner: 4 }, preferenceTags: ["不安", "初心者"] },
      { id: "q11_lost_start", label: "興味はあるが、何から始めるか迷っている", scores: { beginner: 3, research: 1 }, preferenceTags: ["始め方", "迷い"] },
      { id: "q11_not_mastered", label: "便利だとは思うが、使いこなせていない", scores: { productivity: 2, beginner: 2 }, preferenceTags: ["使いこなし", "効率化"] },
      { id: "q11_apply_work", label: "もっと仕事や活動に活かしたい", scores: { productivity: 4 }, preferenceTags: ["仕事", "活動"] },
      { id: "q11_use_multiple", label: "複数AIを使い分けたい", scores: { research: 2, productivity: 2 }, preferenceTags: ["複数AI", "使い分け"] },
      { id: "q11_move_challenge", label: "AIで自分の挑戦を前に進めたい", scores: { creative: 2, productivity: 2 }, preferenceTags: ["挑戦", "前進"] },
      { id: "q11_support_team", label: "AIで仲間やプロジェクトを支えたい", scores: { community: 4 }, preferenceTags: ["仲間", "プロジェクト"] },
      { id: "q11_create_culture", label: "AIを使って新しい文化をつくりたい", scores: { creative: 3, community: 2 }, preferenceTags: ["文化", "コミュニティ"] }
    ]
  }
];
