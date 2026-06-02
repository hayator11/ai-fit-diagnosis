create extension if not exists pgcrypto;

create table if not exists ai_tools (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  name text not null,
  slug text not null,
  category text not null,
  summary text,
  description text,
  strengths text[],
  weaknesses text[],
  best_use_cases text[],
  pricing_note text,
  official_url text,
  latest_update text,
  status text not null default 'published',
  trust_level text not null default 'medium',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists ai_tools_project_slug_key on ai_tools(project_key, slug);

create table if not exists diagnosis_questions (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  question_text text not null,
  question_key text not null,
  sort_order int not null,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists diagnosis_questions_project_question_key_key on diagnosis_questions(project_key, question_key);

create table if not exists diagnosis_answers (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  question_id uuid references diagnosis_questions(id) on delete cascade,
  answer_text text not null,
  answer_key text not null,
  score_json jsonb not null default '{}'::jsonb,
  sort_order int not null default 0,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists diagnosis_answers_project_question_answer_key on diagnosis_answers(project_key, question_id, answer_key);

create table if not exists diagnosis_types (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  type_key text not null,
  name text not null,
  short_description text,
  description text,
  recommended_workflow text[],
  caution text,
  first_action text,
  prompt_example text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists diagnosis_types_project_type_key_key on diagnosis_types(project_key, type_key);

create table if not exists diagnosis_logs (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  session_id text,
  answers_json jsonb not null,
  type_scores jsonb not null,
  tool_scores jsonb not null,
  result_type text not null,
  recommended_tools text[],
  created_at timestamptz default now()
);

create table if not exists ai_reviews (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  display_name text,
  display_url text,
  tools_used text[] not null,
  use_purpose text not null,
  rating text not null,
  good_points text[],
  bad_points text[],
  recommended_for text[],
  want_to_use_again text,
  actual_use_case text,
  publish_permission text not null default 'admin_only',
  status text not null default 'pending',
  admin_note text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists ai_use_cases (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  title text not null,
  slug text not null,
  purpose text not null,
  tools_used text[] not null,
  workflow text[],
  result text,
  good_points text[],
  pain_points text[],
  recommended_for text[],
  body text,
  source_review_id uuid references ai_reviews(id) on delete set null,
  publish_status text not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists ai_use_cases_project_slug_key on ai_use_cases(project_key, slug);

create table if not exists ai_updates (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  tool_id uuid references ai_tools(id) on delete set null,
  title text not null,
  summary text,
  source_url text,
  source_type text,
  importance text not null default 'medium',
  detected_at timestamptz default now(),
  published_at timestamptz,
  status text not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists ai_insights (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  source_type text not null,
  source_id uuid,
  insight_title text,
  summary text,
  related_tools text[],
  related_purposes text[],
  confidence_score numeric,
  status text not null default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists ai_tools_project_status_idx on ai_tools(project_key, status);
create index if not exists ai_use_cases_project_publish_status_idx on ai_use_cases(project_key, publish_status);
create index if not exists ai_reviews_project_status_idx on ai_reviews(project_key, status);
create index if not exists ai_updates_project_status_idx on ai_updates(project_key, status);
create index if not exists diagnosis_logs_project_created_at_idx on diagnosis_logs(project_key, created_at);
