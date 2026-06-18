# Project Scope

## このプロジェクト

- Project name: AI道具診断
- Project key: `ai-fit-diagnosis`
- Default local URL: `http://localhost:3000`
- Production URL: set with `NEXT_PUBLIC_SITE_URL`
- Original domain candidate: 未設定
- Workspace: `/Users/hayatoshinjo/Documents/Codex/2026-05-31/codex-next-js-app-router-server`

## 外部確認の方針

外部の人に見てもらう時は、まずVercelのプレビューURLを使います。
`localhost` は自分のPC内だけで見えるURLなので、外部共有には使えません。

Vercelに設定する環境変数:

- `NEXT_PUBLIC_PROJECT_KEY=ai-fit-diagnosis`
- `NEXT_PUBLIC_SITE_URL=https://<vercel-preview-or-domain>`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`

`/admin` 配下は `ADMIN_PASSWORD` によるBasic認証で保護します。
本番環境で `ADMIN_PASSWORD` が未設定の場合、管理画面は閉じます。

## 混合防止ルール

このリポジトリは、他のサイト構築プロジェクトと混ざらないように、次の境界を持ちます。

1. 環境変数 `NEXT_PUBLIC_PROJECT_KEY` は `ai-fit-diagnosis` に固定します。
2. 環境変数 `NEXT_PUBLIC_SITE_URL` は、このサイトの公開URLだけを入れます。
3. Supabaseの主要テーブルには `project_key` を持たせます。
4. アプリ側の取得、保存、更新はすべて `project_key = ai-fit-diagnosis` で絞ります。
5. 同じSupabaseプロジェクトを複数サイトで共有しても、公開ページと管理画面にはこのサイトのデータだけを表示します。
6. 本番では、可能ならSupabaseプロジェクト自体もサイトごとに分けるのが最も安全です。

## DB設計メモ

テーブル名はMVP指示書に合わせて `ai_tools` などを維持しています。
ただし、slugや診断キーの一意制約は `project_key` と組み合わせています。

例:

- `ai_tools(project_key, slug)`
- `ai_use_cases(project_key, slug)`
- `diagnosis_questions(project_key, question_key)`
- `diagnosis_types(project_key, type_key)`

## 新しいサイトを作る時

このコードを流用する場合は、最低限以下を変えてください。

- `NEXT_PUBLIC_PROJECT_KEY`
- `NEXT_PUBLIC_SITE_URL`
- `ADMIN_PASSWORD`
- `lib/project.ts`
- `PROJECT_SCOPE.md`
- Supabase seed data
- サイト名、コピー、診断データ

同じDBに別サイトのデータを入れる場合でも、`project_key` を変えれば混在しません。
