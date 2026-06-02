export type ResultType = {
  id: string;
  title: string;
  subtitle: string;
  primaryScoreKey: string;
  mainAiId: string;
  relatedAiIds: string[];
  description: string;
  firstAction: string;
  promptExample?: string;
  workflow?: string[];
  tags: string[];
};

export const results: ResultType[] = [
  { id: "writing_guide", title: "文章で未来をひらく案内人タイプ", subtitle: "言葉にすることで、自分の可能性を広げる人", primaryScoreKey: "writing", mainAiId: "chatgpt", relatedAiIds: ["claude", "notebooklm", "canva"], description: "あなたは、言葉で可能性をひらくタイプです。頭の中にある考えや体験を、AIと一緒に整理することで、文章・企画・発信に変えていけます。", firstAction: "まずはChatGPTに、今考えていることをそのまま話してみてください。", promptExample: "今考えていることを整理して、SNS投稿にできる形にしてください。", workflow: ["ChatGPTで考えを整理する", "Claudeで文章を整える", "Canvaで画像化する"], tags: ["文章", "SNS投稿", "企画", "言語化"] },
  { id: "research_keeper", title: "深く調べて整理する知恵袋タイプ", subtitle: "情報を集め、意味を見つける人", primaryScoreKey: "research", mainAiId: "notebooklm", relatedAiIds: ["gemini", "chatgpt", "perplexity"], description: "あなたは、情報を集めて意味を見つけるタイプです。ただ調べるだけではなく、情報を整理し、自分の判断につなげる力があります。", firstAction: "まずはNotebookLMに資料やメモを入れて、自分専用の知恵袋を作ってみてください。", promptExample: "この資料の重要ポイントを整理して、初心者にもわかるようにまとめてください。", workflow: ["Perplexityで調べる", "NotebookLMに資料を入れる", "ChatGPTで要約を使いやすく整える"], tags: ["調査", "資料整理", "学習", "情報整理"] },
  { id: "design_crafter", title: "見た目で伝えるデザイン職人タイプ", subtitle: "言葉だけでは届かないものを、形にして届ける人", primaryScoreKey: "design", mainAiId: "canva", relatedAiIds: ["chatgpt", "claude", "notebooklm"], description: "あなたは、見た目で人に伝えるタイプです。画像やデザインにすることで、伝わり方を強くできます。", firstAction: "まずはCanvaで、SNS投稿画像や簡単な資料を作ってみてください。", promptExample: "この文章をもとに、Instagram投稿用の見出しと画像構成を作ってください。", workflow: ["ChatGPTで文章を作る", "Canvaで画像化する", "SNSで反応を見る"], tags: ["画像", "デザイン", "資料作成", "SNS投稿"] },
  { id: "voice_narrator", title: "声で届けるナレータータイプ", subtitle: "言葉に声を乗せて、人に届ける人", primaryScoreKey: "voice", mainAiId: "elevenlabs", relatedAiIds: ["chatgpt", "pictory", "canva"], description: "あなたは、声で人に届けるタイプです。文章や動画に声が加わると、伝わり方は大きく変わります。", firstAction: "まずは短い文章を作り、音声AIでナレーション化してみてください。", promptExample: "この文章を、やさしく語りかけるナレーション台本にしてください。", workflow: ["ChatGPTで台本を作る", "ElevenLabsで音声化する", "Pictoryで動画化する"], tags: ["音声", "ナレーション", "動画", "発信"] },
  { id: "video_mover", title: "映像で世界を動かす動画表現タイプ", subtitle: "物語や想いを、映像で届ける人", primaryScoreKey: "video", mainAiId: "runway", relatedAiIds: ["pictory", "chatgpt", "canva"], description: "あなたは、映像で人の心を動かすタイプです。言葉や画像だけでは伝えきれない世界観を、動画にすることで届けられます。", firstAction: "まずは短い文章をもとに、15秒動画の構成を作ってみてください。", promptExample: "このテーマを15秒のショート動画にする構成を作ってください。", workflow: ["ChatGPTで台本を作る", "Canvaで素材を作る", "PictoryやRunwayで動画化する"], tags: ["動画", "映像", "ショート動画", "クリエイティブ"] },
  { id: "productivity_strategist", title: "仕事を整える効率化参謀タイプ", subtitle: "日々の作業を整え、時間の使い方を変える人", primaryScoreKey: "productivity", mainAiId: "gemini", relatedAiIds: ["chatgpt", "notebooklm", "canva"], description: "あなたは、仕事の流れを整えるタイプです。毎日の作業、メール、資料、会議メモなどをAIと組み合わせることで、時間の使い方が変わります。", firstAction: "まずは毎日くり返している作業を1つ選び、AIに手伝わせてみてください。", promptExample: "この作業をAIで効率化する手順を、初心者にもわかるように整理してください。", workflow: ["Geminiで業務整理", "ChatGPTで文章化", "Canvaで資料化"], tags: ["仕事", "効率化", "資料作成", "業務改善"] },
  { id: "creative_explorer", title: "創作をひろげるアイデア冒険家タイプ", subtitle: "ひとつの思いつきを、物語や企画に育てる人", primaryScoreKey: "creative", mainAiId: "claude", relatedAiIds: ["chatgpt", "canva", "runway"], description: "あなたは、アイデアを深く広げるタイプです。ひとつの考えを物語や企画に育てる力があります。", firstAction: "まずは思いついたテーマをAIに話して、物語や企画に広げてみてください。", promptExample: "このアイデアを、物語・企画・SNS投稿の3方向に広げてください。", workflow: ["Claudeで構想を深める", "ChatGPTで展開案を出す", "CanvaやRunwayで形にする"], tags: ["創作", "企画", "物語", "表現"] },
  { id: "beginner_starter", title: "まだ見ぬ可能性を探すはじまりタイプ", subtitle: "これからAI玉手箱をひらいていく人", primaryScoreKey: "beginner", mainAiId: "chatgpt", relatedAiIds: ["gemini", "canva", "notebooklm"], description: "あなたは、これからAI玉手箱をひらいていくタイプです。まだ決まった使い方がなくても大丈夫です。", firstAction: "まずはChatGPTに、今日困っていることを1つ相談してみてください。", promptExample: "AIをまだうまく使えていません。今日からできる簡単な使い方を3つ教えてください。", workflow: ["ChatGPTに相談する", "Canvaで簡単な画像を作る", "NotebookLMで資料整理を試す"], tags: ["初心者", "AIの始め方", "可能性探索"] }
];
