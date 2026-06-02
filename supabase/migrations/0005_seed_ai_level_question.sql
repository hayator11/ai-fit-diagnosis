insert into diagnosis_questions (project_key, question_text, question_key, sort_order)
values ('ai-fit-diagnosis', 'いまのAIとの距離感は？', 'ai_level', 0)
on conflict (project_key, question_key) do update set
  question_text = excluded.question_text,
  sort_order = excluded.sort_order,
  is_active = true;

insert into diagnosis_answers (project_key, question_id, answer_text, answer_key, score_json, sort_order)
select
  'ai-fit-diagnosis',
  q.id,
  v.answer_text,
  v.answer_key,
  v.score_json::jsonb,
  v.sort_order
from diagnosis_questions q
join (
  values
  ('何を聞いたらいいかすら、まだよくわからない', 'ai_level_0', '{"types":{"producer":2},"tools":{"ChatGPT":3}}', 1),
  ('とりあえず少し使ってみている', 'ai_level_1', '{"types":{"writing":1,"workflow":1},"tools":{"ChatGPT":2,"Claude":1,"Gemini":1}}', 2),
  ('もっとコアな使い分けや仕組み化が知りたい', 'ai_level_2', '{"types":{"producer":3,"developer":2,"workflow":1},"tools":{"Claude Code":3,"Codex":3,"NotebookLM":2,"ChatGPT":1}}', 3)
) as v(answer_text, answer_key, score_json, sort_order)
on q.project_key = 'ai-fit-diagnosis' and q.question_key = 'ai_level'
on conflict (project_key, question_id, answer_key) do update set
  answer_text = excluded.answer_text,
  score_json = excluded.score_json,
  sort_order = excluded.sort_order,
  is_active = true;
