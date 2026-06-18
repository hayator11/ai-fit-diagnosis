import type { AiTool, AiUpdate, AiUseCase } from "@/types/database";
import type { DiagnosisQuestion } from "@/types/diagnosis";

export const aiToolNames = [
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
  "Felo"
];

export const aiTools: AiTool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "general",
    summary: "まず迷ったら使いやすい、相談・文章・整理の総合AI。",
    description: "アイデアが曖昧な時の相談、文章の下書き、投稿づくり、企画整理に使えます。慣れてきたら、他のAIへ渡す前の目的整理役としても便利です。",
    strengths: ["企画整理", "文章作成", "壁打ち", "投稿設計", "LP構成"],
    weaknesses: ["大量資料の恒常管理には別ツール併用が必要"],
    best_use_cases: ["SNS投稿", "企画書", "診断ロジック設計", "文章リライト"],
    status: "published",
    trust_level: "medium"
  },
  {
    name: "Claude",
    slug: "claude",
    category: "writing",
    summary: "長い文章や考えを、自然に深く整理したい時に向くAI。",
    strengths: ["長文構成", "自然な文章", "深い整理"],
    weaknesses: ["最新情報は確認が必要"],
    best_use_cases: ["note記事", "講演原稿", "サービス構想"],
    status: "published",
    trust_level: "medium"
  },
  {
    name: "Claude Code",
    slug: "claude-code",
    category: "coding",
    summary: "サイトやアプリの中身を理解し、設計を整理する開発向けAI。",
    strengths: ["既存コード理解", "設計整理", "長い文脈の把握"],
    weaknesses: ["利用制限やトークン消費に注意"],
    best_use_cases: ["実装前の設計", "既存プロジェクト理解", "コード構造の把握"],
    status: "published",
    trust_level: "medium"
  },
  {
    name: "Codex",
    slug: "codex",
    category: "coding",
    summary: "決まった内容を実際に作る、修正する、反映する開発向けAI。",
    strengths: ["実装", "バグ修正", "ファイル編集", "GitHub連携"],
    weaknesses: ["目的や仕様が曖昧だと迷走しやすい"],
    best_use_cases: ["Next.js実装", "UI修正", "DB連携", "小さなタスク単位の開発"],
    status: "published",
    trust_level: "medium"
  },
  {
    name: "Gemini",
    slug: "gemini",
    category: "research",
    summary: "調べものや資料確認に使いやすい、Google系と相性のよいAI。",
    strengths: ["調査", "Google連携", "資料整理"],
    weaknesses: ["用途により出力の粒度調整が必要"],
    best_use_cases: ["リサーチ", "資料要約", "比較検討"],
    status: "published",
    trust_level: "medium"
  },
  {
    name: "NotebookLM",
    slug: "notebooklm",
    category: "research",
    summary: "PDF、議事録、過去メモを読ませて整理するAI司書。",
    strengths: ["資料整理", "引用元確認", "大量メモの要約"],
    weaknesses: ["資料が少ない時は強みが出にくい"],
    best_use_cases: ["議事録整理", "PDF整理", "教材作成"],
    status: "published",
    trust_level: "medium"
  },
  ...[
    ["Genspark", "genspark", "research", "調べものをして、資料っぽくまとめたい時に使えるAI。"],
    ["Suno", "suno", "audio", "歌やBGMを作って、企画の雰囲気を広げる音楽生成AI。"],
    ["Udio", "udio", "audio", "楽曲制作や音楽アイデアを試したい時に使えるAI。"],
    ["Runway", "runway", "video", "動画や映像表現を試したい時に使えるAI。"],
    ["Gamma", "gamma", "presentation", "スライドや説明資料をすばやく形にするAI。"],
    ["Napkin AI", "napkin-ai", "presentation", "文章を図解や見える形に変換しやすいAI。"],
    ["Perplexity", "perplexity", "research", "出典を見ながら調べたい時に使いやすい検索型AI。"],
    ["Felo", "felo", "research", "リサーチや情報整理をスムーズにしたい時の検索型AI。"]
  ].map(([name, slug, category, summary]) => ({
    name,
    slug,
    category,
    summary,
    description: summary,
    strengths: ["用途特化", "時短", "アイデア補助"],
    weaknesses: ["最新の料金や制限は公式確認が必要"],
    best_use_cases: ["調査", "制作", "資料化"],
    status: "published",
    trust_level: "medium"
  }))
];

