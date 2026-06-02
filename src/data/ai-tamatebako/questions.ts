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
  }
];
