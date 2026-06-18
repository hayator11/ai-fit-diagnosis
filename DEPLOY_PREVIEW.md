# Vercel Preview Guide

## 目的

外部の人に `AI道具診断` を確認してもらうための手順です。

`localhost:3000` は自分のPC内だけで見えるURLです。
外部共有にはVercelのプレビューURLを使います。

## 1. Vercelに設定する環境変数

Vercel Project Settings の Environment Variables に以下を設定します。

```txt
NEXT_PUBLIC_PROJECT_KEY=ai-fit-diagnosis
NEXT_PUBLIC_SITE_URL=https://<vercel-preview-url>
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
```

`ADMIN_PASSWORD` は必ず設定します。
外部確認中も `/admin` はBasic認証で保護されます。

## 2. Supabase

Supabaseを使う場合は、migrationsを適用してからVercelに接続します。

必要なテーブルは `supabase/migrations` に入っています。

## 3. 確認するURL

外部確認で見てもらう主なページ:

- `/`
- `/diagnosis`
- `/tools`
- `/use-cases`
- `/roadmap`
- `/blog`

管理画面:

- `/admin`

管理画面を開く時は、ユーザー名は任意、パスワードは `ADMIN_PASSWORD` を入力します。

## 4. 注意

独自ドメインは、MVP確認後に接続します。
先にVercelプレビューで内容、診断導線、使用例DBを確認するのが効率的です。