export const diagnosisTypes = [
  {
    type_key: "writing",
    name: "文章発信型",
    short_description: "考えを言葉にして発信する力を伸ばすタイプです。",
    description: "SNS、note、LP、メルマガなど、伝えたいことを読みやすく形にする使い方が向いています。",
    recommended_workflow: ["ChatGPT", "Claude", "Gamma"],
    first_action: "書きたいテーマを3つ出して、ChatGPTで構成案を作りましょう。",
    caution: "最初から完成文を求めすぎず、目的、読者、トーンを先に決めると安定します。",
    prompt_example: "このテーマで、読者の悩み、結論、見出し構成、本文の順番を提案してください。"
  },
  {
    type_key: "research",
    name: "調査整理型",
    short_description: "情報を集め、比較し、使える形に整えるタイプです。",
    description: "資料やURLをもとに、要点、論点、比較表、次のアクションを整理する使い方が向いています。",
    recommended_workflow: ["Perplexity", "Gemini", "NotebookLM", "ChatGPT"],
    first_action: "調べたいテーマと判断基準を分けて入力しましょう。",
    caution: "料金、制限、公式発表は必ず一次情報で確認しましょう。",
    prompt_example: "このテーマについて、公式情報を優先して比較表と注意点を作ってください。"
  },
  {
    type_key: "site_builder",
    name: "サイト制作型",
    short_description: "目的をページ構成に落とし、サイトとして公開するタイプです。",
    description: "ChatGPTで仕様を整理し、Claude Codeで設計を確認し、Codexで実装する流れが向いています。",
    recommended_workflow: ["ChatGPT", "Claude Code", "Codex", "Supabase"],
    first_action: "サイトの目的、読者、必要ページを箇条書きにしましょう。",
    caution: "いきなり実装に入らず、ページ一覧とデータ構造を先に決めると失敗しにくいです。",
    prompt_example: "このサイトの目的から、MVPに必要なページ、DB、フォーム項目を整理してください。"
  },
  {
    type_key: "developer",
    name: "実装改善型",
    short_description: "コードを書き、直し、運用できる形に近づけるタイプです。",
    description: "実装、バグ修正、UI調整、DB連携などを小さな単位で進める使い方が向いています。",
    recommended_workflow: ["Claude Code", "Codex", "ChatGPT"],
    first_action: "直したい問題を、期待する状態と現在の状態に分けて書きましょう。",
    caution: "大きな依頼を一度に投げず、検証できる単位で依頼しましょう。",
    prompt_example: "このエラーの原因を調べ、最小変更で修正して検証してください。"
  },
  {
    type_key: "creative",
    name: "クリエイティブ型",
    short_description: "音楽、動画、画像、表現の試作を広げるタイプです。",
    description: "アイデア出しと素材生成を分けて、複数案を試す使い方が向いています。",
    recommended_workflow: ["ChatGPT", "Suno", "Udio", "Runway"],
    first_action: "作りたい雰囲気、参考、用途を言葉にしましょう。",
    caution: "権利や商用利用条件は公開前に確認しましょう。",
    prompt_example: "この企画の世界観、構成、生成AI用プロンプトを3案作ってください。"
  },
  {
    type_key: "workflow",
    name: "業務効率型",
    short_description: "繰り返し作業を整理し、自動化に近づけるタイプです。",
    description: "業務フローを見える化し、AIに任せる部分と人が確認する部分を分ける使い方が向いています。",
    recommended_workflow: ["ChatGPT", "Gemini", "Codex"],
    first_action: "毎週繰り返している作業を手順に分解しましょう。",
    caution: "個人情報や社外秘データの扱いは慎重に設計しましょう。",
    prompt_example: "この業務フローを、AIに任せる部分、人が確認する部分、DB化する部分に分けてください。"
  },
  {
    type_key: "team",
    name: "チーム運用型",
    short_description: "人とAIの役割を分け、共有しながら進めるタイプです。",
    description: "ルール、テンプレート、確認フローを整え、チームで再現できる使い方が向いています。",
    recommended_workflow: ["ChatGPT", "NotebookLM", "Gemini", "Gamma"],
    first_action: "チームで共有したい成果物と承認フローを書き出しましょう。",
    caution: "個人の勘だけにせず、使い方をテンプレート化しましょう。",
    prompt_example: "チームでAIを使うための役割分担、注意点、確認フローを作ってください。"
  },
  {
    type_key: "producer",
    name: "AIプロデューサー型",
    short_description: "複数AIを組み合わせ、企画から実装まで動かすタイプです。",
    description: "構想、文章、調査、実装、資料化をAIごとに分担して進める使い方が向いています。",
    recommended_workflow: ["ChatGPT", "Claude", "Gemini", "NotebookLM", "Codex", "Genspark"],
    first_action: "ゴール、期限、使える素材、必要なAI作業を整理しましょう。",
    caution: "全部を自動化しようとせず、判断ポイントを人間側に残しましょう。",
    prompt_example: "このプロジェクトを、構想、調査、制作、実装、公開のタスクに分解してください。"
  }
];

