"use server";

import { calculateDiagnosisResult } from "@/lib/diagnosis/calculateResult";
import { PROJECT_KEY } from "@/lib/project";
import { getSupabaseAdmin } from "@/lib/supabase/server";
import type { DiagnosisAnswerInput } from "@/types/diagnosis";

export async function saveDiagnosisLog(answers: DiagnosisAnswerInput[], sessionId?: string) {
  const result = calculateDiagnosisResult(answers);
  const supabase = getSupabaseAdmin();

  if (supabase) {
    await supabase.from("diagnosis_logs").insert({
      project_key: PROJECT_KEY,
      session_id: sessionId ?? crypto.randomUUID(),
      answers_json: answers,
      type_scores: result.typeScores,
      tool_scores: result.toolScores,
      result_type: result.resultType,
      recommended_tools: result.recommendedTools
    });
  }

  return result;
}
