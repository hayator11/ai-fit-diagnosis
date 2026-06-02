"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { diagnosisQuestions } from "@/lib/data/constants";
import { calculateDiagnosisResult } from "@/lib/diagnosis/calculateResult";
import { saveDiagnosisLog } from "@/lib/actions/diagnosis";
import type { DiagnosisAnswerInput } from "@/types/diagnosis";

const profileConfig = {
  ai_level_0: {
    label: "はじめてに近い人向け",
    description: "まずは、何に困っているか、何を少し楽にしたいかを中心に聞きます。専門的な質問は少なめです。",
    questionKeys: ["ai_level", "pain", "goal", "type", "output", "docs", "priority", "future"]
  },
  ai_level_1: {
    label: "少し使っている人向け",
    description: "使い道を広げるために、作りたいもの、任せたい範囲、重視することを聞きます。",
    questionKeys: ["ai_level", "goal", "pain", "type", "output", "range", "docs", "priority", "budget", "future"]
  },
  ai_level_2: {
    label: "もっと深く知りたい人向け",
    description: "AIの役割分担、設計、実装、資料整理、仕組み化まで見えるように少し踏み込んで聞きます。",
    questionKeys: ["ai_level", "goal", "pain", "output", "range", "code", "docs", "priority", "budget", "future"]
  }
} as const;

export function DiagnosisForm() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();
  const selectedLevel = answers.ai_level as keyof typeof profileConfig | undefined;
  const activeProfile = selectedLevel ? profileConfig[selectedLevel] : undefined;

  const visibleQuestions = useMemo(() => {
    const levelQuestion = diagnosisQuestions.find((question) => question.questionKey === "ai_level");
    if (!activeProfile) return levelQuestion ? [levelQuestion] : diagnosisQuestions;
    return activeProfile.questionKeys
      .map((key) => diagnosisQuestions.find((question) => question.questionKey === key))
      .filter((question): question is (typeof diagnosisQuestions)[number] => Boolean(question));
  }, [activeProfile]);

  const selectedInputs = useMemo<DiagnosisAnswerInput[]>(() => {
    return visibleQuestions.flatMap((question) => {
      const answerKey = answers[question.questionKey];
      const answer = question.answers.find((item) => item.answerKey === answerKey);
      return answer ? [{ questionKey: question.questionKey, answerKey: answer.answerKey, scoreJson: answer.scoreJson }] : [];
    });
  }, [answers, visibleQuestions]);

  function submit() {
    if (selectedInputs.length !== visibleQuestions.length || !activeProfile) return;
    startTransition(async () => {
      const fallback = calculateDiagnosisResult(selectedInputs);
      const result = await saveDiagnosisLog(selectedInputs);
      const finalResult = result ?? fallback;
      const params = new URLSearchParams({
        type: finalResult.resultType,
        tools: finalResult.recommendedTools.join(",")
      });
      router.push(`/diagnosis/result?${params.toString()}`);
    });
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <Badge>{selectedInputs.length} / {visibleQuestions.length} 回答済み</Badge>
        <div className="h-2 flex-1 rounded-full bg-slate-200">
          <div className="h-2 rounded-full bg-brand" style={{ width: `${(selectedInputs.length / visibleQuestions.length) * 100}%` }} />
        </div>
      </div>
      {activeProfile && (
        <Card className="border-blue-100 bg-blue-50">
          <Badge className="border-blue-200 bg-white text-brand">質問が分かれました</Badge>
          <h2 className="mt-3 text-lg font-bold">{activeProfile.label}</h2>
          <p className="mt-2 text-sm text-muted">{activeProfile.description}</p>
        </Card>
      )}
      {visibleQuestions.map((question, index) => (
        <Card key={question.questionKey}>
          <p className="text-sm font-semibold text-brand">Q{index + 1}</p>
          <h2 className="mt-1 text-lg font-bold">{question.questionText}</h2>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {question.answers.map((answer) => (
              <label
                key={answer.answerKey}
                className={`cursor-pointer rounded-lg border p-3 text-sm transition ${
                  answers[question.questionKey] === answer.answerKey ? "border-brand bg-blue-50 text-ink" : "border-line bg-white hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  className="sr-only"
                  name={question.questionKey}
                  value={answer.answerKey}
                  checked={answers[question.questionKey] === answer.answerKey}
                  onChange={() =>
                    setAnswers((current) => {
                      if (question.questionKey !== "ai_level") {
                        return { ...current, [question.questionKey]: answer.answerKey };
                      }

                      return { ai_level: answer.answerKey };
                    })
                  }
                />
                {answer.answerText}
              </label>
            ))}
          </div>
        </Card>
      ))}
      <div className="sticky bottom-4 rounded-lg border border-line bg-white p-4 shadow-soft">
        <Button onClick={submit} disabled={selectedInputs.length !== visibleQuestions.length || !activeProfile || isPending} className="w-full">
          {!activeProfile ? "まずAIとの距離感を選んでください" : isPending ? "診断中..." : "診断結果を見る"}
        </Button>
      </div>
    </div>
  );
}
