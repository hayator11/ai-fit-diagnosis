export type AiTool = {
  id: string;
  name: string;
  category: string;
  description: string;
  beginnerFriendly: boolean;
  officialUrl: string;
  affiliateUrl?: string;
  isAffiliate: boolean;
  tags: string[];
  canDo?: string;
  recommendedUse?: string;
  nextStep?: string;
};

export const aiTools: AiTool[] = [
  { id: "chatgpt", name: "ChatGPT", category: "文章・相談・企画", description: "文章作成、アイデア出し、相談、整理に使いやすい万能型のAIです。", beginnerFriendly: true, officialUrl: "https://chat.openai.com/", isAffiliate: false, tags: ["文章", "相談", "企画", "初心者", "SNS投稿"], canDo: "考えの整理、文章作成、SNS投稿、企画づくり、壁打ち、Web制作やアプリ制作の目的整理、画面構成、必要機能、DBに保存したい情報、他のAIに渡す実装指示書づくり。", recommendedUse: "何から始めればいいかわからない時の最初の相棒です。いきなり完成文や実装を作らせるより、目的・読者・画面・必要機能・保存したいデータを整理する相手として使うと力を発揮します。Codexに渡す前の実装指示書づくりにも向いています。", nextStep: "Claude、Canva、NotebookLM、Codexなどに渡す前の整理役として使えます。" },
  { id: "claude", name: "Claude", category: "長文整理・創作", description: "長い文章の整理、構成づくり、創作、深い思考に向いたAIです。", beginnerFriendly: true, officialUrl: "https://claude.ai/", isAffiliate: false, tags: ["文章", "創作", "長文", "構成"], canDo: "長文整理、深い文章、構成づくり、思想やストーリーの整理、Web制作やアプリ制作に入る前の仕様整理と設計方針の深掘り。", recommendedUse: "文章や企画を深めたい時に向いています。Web制作やアプリ制作そのものをいきなり任せるより、目的、導線、画面ごとの役割、伝えたい世界観を整理してからCodexやClaude Codeへ渡すと使いやすくなります。", nextStep: "ChatGPTで整理した内容を深め、必要に応じてCanvaやCodexへ渡します。" },
  { id: "gemini", name: "Gemini", category: "Google連携・効率化", description: "Google系サービスとの相性が良く、仕事の効率化や調査に使いやすいAIです。", beginnerFriendly: true, officialUrl: "https://gemini.google.com/", isAffiliate: false, tags: ["Google", "仕事", "効率化", "調査"], canDo: "調査、情報整理、Google系サービスとの連携、大量情報の確認。", recommendedUse: "調べものや比較、情報整理をしたい時に向いています。", nextStep: "NotebookLMやChatGPTと組み合わせると、調査から発信までつなげやすくなります。" },
  { id: "canva", name: "Canva", category: "画像・デザイン", description: "SNS画像、チラシ、資料、バナーなどを簡単に作れるデザインツールです。", beginnerFriendly: true, officialUrl: "https://www.canva.com/", affiliateUrl: "", isAffiliate: true, tags: ["画像", "デザイン", "資料作成", "SNS投稿"], canDo: "画像、バナー、SNS投稿、スライド、簡単なデザイン制作。", recommendedUse: "文章で作った内容を、見た目で伝える形にする時に向いています。", nextStep: "ChatGPTやClaudeで作った言葉を、画像や資料に変える道具として使えます。" },
  { id: "notebooklm", name: "NotebookLM", category: "資料整理・学習", description: "資料やメモを読み込ませて、自分専用の知恵袋のように使えるAIです。", beginnerFriendly: true, officialUrl: "https://notebooklm.google.com/", isAffiliate: false, tags: ["資料整理", "調査", "学習", "情報整理"], canDo: "PDF、議事録、資料、過去投稿などの読み込みと整理。", recommendedUse: "手元に資料が多い人に向いています。まずNotebookLMで資料を読み解き、ChatGPTで発信用に整えると進みやすくなります。", nextStep: "ChatGPTやClaudeと組み合わせると、資料から文章や企画に変えやすくなります。" },
  { id: "perplexity", name: "Perplexity", category: "検索・調査", description: "調べものや情報収集に強いAI検索サービスです。", beginnerFriendly: true, officialUrl: "https://www.perplexity.ai/", affiliateUrl: "", isAffiliate: true, tags: ["検索", "調査", "情報収集"] },
  { id: "genspark", name: "Genspark", category: "調査・資料化", description: "調査や比較、資料づくりに使いやすい検索型のAIサービスです。", beginnerFriendly: true, officialUrl: "https://www.genspark.ai/", isAffiliate: false, tags: ["調査", "比較", "資料化", "情報収集"], canDo: "調査、比較、資料化、情報収集。", recommendedUse: "新しいテーマを調べたり、比較資料を作りたい時に向いています。", nextStep: "ChatGPTやGamma、Canvaと組み合わせると、調査結果を資料や発信にしやすくなります。" },
  { id: "elevenlabs", name: "ElevenLabs", category: "音声・ナレーション", description: "ナレーションや音声コンテンツを作るときに使いやすい音声AIです。", beginnerFriendly: false, officialUrl: "https://elevenlabs.io/", affiliateUrl: "", isAffiliate: true, tags: ["音声", "ナレーション", "動画", "多言語"] },
  { id: "runway", name: "Runway", category: "動画・映像表現", description: "映像表現や動画生成に使えるクリエイティブ向けAIです。", beginnerFriendly: false, officialUrl: "https://runwayml.com/", isAffiliate: false, tags: ["動画", "映像", "クリエイティブ"] },
  { id: "pictory", name: "Pictory", category: "動画化・ショート動画", description: "文章や素材をもとに動画化しやすいAI動画ツールです。", beginnerFriendly: false, officialUrl: "https://pictory.ai/", affiliateUrl: "", isAffiliate: true, tags: ["動画", "ショート動画", "SNS"] },
  { id: "codex", name: "Codex", category: "実装・開発", description: "設計内容を実装に落とし込むときに使う開発支援AIです。", beginnerFriendly: false, officialUrl: "", isAffiliate: false, tags: ["実装", "開発", "コード", "DB"], canDo: "Web制作、アプリ制作、プログラム開発、Next.jsなどの実装、UI修正、バグ対応、診断サイトやWebアプリ制作の補助。", recommendedUse: "ChatGPTやClaudeで作った実装指示書を渡すと進みやすくなります。ページ作成、フォーム追加、DB連携、UI修正、バグ修正のように、作業を小さく分けて依頼するのがコツです。", nextStep: "SupabaseやVercel、GitHubと組み合わせると、Webアプリとして形にしやすくなります。" },
  { id: "claude-code", name: "Claude Code", category: "思考整理・実装補助", description: "仕様整理や実装補助に使える開発向けAIです。", beginnerFriendly: false, officialUrl: "", isAffiliate: false, tags: ["設計", "実装", "開発", "コード"], canDo: "既存コード全体の理解、Web制作・アプリ制作の設計整理、実装前の構造把握、修正方針の確認。", recommendedUse: "いきなり実装させるより、まずプロジェクト全体を読ませて、画面構成、データの流れ、修正方針を整理する時に向いています。その後、Codexに小さな実装タスクとして渡すと進みやすくなります。", nextStep: "整理した方針をCodexに渡すと、実装や修正に進みやすくなります。" },
  { id: "supabase", name: "Supabase", category: "データベース・Webアプリ基盤", description: "AI診断サイトやWebアプリで、診断結果・投稿・使用例・ユーザーデータなどを保存するためのデータベース基盤です。", beginnerFriendly: false, officialUrl: "https://supabase.com/", isAffiliate: false, tags: ["診断ログ保存", "使用感投稿DB", "AIツールDB", "Webアプリのデータ管理", "認証", "ストレージ"], canDo: "診断サイト、Webアプリ、投稿フォーム、使用感DB、診断結果、ユーザー情報、ログなどの保存と管理。", recommendedUse: "診断サイトや投稿フォームなど、データを蓄積したい時に使います。AI玉手箱診断のように、回答、結果、投稿、使用例をあとから活かしたい場合の土台になります。", nextStep: "CodexやClaude Codeと組み合わせると、投稿・診断ログ・使用例DBを実装しやすくなります。" }
];