const s = (types: Record<string, number>, tools: Record<string, number> = {}) => ({ types, tools });

export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    questionKey: "ai_level",
    questionText: "いまのAIとの距離感は？",
    answers: [
      ["何を聞いたらいいかすら、まだよくわからない", s({ producer: 2 }, { ChatGPT: 3 })],
      ["とりあえず少し使ってみている", s({ writing: 1, workflow: 1 }, { ChatGPT: 2, Claude: 1, Gemini: 1 })],
      ["もっとコアな使い分けや仕組み化が知りたい", s({ producer: 3, developer: 2, workflow: 1 }, { "Claude Code": 3, Codex: 3, NotebookLM: 2, ChatGPT: 1 })]
    ].map((a, index) => ({ answerKey: `ai_level_${index}`, answerText: a[0] as string, scoreJson: a[1] as any }))
  },
  {
    questionKey: "goal",
    questionText: "いま一番やりたいことは？",
    answers: [
      ["文章を書きたい", s({ writing: 3 }, { ChatGPT: 3, Claude: 3 })],
      ["サイトを作りたい", s({ site_builder: 3 }, { "Claude Code": 3, Codex: 3, ChatGPT: 2 })],
      ["資料を整理したい", s({ research: 3 }, { NotebookLM: 3, Gemini: 3, ChatGPT: 1 })],
      ["調査したい", s({ research: 3 }, { Perplexity: 3, Felo: 2, Genspark: 2 })],
      ["音楽や動画を作りたい", s({ creative: 3 }, { Suno: 3, Udio: 3, Runway: 3, ChatGPT: 2 })],
      ["SNS投稿を伸ばしたい", s({ writing: 2, producer: 1 }, { ChatGPT: 3, Claude: 2 })],
      ["業務を自動化したい", s({ workflow: 3 }, { ChatGPT: 2, Codex: 2, Gemini: 2 })],
      ["AIを仕事に導入したい", s({ team: 2, producer: 3 }, { ChatGPT: 3, NotebookLM: 2, Gamma: 2 })]
    ].map((a, index) => ({ answerKey: `goal_${index}`, answerText: a[0] as string, scoreJson: a[1] as any }))
  },
  {
    questionKey: "pain",
    questionText: "いま困っていることは？",
    answers: [
      ["何から始めたらいいかわからない", s({ producer: 2 }, { ChatGPT: 3 })],
      ["AIが多すぎて選べない", s({ producer: 3 }, { ChatGPT: 2 })],
      ["プロンプトがうまく書けない", s({ writing: 2 }, { ChatGPT: 2, Claude: 2 })],
      ["実装で止まる", s({ developer: 3 }, { Codex: 4, "Claude Code": 2 })],
      ["資料が多すぎる", s({ research: 3 }, { NotebookLM: 4, Gemini: 2 })],
      ["アイデアはあるが形にできない", s({ creative: 2, site_builder: 2 }, { ChatGPT: 2, Codex: 2 })],
      ["費用や利用制限が心配", s({ workflow: 1 }, { ChatGPT: 1, Perplexity: 1 })],
      ["チームで共有できない", s({ team: 3 }, { Gamma: 2, NotebookLM: 2 })]
    ].map((a, index) => ({ answerKey: `pain_${index}`, answerText: a[0] as string, scoreJson: a[1] as any }))
  },
  ...[
    ["type", "あなたのタイプは？", ["考えるのが好き", "書くのが好き", "作るのが好き", "調べるのが好き", "広げるのが好き", "人を巻き込むのが好き"]],
    ["output", "作りたい成果物は？", ["X投稿", "note記事", "LP", "ホームページ", "アプリ", "診断サイト", "スライド", "講演資料", "音楽", "マニュアル", "データベース"]],
    ["range", "AIに任せたい範囲は？", ["壁打ちだけ", "下書きまで", "設計まで", "実装まで", "改善まで", "運用まで"]],
    ["code", "コードは触れる？", ["まったく触れない", "少しならわかる", "Claude Code / Codexを使い始めた", "GitHubも使える", "エンジニアに近い"]],
    ["docs", "資料は多い？", ["ほとんどない", "メモ程度", "NotionやGoogle Driveに多い", "PDFや議事録が多い", "過去投稿や活動記録が大量にある"]],
    ["priority", "重視するものは？", ["速さ", "正確さ", "安さ", "表現力", "実装力", "調査力", "自動化", "チーム共有"]],
    ["budget", "月にどれくらい使いたい？", ["無料中心", "月3,000円以内", "月5,000円〜1万円", "月2万円以上", "仕事なら投資したい"]],
    ["future", "最終的に目指したい状態は？", ["AIを便利に使いたい", "SNS発信を強くしたい", "サイトを作りたい", "商品やサービスを作りたい", "AIで仕事を仕組み化したい", "AIを使って仲間とプロジェクトを動かしたい"]]
  ].map(([key, text, answers]) => ({
    questionKey: key as string,
    questionText: text as string,
    answers: (answers as string[]).map((answerText, index) => {
      const map: Record<string, { types: Record<string, number>; tools: Record<string, number> }> = {
        書くのが好き: { types: { writing: 2 }, tools: { ChatGPT: 2, Claude: 2 } },
        作るのが好き: { types: { site_builder: 2, developer: 1 }, tools: { Codex: 2, "Claude Code": 2 } },
        調べるのが好き: { types: { research: 2 }, tools: { Perplexity: 2, NotebookLM: 2 } },
        LP: { types: { site_builder: 3, writing: 1 }, tools: { ChatGPT: 2, Codex: 2 } },
        ホームページ: { types: { site_builder: 3 }, tools: { Codex: 3, "Claude Code": 2 } },
        アプリ: { types: { developer: 3 }, tools: { Codex: 4, "Claude Code": 2 } },
        診断サイト: { types: { site_builder: 2, producer: 2 }, tools: { ChatGPT: 2, Codex: 3 } },
        スライド: { types: { team: 1, writing: 1 }, tools: { Gamma: 3, NapkinAI: 1 } },
        音楽: { types: { creative: 3 }, tools: { Suno: 3, Udio: 3 } },
        実装まで: { types: { developer: 2 }, tools: { Codex: 3 } },
        改善まで: { types: { developer: 2, workflow: 1 }, tools: { Codex: 2, ChatGPT: 1 } },
        運用まで: { types: { workflow: 3, team: 1 }, tools: { ChatGPT: 2 } },
        "Claude Code / Codexを使い始めた": { types: { developer: 3 }, tools: { "Claude Code": 3, Codex: 3 } },
        "NotionやGoogle Driveに多い": { types: { research: 2 }, tools: { NotebookLM: 3, Gemini: 2 } },
        PDFや議事録が多い: { types: { research: 3 }, tools: { NotebookLM: 4 } },
        実装力: { types: { developer: 3 }, tools: { Codex: 4 } },
        調査力: { types: { research: 3 }, tools: { Perplexity: 3, Felo: 2 } },
        自動化: { types: { workflow: 3 }, tools: { Codex: 2, ChatGPT: 2 } },
        チーム共有: { types: { team: 3 }, tools: { Gamma: 2, NotebookLM: 2 } },
        SNS発信を強くしたい: { types: { writing: 3 }, tools: { ChatGPT: 3, Claude: 2 } },
        サイトを作りたい: { types: { site_builder: 3 }, tools: { Codex: 3, "Claude Code": 2 } },
        商品やサービスを作りたい: { types: { producer: 3, site_builder: 1 }, tools: { ChatGPT: 2, Claude: 2, Codex: 2 } },
        AIで仕事を仕組み化したい: { types: { workflow: 3 }, tools: { ChatGPT: 2, Codex: 2 } },
        AIを使って仲間とプロジェクトを動かしたい: { types: { team: 3, producer: 2 }, tools: { ChatGPT: 2, Gamma: 2 } }
      };
      const score = map[answerText] ?? { types: { producer: 1 }, tools: { ChatGPT: 1 } };
      return { answerKey: `${key}_${index}`, answerText, scoreJson: score };
    })
  }))
];

