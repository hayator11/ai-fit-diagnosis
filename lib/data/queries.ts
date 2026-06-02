import { aiTools, sampleUpdates, sampleUseCases } from "@/lib/data/constants";
import { PROJECT_KEY } from "@/lib/project";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { AiReview, AiTool, AiUpdate, AiUseCase } from "@/types/database";

export async function getPublishedTools(): Promise<AiTool[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return aiTools;
  const { data, error } = await supabase.from("ai_tools").select("*").eq("project_key", PROJECT_KEY).eq("status", "published").order("name");
  return error || !data?.length ? aiTools : data;
}

export async function getToolBySlug(slug: string): Promise<AiTool | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return aiTools.find((tool) => tool.slug === slug) ?? null;
  const { data, error } = await supabase.from("ai_tools").select("*").eq("project_key", PROJECT_KEY).eq("slug", slug).eq("status", "published").single();
  return error ? aiTools.find((tool) => tool.slug === slug) ?? null : data;
}

export async function getPublishedUseCases(): Promise<AiUseCase[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return sampleUseCases;
  const { data, error } = await supabase.from("ai_use_cases").select("*").eq("project_key", PROJECT_KEY).eq("publish_status", "published").order("created_at", { ascending: false });
  return error || !data?.length ? sampleUseCases : data;
}

export async function getUseCaseById(id: string): Promise<AiUseCase | null> {
  const useCases = await getPublishedUseCases();
  return useCases.find((item) => item.id === id || item.slug === id) ?? null;
}

export async function getPublishedUpdates(): Promise<AiUpdate[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return sampleUpdates;
  const { data, error } = await supabase
    .from("ai_updates")
    .select("*, ai_tools(name, slug)")
    .eq("project_key", PROJECT_KEY)
    .eq("status", "published")
    .order("published_at", { ascending: false });
  return error || !data?.length ? sampleUpdates : data;
}

export async function getUpdateById(id: string): Promise<AiUpdate | null> {
  const updates = await getPublishedUpdates();
  return updates.find((item) => item.id === id) ?? null;
}

export async function getReviews(): Promise<AiReview[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];
  const { data, error } = await supabase.from("ai_reviews").select("*").eq("project_key", PROJECT_KEY).order("created_at", { ascending: false });
  return error ? [] : data ?? [];
}

export async function getAdminUseCases(): Promise<AiUseCase[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return sampleUseCases;
  const { data, error } = await supabase.from("ai_use_cases").select("*").eq("project_key", PROJECT_KEY).order("created_at", { ascending: false });
  return error ? sampleUseCases : data ?? [];
}

export async function getAdminUpdates(): Promise<AiUpdate[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return sampleUpdates;
  const { data, error } = await supabase.from("ai_updates").select("*, ai_tools(name, slug)").eq("project_key", PROJECT_KEY).order("created_at", { ascending: false });
  return error ? sampleUpdates : data ?? [];
}
