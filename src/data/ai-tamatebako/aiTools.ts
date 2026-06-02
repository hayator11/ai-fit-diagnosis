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
};

export const aiTools: AiTool[] = [
  { id: "chatgpt", name: "ChatGPT", category: "文章・相談・企画", description: "文章作成、アイデア出し、相談、整理に使いやすい万能型のAIです。", beginnerFriendly: true, officialUrl: "https://chat.openai.com/", isAffiliate: false, tags: ["文章", "相談", "企画", "初心者", "SNS投稿"] },
  { id: "claude", name: "Claude", category: "長文整理・創作", description: "長い文章の整理、構成づくり、創作、深い思考に向いたAIです。", beginnerFriendly: true, officialUrl: "https://claude.ai/", isAffiliate: false, tags: ["文章", "創作", "長文", "構成"] },
  { id: "gemini", name: "Gemini", category: "Google連携・効率化", description: "Google系サービスとの相性が良く、仕事の効率化や調査に使いやすいAIです。", beginnerFriendly: true, officialUrl: "https://gemini.google.com/", isAffiliate: false, tags: ["Google", "仕事", "効率化", "調査"] },
  { id: "canva", name: "Canva", category: "画像・デザイン", description: "SNS画像、チラシ、資料、バナーなどを簡単に作れるデザインツールです。", beginnerFriendly: true, officialUrl: "https://www.canva.com/", affiliateUrl: "", isAffiliate: true, tags: ["画像", "デザイン", "資料作成", "SNS投稿"] },
  { id: "notebooklm", name: "NotebookLM", category: "資料整理・学習", description: "資料やメモを読み込ませて、自分専用の知恵袋のように使えるAIです。", beginnerFriendly: true, officialUrl: "https://notebooklm.google.com/", isAffiliate: false, tags: ["資料整理", "調査", "学習", "情報整理"] },
  { id: "perplexity", name: "Perplexity", category: "検索・調査", description: "調べものや情報収集に強いAI検索サービスです。", beginnerFriendly: true, officialUrl: "https://www.perplexity.ai/", affiliateUrl: "", isAffiliate: true, tags: ["検索", "調査", "情報収集"] },
  { id: "elevenlabs", name: "ElevenLabs", category: "音声・ナレーション", description: "ナレーションや音声コンテンツを作るときに使いやすい音声AIです。", beginnerFriendly: false, officialUrl: "https://elevenlabs.io/", affiliateUrl: "", isAffiliate: true, tags: ["音声", "ナレーション", "動画", "多言語"] },
  { id: "runway", name: "Runway", category: "動画・映像表現", description: "映像表現や動画生成に使えるクリエイティブ向けAIです。", beginnerFriendly: false, officialUrl: "https://runwayml.com/", isAffiliate: false, tags: ["動画", "映像", "クリエイティブ"] },
  { id: "pictory", name: "Pictory", category: "動画化・ショート動画", description: "文章や素材をもとに動画化しやすいAI動画ツールです。", beginnerFriendly: false, officialUrl: "https://pictory.ai/", affiliateUrl: "", isAffiliate: true, tags: ["動画", "ショート動画", "SNS"] },
  { id: "codex", name: "Codex", category: "実装・開発", description: "設計内容を実装に落とし込むときに使う開発支援AIです。", beginnerFriendly: false, officialUrl: "", isAffiliate: false, tags: ["実装", "開発", "コード", "DB"] },
  { id: "claude-code", name: "Claude Code", category: "思考整理・実装補助", description: "仕様整理や実装補助に使える開発向けAIです。", beginnerFriendly: false, officialUrl: "", isAffiliate: false, tags: ["設計", "実装", "開発", "コード"] }
];
