create table if not exists tamatebako_events (
  id uuid primary key default gen_random_uuid(),
  project_key text not null default 'ai-fit-diagnosis',
  session_id text,
  event_type text not null,
  experience_level text,
  result_type text,
  main_ai text,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz default now()
);

create index if not exists tamatebako_events_project_key_idx on tamatebako_events(project_key);
create index if not exists tamatebako_events_event_type_idx on tamatebako_events(event_type);
create index if not exists tamatebako_events_created_at_idx on tamatebako_events(created_at desc);
