import type { DiagnosisAnswerInput } from "@/types/diagnosis";

const typePriority = ["producer", "site_builder", "developer", "writing", "research", "workflow", "team", "creative"];
const toolPriority = ["ChatGPT", "Codex", "Claude Code", "Claude", "Gemini", "NotebookLM"];

function addScores(target: Record<string, number>, source?: Record<string, number>) {
  Object.entries(source ?? {}).forEach(([key, value]) => {
    target[key] = (target[key] ?? 0) + value;
  });
}

export function calculateDiagnosisResult(answers: DiagnosisAnswerInput[]) {
  const typeScores: Record<string, number> = {};
  const toolScores: Record<string, number> = {};

  answers.forEach((answer) => {
    addScores(typeScores, answer.scoreJson.types);
    addScores(toolScores, answer.scoreJson.tools);
  });

  const resultType =
    Object.entries(typeScores).sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return typePriority.indexOf(a[0]) - typePriority.indexOf(b[0]);
    })[0]?.[0] ?? "producer";

  const recommendedTools = Object.entries(toolScores)
    .sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return (toolPriority.indexOf(a[0]) || 999) - (toolPriority.indexOf(b[0]) || 999);
    })
    .slice(0, 5)
    .map(([tool]) => tool);

  if (!recommendedTools.includes("ChatGPT")) {
    recommendedTools.push("ChatGPT");
  }

  return {
    resultType,
    typeScores,
    toolScores,
    recommendedTools: recommendedTools.slice(0, 5)
  };
}
