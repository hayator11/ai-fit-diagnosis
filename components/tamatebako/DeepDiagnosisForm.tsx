"use client";

import { useMemo, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { deepQuestions, type DeepScoreKey } from "@/src/data/ai-tamatebako/deepQuestions";
import { deepResults } from "@/src/data/ai-tamatebako/deepResults";
import { cn } from "@/lib/utils/cn";

type DeepAnswers = Record<string, string>;
type DeepScores = Record<DeepScoreKey, number>;

const deepResultPriority: DeepScoreKey[] = ["sekkei", "template", "marunage"];

export function DeepDiagnosisForm() {
  const lineUrl = process.env.NEXT_PUBLIC_LINE_URL;
  const [answers, setAnswers] = useState<DeepAnswers>({});
  const [submitted, setSubmitted] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === deepQuestions.length;

  const missingCount = useMemo(() => deepQuestions.length - answeredCount, [answeredCount]);
  const scores = useMemo<DeepScores>(() => {
    const nextScores: DeepScores = { marunage: 0, template: 0, sekkei: 0 };

    for (const question of deepQuestions) {
      const selectedOptionId = answers[question.id];
      const selectedOption = question.options.find((option) => option.id === selectedOptionId);
      if (!selectedOption) continue;

      nextScores.marunage += selectedOption.scores.marunage;
      nextScores.template += selectedOption.scores.template;
      nextScores.sekkei += selectedOption.scores.sekkei;
    }

    return nextScores;
  }, [answers]);
  const resultKey = useMemo<DeepScoreKey>(() => {
    return deepResultPriority.reduce((currentTop, key) => {
      if (scores[key] > scores[currentTop]) return key;
      return currentTop;
    }, "sekkei");
  }, [scores]);
  const result = deepResults[resultKey];

  function submit() {
    if (!isComplete) {
      setShowNotice(true);
      return;
    }
    setSubmitted(true);
    setShowNotice(false);
  }

  if (submitted) {
    return (
      <Card className="mt-8 border-amber-200 bg-gradient-to-br from-white via-amber-50/60 to-sky-50">
        <p className="text-sm font-semibold text-brand">あなたの頼み方タイプ</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight">{result.name}</h2>
        <p className="mt-5 leading-8 text-muted">{result.description}</p>
        <div className="mt-6 rounded-lg border border-amber-100 bg-white/80 p-4">
          <p className="text-sm font-semibold text-brand">おすすめの一歩</p>
          <p className="mt-2 leading-7 text-muted">{result.firstAction}</p>
        </div>
        <div className="mt-6 rounded-lg border border-line bg-white/90 p-4">
          <p className="text-sm font-semibold text-brand">次に使えるプロンプト</p>
          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-muted">{result.promptTemplate}</p>
        </div>
        <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50/60 p-4">
          <h3 className="text-lg font-bold">AIへの頼み方を、LINEでも育てる。</h3>
          <div className="mt-3 space-y-4 leading-7 text-muted">
            <p>診断結果を見て終わりではなく、実際に使えるプロンプトや、新しいAIの情報、みんなの使用例をLINEで受け取れます。</p>
            <p>
              AIは、道具です。
              <br />
              でも、道具は使い方がわかると一気に力になります。
            </p>
            <p>あなたに合うAIの頼み方を、少しずつ一緒に育てていきましょう。</p>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {lineUrl ? (
              <a
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                LINEで受け取る
              </a>
            ) : (
              <Button disabled>LINEで受け取る</Button>
            )}
            <p className="text-sm font-semibold text-muted">孤独な挑戦者を、減らしたい。</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            onClick={() => {
              setAnswers({});
              setSubmitted(false);
              setShowNotice(false);
            }}
          >
            もう一度診断する
          </Button>
          <ButtonLink href="/diagnosis" variant="secondary">
            ライト診断に戻る
          </ButtonLink>
        </div>
      </Card>
    );
  }

  return (
    <section className="mt-10 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-brand">深掘り診断フォーム</p>
          <h2 className="mt-2 text-2xl font-bold">AIへの頼み方を11問で見ていきます</h2>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-muted">
          {answeredCount} / {deepQuestions.length} 問回答済み
        </div>
      </div>

      {deepQuestions.map((question, index) => (
        <Card key={question.id}>
          <p className="text-sm font-semibold text-brand">Q{index + 1}</p>
          <h3 className="mt-2 text-xl font-bold leading-8">{question.title}</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {question.options.map((option) => {
              const selected = answers[question.id] === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setAnswers((current) => ({ ...current, [question.id]: option.id }));
                    setShowNotice(false);
                  }}
                  className={cn(
                    "min-h-14 rounded-lg border border-line bg-white px-4 py-3 text-left text-sm font-semibold leading-6 transition hover:border-amber-300 hover:bg-amber-50/50",
                    selected && "border-amber-400 bg-amber-50 shadow-sm"
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </Card>
      ))}

      <Card className="flex flex-col gap-4 border-amber-100 bg-amber-50/50 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand">孤独な挑戦者を、減らしたい。</p>
          <p className="mt-2 text-sm text-muted">
            {isComplete ? "回答がそろいました。送信できます。" : `あと${missingCount}問回答すると送信できます。`}
          </p>
          {showNotice ? <p className="mt-2 text-sm font-semibold text-amber-700">未回答の質問があります。</p> : null}
        </div>
        <Button onClick={submit} className="shrink-0">
          回答を送信する
        </Button>
      </Card>
    </section>
  );
}
