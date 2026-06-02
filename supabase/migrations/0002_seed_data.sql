insert into ai_tools (name, slug, category, summary, description, strengths, weaknesses, best_use_cases, status, trust_level)
values
('ChatGPT', 'chatgpt', 'general', '企画、文章、壁打ち、整理、実装相談まで幅広く使える総合AI。', '最初の構想整理から文章化、プロンプト設計、簡単な実装相談まで広く使えます。', array['企画整理','文章作成','壁打ち','投稿設計','LP構成'], array['大量資料の恒常管理には別ツール併用が必要'], array['SNS投稿','企画書','診断ロジック設計','文章リライト'], 'published', 'medium'),
('Claude', 'claude', 'writing', '長文の構成、文章の深掘り、丁寧な壁打ちに向いたAI。', '長文構成や自然な文章作成に向いています。', array['長文構成','自然な文章','深い整理'], array['最新情報は確認が必要'], array['note記事','講演原稿','サービス構想'], 'published', 'medium'),
('Claude Code', 'claude-code', 'coding', 'コードベース理解、設計、構造把握に強いAI開発支援ツール。', '実装前の構造理解や設計整理に向いています。', array['既存コード理解','設計整理','長い文脈の把握'], array['利用制限やトークン消費に注意'], array['実装前の設計','既存プロジェクト理解','コード構造の把握'], 'published', 'medium'),
('Codex', 'codex', 'coding', '実装、修正、バグ対応、コード反映に向いた開発支援AI。', 'Next.js実装、UI修正、DB連携など、小さなタスク単位の開発に向いています。', array['実装','バグ修正','ファイル編集','GitHub連携'], array['目的や仕様が曖昧だと迷走しやすい'], array['Next.js実装','UI修正','DB連携','小さなタスク単位の開発'], 'published', 'medium'),
('Gemini', 'gemini', 'research', 'Google連携や資料理解、調査補助に使いやすいAI。', '調査や資料整理に使いやすいAIです。', array['調査','Google連携','資料整理'], array['用途により出力の粒度調整が必要'], array['リサーチ','資料要約','比較検討'], 'published', 'medium'),
('NotebookLM', 'notebooklm', 'research', 'PDFやメモなど手持ち資料を読み込ませて整理する用途に強いAI。', '資料が多い人の整理や要約に向いています。', array['資料整理','引用元確認','大量メモの要約'], array['資料が少ない時は強みが出にくい'], array['議事録整理','PDF整理','教材作成'], 'published', 'medium'),
('Genspark', 'genspark', 'research', '調査から資料化までを補助するリサーチ系AI。', '調査や資料化の補助に向いています。', array['調査','資料化','時短'], array['最新仕様は確認が必要'], array['リサーチ','資料作成'], 'published', 'medium'),
('Suno', 'suno', 'audio', '音楽生成に向いたクリエイティブAI。', '音楽制作の試作に向いています。', array['音楽生成','試作','表現'], array['権利と商用条件の確認が必要'], array['楽曲制作','BGM制作'], 'published', 'medium'),
('Udio', 'udio', 'audio', '楽曲制作や音楽アイデア作りに使えるAI。', '音楽アイデアづくりに向いています。', array['音楽生成','アイデア出し'], array['権利と商用条件の確認が必要'], array['楽曲制作','デモ制作'], 'published', 'medium'),
('Runway', 'runway', 'video', '動画生成や映像制作に向いたAI。', '映像制作の試作や動画生成に向いています。', array['動画生成','映像編集','試作'], array['生成結果の調整が必要'], array['動画制作','映像案'], 'published', 'medium'),
('Gamma', 'gamma', 'presentation', 'スライドや資料作成を効率化するAI。', '構成からスライド化までを助けます。', array['スライド作成','資料化','構成'], array['細部デザインは調整が必要'], array['営業資料','講演資料'], 'published', 'medium'),
('Napkin AI', 'napkin-ai', 'presentation', '文章を図解やビジュアルに変換しやすいAI。', '図解作成に向いています。', array['図解','要約','視覚化'], array['複雑な図は手直しが必要'], array['図解','提案資料'], 'published', 'medium'),
('Perplexity', 'perplexity', 'research', '根拠を確認しながら調査しやすい検索型AI。', '情報源を見ながら調査できます。', array['調査','出典確認','比較'], array['最終確認は公式情報が必要'], array['市場調査','比較検討'], 'published', 'medium'),
('Felo', 'felo', 'research', 'リサーチや情報整理に使える検索型AI。', '検索と整理に向いています。', array['調査','整理','資料化'], array['情報の確認が必要'], array['リサーチ','要約'], 'published', 'medium')
on conflict (project_key, slug) do nothing;