export const sampleUseCases: AiUseCase[] = [
  {
    id: "site-with-codex",
    title: "Claude CodeとCodexでホームページ制作",
    slug: "site-with-codex",
    purpose: "サイト制作",
    user_type: "サイトを作りたい人",
    tools_used: ["ChatGPT", "Claude Code", "Codex"],
    workflow: ["ChatGPTで企画整理", "Claude Codeで仕様書化", "Codexで実装"],
    result: "ホームページや診断サイトのMVPを短期間で形にできる。",
    lesson: "思考と実装を分けると、利用制限や手戻りを抑えやすい。",
    token_note: "Claude CodeとCodexは、先に仕様書を作って小さく依頼すると消費を抑えやすい。",
    time_saved_note: "構成から実装までの往復が短くなる。",
    difficulty: "中",
    recommendation_score: 5,
    good_points: ["仕様を小さく分けると実装が進みやすい", "設計と実装を分担できる"],
    pain_points: ["曖昧な依頼だと手戻りが出やすい", "長い文脈を抱えすぎると重くなりやすい"],
    recommended_for: ["サイトを作りたい人", "AI活用をサービス化したい人"],
    body: "ChatGPTで目的とページ構成を整理し、Claude Codeで仕様や既存構造を理解し、Codexで実装します。AIに全部を丸投げするのではなく、企画、設計、実装を分けるのがコツです。",
    publish_status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: "notebooklm-planning",
    title: "NotebookLMで資料を読み込ませて企画整理",
    slug: "notebooklm-planning",
    purpose: "資料整理",
    user_type: "資料が多い人",
    tools_used: ["NotebookLM", "ChatGPT"],
    workflow: ["NotebookLMに資料を読み込ませる", "要点と論点を整理", "ChatGPTで投稿や企画書に変換"],
    result: "過去資料や議事録を、企画や投稿の材料として再利用できる。",
    lesson: "資料が多い人ほど、AIに読む前の置き場所を作る価値がある。",
    token_note: "資料理解はNotebookLMに寄せ、生成や編集はChatGPTに分ける。",
    time_saved_note: "探す時間と読み返す時間を減らせる。",
    difficulty: "低",
    recommendation_score: 5,
    good_points: ["過去資料が資産になる", "根拠を確認しながら整理できる"],
    pain_points: ["資料が少ない場合は効果が見えにくい"],
    recommended_for: ["議事録が多い人", "講演資料を作りたい人", "支援活動の記録が多い人"],
    body: "PDF、議事録、メモ、過去投稿をNotebookLMに入れ、要点や使える材料を抽出します。その後、ChatGPTで企画書、SNS投稿、講演構成に変換します。",
    publish_status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: "music-project-song",
    title: "音楽生成AIでプロジェクトソングを作る",
    slug: "music-project-song",
    purpose: "世界観づくり",
    user_type: "クリエイティブ型",
    tools_used: ["ChatGPT", "Suno", "Udio"],
    workflow: ["ChatGPTで歌詞と世界観を作る", "音楽生成AIで曲にする", "SNSやイベントで活用"],
    result: "プロジェクトの感情や空気感を、曲として共有できる。",
    lesson: "AIは効率化だけでなく、感情を広げる道具にもなる。",
    token_note: "歌詞、曲調、用途を先に分けると試行回数を減らせる。",
    time_saved_note: "デモ曲づくりの初速が上がる。",
    difficulty: "低",
    recommendation_score: 4,
    good_points: ["世界観を伝えやすい", "イベントやショート動画に展開しやすい"],
    pain_points: ["権利や商用利用条件の確認が必要"],
    recommended_for: ["プロジェクトを広げたい人", "イベントを盛り上げたい人"],
    body: "ChatGPTでテーマ、キーワード、歌詞の方向性を整理し、SunoやUdioで曲にします。防災、地域活動、キャラクター企画など、感情の共有が大事なプロジェクトに向いています。",
    publish_status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: "x-post-system",
    title: "AIでX投稿を量産する",
    slug: "x-post-system",
    purpose: "SNS発信",
    user_type: "文章発信型",
    tools_used: ["ChatGPT", "Claude"],
    workflow: ["投稿テーマを整理", "構文テンプレートを作る", "投稿案を複数作り反応を見て改善"],
    result: "発信の型を作ることで、投稿を継続しやすくなる。",
    lesson: "AIに毎回ゼロから書かせるより、型を作る方が強い。",
    token_note: "テンプレート化するとやり取りが短くなる。",
    time_saved_note: "投稿案作成の時間を短縮できる。",
    difficulty: "低",
    recommendation_score: 4,
    good_points: ["発信が続きやすい", "切り口を増やせる"],
    pain_points: ["自分の言葉に直す工程は必要"],
    recommended_for: ["SNS発信を強くしたい人", "noteやブログを書きたい人"],
    body: "ChatGPTで投稿の目的、読者、構文を整理し、Claudeで自然な文章に整えます。反応の良かった型をDB化すると、発信が育ちます。",
    publish_status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: "genspark-research",
    title: "Gensparkで調査資料を作る",
    slug: "genspark-research",
    purpose: "比較調査",
    user_type: "調査整理型",
    tools_used: ["Genspark", "ChatGPT"],
    workflow: ["Gensparkで調査", "要点を整理", "ChatGPTで提案書や記事に編集"],
    result: "調査AIと編集AIを分けることで、見やすい資料にしやすい。",
    lesson: "調べるAIと伝えるAIを分けると、出力の役割が明確になる。",
    token_note: "調査結果を短く整えてから編集AIへ渡す。",
    time_saved_note: "比較調査の初動が速くなる。",
    difficulty: "中",
    recommendation_score: 4,
    good_points: ["比較材料を集めやすい", "資料化まで進めやすい"],
    pain_points: ["公式情報の最終確認は必要"],
    recommended_for: ["比較調査をしたい人", "提案資料を作りたい人"],
    body: "Gensparkで調査や比較の材料を集め、ChatGPTで読者向けに編集します。AIツール調査、サービス比較、企画の下調べに向いています。",
    publish_status: "published",
    created_at: new Date().toISOString()
  }
];

export const sampleUpdates: AiUpdate[] = [
  {
    id: "manual-first-update",
    title: "AI更新情報の管理枠を追加",
    summary: "公式URLや重要度を登録し、承認後に公開できる管理構成を用意しました。",
    source_type: "manual",
    importance: "medium",
    status: "published",
    published_at: new Date().toISOString(),
    ai_tools: { name: "AI全般", slug: "chatgpt" }
  }
];
