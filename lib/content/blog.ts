export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  keywords: string[];
  body: string[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "claude-code-codex-workflow",
    title: "Claude CodeとCodexの使い分け",
    description: "設計と思考はClaude Code、実装と修正はCodexに分ける基本ワークフロー。",
    category: "開発",
    keywords: ["Claude Code Codex 違い", "AI 実装 ツール", "AI 使い分け"],
    body: [
      "Claude CodeとCodexは、どちらか一方を選ぶより役割を分けると強くなります。",
      "Claude Codeはコード全体の理解、仕様整理、実装方針の検討に向いています。Codexは、決まった方針をもとにファイルを編集し、修正し、検証する実装担当として使いやすいです。",
      "おすすめは、ChatGPTで目的を整理し、Claude Codeで設計書にし、Codexで小さなタスクに分けて実装する流れです。"
    ]
  },
  {
    slug: "ai-beginner-first-tools",
    title: "AI初心者が最初に使うべきツール",
    description: "最初は万能AIを触り、資料が増えたらNotebookLM、作る段階でCodexへ進む考え方。",
    category: "初心者",
    keywords: ["生成AI 初心者 おすすめ", "自分に合うAI", "AIツール おすすめ"],
    body: [
      "AI初心者は、最初からたくさんのツールを覚える必要はありません。",
      "まずChatGPTで壁打ち、文章化、アイデア整理を試します。資料が多い人はNotebookLMで手持ち資料を読み解き、サイトやアプリを作りたい段階でCodexのような実装AIに進むと自然です。",
      "大事なのはAI名ではなく、今どこで詰まっているかを先に決めることです。"
    ]
  },
  {
    slug: "notebooklm-how-to-start",
    title: "NotebookLMの使い方",
    description: "PDF、議事録、過去投稿をAIに読ませ、企画や投稿へ変換する入口。",
    category: "資料整理",
    keywords: ["NotebookLM 使い方", "AI 資料整理", "AI 診断"],
    body: [
      "NotebookLMは、手持ち資料を読み込ませて整理するためのAI司書のように使えます。",
      "PDF、議事録、活動記録、過去投稿を入れて、要点、論点、使える素材を取り出します。その後、ChatGPTやClaudeで文章や企画書に変換すると、過去資料が資産になります。",
      "資料が多くてどこから見ればいいかわからない人に向いています。"
    ]
  },
  {
    slug: "ai-homepage-workflow",
    title: "AIでホームページを作る手順",
    description: "ChatGPT、Claude Code、Codex、Supabaseを分担させるホームページ制作フロー。",
    category: "サイト制作",
    keywords: ["AI ホームページ制作", "AI 実装 ツール", "Codex Next.js"],
    body: [
      "AIでホームページを作る時は、いきなり実装AIに丸投げしない方が安定します。",
      "まずChatGPTで目的、読者、ページ構成を整理します。次にClaude Codeで仕様や既存コードを確認します。実装はCodexに任せ、投稿や診断ログを保存するならSupabaseにつなぎます。",
      "この分担にすると、考える作業と作る作業が混ざらず、修正もしやすくなります。"
    ]
  },
  {
    slug: "ai-use-case-database",
    title: "AI活用をデータベース化する方法",
    description: "AI名ではなく使用シーンで保存し、診断サイトを育てるためのDB設計。",
    category: "DB設計",
    keywords: ["AI活用 データベース", "Supabase AI", "AI 使い分け"],
    body: [
      "AI活用の知見は、AI名ではなく使用シーンで保存すると再利用しやすくなります。",
      "例えば、ホームページ制作、X投稿、講演資料、楽曲制作、資料整理のように目的を軸にし、使ったAI、順番、成果物、学び、失敗点、使用量メモを残します。",
      "このDBが増えるほど、診断結果に近い実例を出せるようになります。"
    ]
  }
];

export function getArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug) ?? null;
}