insert into diagnosis_types (type_key, name, short_description, description, recommended_workflow, caution, first_action, prompt_example)
values
('writing', '文章発信型', '考えを言葉にして発信する力を伸ばすタイプです。', 'SNS、note、LPなど、伝えたいことを読みやすく形にする使い方が向いています。', array['ChatGPT','Claude','Gamma'], '目的、読者、トーンを先に決めると安定します。', '書きたいテーマを3つ出して、ChatGPTで構成案を作りましょう。', 'このテーマで、読者の悩み、結論、見出し構成、本文の順番を提案してください。'),
('research', '調査整理型', '情報を集め、比較し、使える形に整えるタイプです。', '資料やURLをもとに、要点、論点、比較表、次のアクションを整理する使い方が向いています。', array['Perplexity','Gemini','NotebookLM','ChatGPT'], '料金、制限、公式発表は必ず一次情報で確認しましょう。', '調べたいテーマと判断基準を分けて入力しましょう。', 'このテーマについて、公式情報を優先して比較表と注意点を作ってください。'),
('site_builder', 'サイト制作型', '目的をページ構成に落とし、サイトとして公開するタイプです。', 'ChatGPTで仕様を整理し、Claude Codeで設計を確認し、Codexで実装する流れが向いています。', array['ChatGPT','Claude Code','Codex','Supabase'], 'いきなり実装に入らず、ページ一覧とデータ構造を先に決めると失敗しにくいです。', 'サイトの目的、読者、必要ページを箇条書きにしましょう。', 'このサイトの目的から、MVPに必要なページ、DB、フォーム項目を整理してください。'),
('developer', '実装改善型', 'コードを書き、直し、運用できる形に近づけるタイプです。', '実装、バグ修正、UI調整、DB連携などを小さな単位で進める使い方が向いています。', array['Claude Code','Codex','ChatGPT'], '大きな依頼を一度に投げず、検証できる単位で依頼しましょう。', '直したい問題を、期待する状態と現在の状態に分けて書きましょう。', 'このエラーの原因を調べ、最小変更で修正して検証してください。'),
('creative', 'クリエイティブ型', '音楽、動画、画像、表現の試作を広げるタイプです。', 'アイデア出しと素材生成を分けて、複数案を試す使い方が向いています。', array['ChatGPT','Suno','Udio','Runway'], '権利や商用利用条件は公開前に確認しましょう。', '作りたい雰囲気、参考、用途を言葉にしましょう。', 'この企画の世界観、構成、生成AI用プロンプトを3案作ってください。'),
('workflow', '業務効率型', '繰り返し作業を整理し、自動化に近づけるタイプです。', '業務フローを見える化し、AIに任せる部分と人が確認する部分を分ける使い方が向いています。', array['ChatGPT','Gemini','Codex'], '個人情報や社外秘データの扱いは慎重に設計しましょう。', '毎週繰り返している作業を手順に分解しましょう。', 'この業務フローを、AIに任せる部分、人が確認する部分、DB化する部分に分けてください。'),
('team', 'チーム運用型', '人とAIの役割を分け、共有しながら進めるタイプです。', 'ルール、テンプレート、確認フローを整え、チームで再現できる使い方が向いています。', array['ChatGPT','NotebookLM','Gemini','Gamma'], '使い方をテンプレート化しましょう。', 'チームで共有したい成果物と承認フローを書き出しましょう。', 'チームでAIを使うための役割分担、注意点、確認フローを作ってください。'),
('producer', 'AIプロデューサー型', '複数AIを組み合わせ、企画から実装まで動かすタイプです。', '構想、文章、調査、実装、資料化をAIごとに分担して進める使い方が向いています。', array['ChatGPT','Claude','Gemini','NotebookLM','Codex','Genspark'], '判断ポイントを人間側に残しましょう。', 'ゴール、期限、使える素材、必要なAI作業を整理しましょう。', 'このプロジェクトを、構想、調査、制作、実装、公開のタスクに分解してください。')
on conflict (project_key, type_key) do nothing;

insert into ai_use_cases (title, slug, purpose, tools_used, workflow, result, good_points, pain_points, recommended_for, body, publish_status)
values (
  'Claude CodeとCodexでホームページ制作',
  'site-with-codex',
  'サイト制作',
  array['ChatGPT','Claude Code','Codex'],
  array['ChatGPTで企画整理','Claude Codeで仕様書化','Codexで実装'],
  'ホームページや診断サイトのMVPを短期間で形にできる。',
  array['仕様を小さく分けると実装が進みやすい','設計と実装を分担できる'],
  array['曖昧な依頼だと手戻りが出やすい'],
  array['サイトを作りたい人','AI活用をサービス化したい人'],
  'ChatGPTで目的とページ構成を整理し、Claude Codeで仕様や既存構造を理解し、Codexで実装します。',
  'published'
) on conflict (project_key, slug) do nothing;
