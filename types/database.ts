export type AiTool = {
  id?: string;
  project_key?: string;
  name: string;
  slug: string;
  category: string;
  summary?: string | null;
  description?: string | null;
  strengths?: string[] | null;
  weaknesses?: string[] | null;
  best_use_cases?: string[] | null;
  pricing_note?: string | null;
  official_url?: string | null;
  latest_update?: string | null;
  status?: string;
  trust_level?: string;
  created_at?: string;
  updated_at?: string;
};

export type AiUseCase = {
  id?: string;
  project_key?: string;
  title: string;
  slug: string;
  purpose: string;
  user_type?: string | null;
  tools_used: string[];
  workflow?: string[] | null;
  result?: string | null;
  lesson?: string | null;
  token_note?: string | null;
  time_saved_note?: string | null;
  difficulty?: string | null;
  recommendation_score?: number | null;
  source_url?: string | null;
  good_points?: string[] | null;
  pain_points?: string[] | null;
  recommended_for?: string[] | null;
  body?: string | null;
  publish_status?: string;
  created_at?: string;
};

export type AiUpdate = {
  id?: string;
  project_key?: string;
  title: string;
  summary?: string | null;
  source_url?: string | null;
  source_type?: string | null;
  importance?: string;
  status?: string;
  published_at?: string | null;
  ai_tools?: { name: string; slug: string } | null;
};

export type AiReview = {
  id?: string;
  project_key?: string;
  display_name?: string | null;
  display_url?: string | null;
  tools_used: string[];
  use_purpose: string;
  rating: string;
  good_points?: string[] | null;
  bad_points?: string[] | null;
  recommended_for?: string[] | null;
  want_to_use_again?: string | null;
  actual_use_case?: string | null;
  publish_permission: string;
  status?: string;
  admin_note?: string | null;
  created_at?: string;
};
