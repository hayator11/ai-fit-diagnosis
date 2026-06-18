alter table ai_use_cases add column if not exists user_type text;
alter table ai_use_cases add column if not exists lesson text;
alter table ai_use_cases add column if not exists token_note text;
alter table ai_use_cases add column if not exists time_saved_note text;
alter table ai_use_cases add column if not exists difficulty text;
alter table ai_use_cases add column if not exists recommendation_score int;
alter table ai_use_cases add column if not exists source_url text;

create index if not exists ai_use_cases_project_purpose_idx on ai_use_cases(project_key, purpose);
create index if not exists ai_use_cases_project_user_type_idx on ai_use_cases(project_key, user_type);
create index if not exists ai_use_cases_project_recommendation_idx on ai_use_cases(project_key, recommendation_score);

insert into ai_use_cases (
  project_key,
  title,
  slug,
  purpose,
  user_type,
  tools_used,
  workflow,
  result,
  lesson,
  token_note,
  time_saved_note,
  difficulty,
  recommendation_score,
  good_points,
  pain_points,
  recommended_for,
  body,
  publish_status
)
values
(
  'ai-fit-diagnosis',
  'Claude CodeとCodexでホームページ制作',
  'site-with-codex',
  'サイト制作',
  'サイトを作りたい人',
  array['ChatGPT','Claude Code','Codex'],
  array['ChatGPTで企画整理','Claude Codeで仕様書化','Codexで実装'],
  'ホームページや診断サイトのMVPを短期間で形にできる。',
  '思考と実装を分けると、利用制限や手戻りを抑えやすい。',
  'Claude CodeとCodexは、先に仕様書を作って小さく依頼すると消費を抑えやすい。',
  '構成から実装までの往復が短くなる。',
  '中',
  5,
  array['仕様を小さく分けると実装が進みやすい','設計と実装を分担できる'],
  array['曖昧な依頼だと手戻りが出やすい','長い文脈を抱えすぎると重くなりやすい'],
  array['サイトを作りたい人','AI活用をサービス化したい人'],
  'ChatGPTで目的とページ構成を整理し、Claude Codeで仕様や既存構造を理解し、Codexで実装します。',
  'published'
),
(
  'ai-fit-diagnosis',
  'NotebookLMで資料を読み込ませて企画整理',
  'notebooklm-planning',
  '資料整理',
  '資料が多い人',
  array['NotebookLM','ChatGPT'],
  array['NotebookLMに資料を読み込ませる','要点と論点を整理','ChatGPTで投稿や企画書に変換'],
  '過去資料や議事録を、企画や投稿の材料として再利用できる。',
  '資料が多い人ほど、AIに読む前の置き場所を作る価値がある。',
  '資料理解はNotebookLMに寄せ、生成や編集はChatGPTに分ける。',
  '探す時間と読み返す時間を減らせる。',
  '低',
  5,
  array['過去資料が資産になる','根拠を確認しながら整理できる'],
  array['資料が少ない場合は効果が見えにくい'],
  array['議事録が多い人','講演資料を作りたい人','支援活動の記録が多い人'],
  'PDF、議事録、メモ、過去投稿をNotebookLMに入れ、要点や使える材料を抽出します。',
  'published'
),
(
  'ai-fit-diagnosis',
  '音楽生成AIでプロジェクトソングを作る',
  'music-project-song',
  '世界観づくり',
  'クリエイティブ型',
  array['ChatGPT','Suno','Udio'],
  array['ChatGPTで歌詞と世界観を作る','音楽生成AIで曲にする','SNSやイベントで活用'],
  'プロジェクトの感情や空気感を、曲として共有できる。',
  'AIは効率化だけでなく、感情を広げる道具にもなる。',
  '歌詞、曲調、用途を先に分けると試行回数を減らせる。',
  'デモ曲づくりの初速が上がる。',
  '低',
  4,
  array['世界観を伝えやすい','イベントやショート動画に展開しやすい'],
  array['権利や商用利用条件の確認が必要'],
  array['プロジェクトを広げたい人','イベントを盛り上げたい人'],
  'ChatGPTでテーマ、キーワード、歌詞の方向性を整理し、SunoやUdioで曲にします。',
  'published'
),
(
  'ai-fit-diagnosis',
  'AIでX投稿を量産する',
  'x-post-system',
  'SNS発信',
  '文章発信型',
  array['ChatGPT','Claude'],
  array['投稿テーマを整理','構文テンプレートを作る','投稿案を複数作り反応を見て改善'],
  '発信の型を作ることで、投稿を継続しやすくなる。',
  'AIに毎回ゼロから書かせるより、型を作る方が強い。',
  'テンプレート化するとやり取りが短くなる。',
  '投稿案作成の時間を短縮できる。',
  '低',
  4,
  array['発信が続きやすい','切り口を増やせる'],
  array['自分の言葉に直す工程は必要'],
  array['SNS発信を強くしたい人','noteやブログを書きたい人'],
  'ChatGPTで投稿の目的、読者、構文を整理し、Claudeで自然な文章に整えます。',
  'published'
),
(
  'ai-fit-diagnosis',
  'Gensparkで調査資料を作る',
  'genspark-research',
  '比較調査',
  '調査整理型',
  array['Genspark','ChatGPT'],
  array['Gensparkで調査','要点を整理','ChatGPTで提案書や記事に編集'],
  '調査AIと編集AIを分けることで、見やすい資料にしやすい。',
  '調べるAIと伝えるAIを分けると、出力の役割が明確になる。',
  '調査結果を短く整えてから編集AIへ渡す。',
  '比較調査の初動が速くなる。',
  '中',
  4,
  array['比較材料を集めやすい','資料化まで進めやすい'],
  array['公式情報の最終確認は必要'],
  array['比較調査をしたい人','提案資料を作りたい人'],
  'Gensparkで調査や比較の材料を集め、ChatGPTで読者向けに編集します。',
  'published'
)
on conflict (project_key, slug) do update set
  user_type = excluded.user_type,
  lesson = excluded.lesson,
  token_note = excluded.token_note,
  time_saved_note = excluded.time_saved_note,
  difficulty = excluded.difficulty,
  recommendation_score = excluded.recommendation_score,
  result = excluded.result,
  body = excluded.body;
