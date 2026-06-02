"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Check, RotateCcw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TamatebakoBox } from "@/components/tamatebako/TamatebakoBox";
import { aiTools } from "@/src/data/ai-tamatebako/aiTools";
import { experienceLevels, type ExperienceLevelId } from "@/src/data/ai-tamatebako/experienceLevels";
import { questions } from "@/src/data/ai-tamatebako/questions";
import { calculateScores, getResultByScores, type UserAnswer } from "@/src/data/ai-tamatebako/scoring";
import { cn } from "@/lib/utils/cn";

type AnswersByQuestion = Record<string, string[]>;

export function TamatebakoDiagnosis() {
  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevelId | null>(null);
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswersByQuestion>({});
  const [showResult, setShowResult] = useState(false);

  const level = experienceLevels.find((item) => item.id === selectedLevel);
  const question = questions[step];
  const selectedOptionIds = question ? answers[question.id] ?? [] : [];
  const progress = Math.round(((step + (selectedOptionIds.length > 0 ? 1 : 0)) / questions.length) * 100);

  const userAnswers = useMemo<UserAnswer[]>(
    () => Object.entries(answers).map(([questionId, optionIds]) => ({ questionId, optionIds })),
    [answers]
  );
  const scores = useMemo(() => calculateScores(userAnswers), [userAnswers]);
  const result = useMemo(() => getResultByScores(scores), [scores]);
  const mainAi = aiTools.find((tool) => tool.id === result?.mainAiId);
  const relatedAis = result?.relatedAiIds.map((id) => aiTools.find((tool) => tool.id === id)).filter(Boolean) ?? [];

  const preferenceTags = useMemo(() => {
    const tags = new Set<string>();
    for (const answer of userAnswers) {
      const sourceQuestion = questions.find((item) => item.id === answer.questionId);
      for (const optionId of answer.optionIds) {
        const option = sourceQuestion?.options.find((item) => item.id === optionId);
        option?.preferenceTags?.forEach((tag) => tags.add(tag));
      }
    }
    return Array.from(tags);
  }, [userAnswers]);

  function toggleOption(optionId: string) {
    if (!question) return;
    setAnswers((current) => {
      const currentIds = current[question.id] ?? [];
      if (question.type === "single") {
        return { ...current, [question.id]: [optionId] };
      }
      const nextIds = currentIds.includes(optionId)
        ? currentIds.filter((id) => id !== optionId)
        : [...currentIds, optionId];
      return { ...current, [question.id]: nextIds };
    });
  }

  function next() {
    if (selectedOptionIds.length === 0) return;
    sendEvent("answer", {
      questionId: question.id,
      optionIds: selectedOptionIds
    });
    if (step >= questions.length - 1) {
      sendEvent("complete", {
        resultType: result?.id,
        mainAi: mainAi?.name,
        scores,
        preferenceTags
      });
      setShowResult(true);
      return;
    }
    setStep((current) => current + 1);
  }

  function reset() {
    setSelectedLevel(null);
    setStarted(false);
    setStep(0);
    setAnswers({});
    setShowResult(false);
  }

  function shareResult() {
    sendEvent("event", { name: "share", resultType: result?.id });
    const text = `AI玉手箱診断の結果は「${result?.title}」でした。ひらけば、自分の可能性が見えてくる。`;
    if (navigator.share) {
      navigator.share({ title: "AI玉手箱診断", text, url: window.location.href }).catch(() => undefined);
      return;
    }
    navigator.clipboard?.writeText(`${text}\n${window.location.href}`);
  }

  if (showResult && result && level) {
    return (
      <div className="space-y-6">
        <Card className="overflow-hidden border-amber-200 bg-gradient-to-br from-white via-amber-50/60 to-sky-50 p-0">
          <div className="p-6 md:p-8">
            <p className="text-sm font-semibold text-brand">{level.boxName}をひらいた結果</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{result.title}</h2>
            <p className="mt-3 text-lg text-muted">{result.subtitle}</p>
            <p className="mt-6 max-w-3xl leading-8 text-muted">{result.description}</p>
          </div>
          <div className="grid border-t border-amber-100 bg-white/70 md:grid-cols-3">
            <div className="border-b border-amber-100 p-5 md:border-b-0 md:border-r">
              <p className="text-sm text-muted">メインAI</p>
              <p className="mt-2 text-2xl font-bold">{mainAi?.name ?? result.mainAiId}</p>
              <p className="mt-2 text-sm text-muted">{mainAi?.description}</p>
            </div>
            <div className="border-b border-amber-100 p-5 md:border-b-0 md:border-r">
              <p className="text-sm text-muted">相性の良いAI</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedAis.map((tool) => (
                  <span key={tool?.id} className="rounded-full border border-line bg-white px-3 py-1 text-sm font-semibold">
                    {tool?.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-muted">見えてきた好み</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {preferenceTags.slice(0, 8).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-bold">最初にやること</h3>
            <p className="mt-3 leading-7 text-muted">{result.firstAction}</p>
          </Card>
          {level.resultTone.showPromptExamples && result.promptExample ? (
            <Card>
              <h3 className="text-lg font-bold">おすすめプロンプト</h3>
              <p className="mt-3 rounded-lg bg-slate-50 p-4 text-sm leading-7 text-muted">{result.promptExample}</p>
            </Card>
          ) : null}
        </div>

        {level.resultTone.showWorkflow && result.workflow ? (
          <Card>
            <h3 className="text-lg font-bold">おすすめの使う順番</h3>
            <ol className="mt-4 grid gap-3 md:grid-cols-3">
              {result.workflow.map((item, index) => (
                <li key={item} className="rounded-lg border border-line bg-white p-4">
                  <p className="text-sm font-semibold text-brand">Step {index + 1}</p>
                  <p className="mt-2 font-semibold">{item}</p>
                </li>
              ))}
            </ol>
          </Card>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <Button onClick={shareResult} variant="secondary">
            <Share2 className="mr-2 h-4 w-4" />
            結果をシェアする
          </Button>
          <Button onClick={reset} variant="ghost">
            <RotateCcw className="mr-2 h-4 w-4" />
            もう一度診断する
          </Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="space-y-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {experienceLevels.map((item) => (
            <TamatebakoBox
              key={item.id}
              level={item}
              selected={selectedLevel === item.id}
              onSelect={(id) => {
                setSelectedLevel(id);
                window.localStorage.setItem("tamatebakoExperienceLevel", id);
              }}
            />
          ))}
        </div>
        <Card className="flex flex-col gap-4 border-amber-100 bg-amber-50/50 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand">まず、今の自分に近い玉手箱を選んでください。</p>
            <p className="mt-2 text-sm text-muted">
              {level ? `${level.boxName}を選んでいます。${level.description}` : "選ぶと箱が光り、診断に進めます。"}
            </p>
          </div>
          <Button
            onClick={() => {
              sendEvent("start", {});
              sendEvent("select-level", {});
              setStarted(true);
            }}
            disabled={!selectedLevel}
            className="shrink-0"
          >
            この玉手箱をひらく
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={() => (step === 0 ? setStarted(false) : setStep((current) => current - 1))} className="inline-flex items-center text-sm font-semibold text-muted hover:text-ink">
          <ArrowLeft className="mr-2 h-4 w-4" />
          戻る
        </button>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-muted">
          {step + 1} / {questions.length} 問
        </div>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-gradient-to-r from-amber-300 via-sky-300 to-indigo-500 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <Card>
        <p className="text-sm font-semibold text-brand">Q{step + 1}</p>
        <h2 className="mt-2 text-2xl font-bold">{question.title}</h2>
        {question.description ? <p className="mt-2 text-sm text-muted">{question.description}</p> : null}
        {question.type === "multiple" ? <p className="mt-3 text-sm font-semibold text-muted">複数選べます。</p> : null}
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {question.options.map((option) => {
            const active = selectedOptionIds.includes(option.id);
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggleOption(option.id)}
                className={cn(
                  "flex min-h-16 items-center justify-between rounded-lg border p-4 text-left transition",
                  active ? "border-amber-300 bg-amber-50 shadow-sm" : "border-line bg-white hover:bg-slate-50"
                )}
              >
                <span>
                  <span className="font-semibold">{option.label}</span>
                  {option.description ? <span className="mt-1 block text-sm text-muted">{option.description}</span> : null}
                </span>
                {active ? <Check className="ml-3 h-5 w-5 shrink-0 text-amber-600" /> : null}
              </button>
            );
          })}
        </div>
      </Card>

      <Button onClick={next} disabled={selectedOptionIds.length === 0} className="w-full">
        {step >= questions.length - 1 ? "診断結果を見る" : "次へ進む"}
      </Button>
    </div>
  );
}

function sendEvent(event: string, payload: Record<string, unknown>) {
  fetch(`/api/tamatebako/${event}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: getSessionId(),
      experienceLevel: window.localStorage.getItem("tamatebakoExperienceLevel"),
      ...payload
    })
  }).catch(() => undefined);
}

function getSessionId() {
  const key = "tamatebakoSessionId";
  const current = window.localStorage.getItem(key);
  if (current) return current;
  const next = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  window.localStorage.setItem(key, next);
  return next;
}
