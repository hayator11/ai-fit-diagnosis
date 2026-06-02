import { NextRequest, NextResponse } from "next/server";
import { PROJECT_KEY } from "@/lib/project";
import { getSupabaseAdmin } from "@/lib/supabase/server";

const allowedEvents = new Set(["start", "select-level", "answer", "select-preferences", "complete", "event"]);

export async function POST(request: NextRequest, { params }: { params: Promise<{ event: string }> }) {
  const { event } = await params;

  if (!allowedEvents.has(event)) {
    return NextResponse.json({ ok: false, message: "Unknown event" }, { status: 404 });
  }

  const payload = await request.json().catch(() => ({}));
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return NextResponse.json({
      ok: true,
      stored: false,
      message: "Supabase is not configured yet. The event was accepted for local testing."
    });
  }

  const { error } = await supabase.from("tamatebako_events").insert({
    project_key: PROJECT_KEY,
    session_id: payload.sessionId ?? null,
    event_type: event,
    experience_level: payload.experienceLevel ?? null,
    result_type: payload.resultType ?? null,
    main_ai: payload.mainAi ?? null,
    payload
  });

  if (error) {
    return NextResponse.json({ ok: false, message: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
