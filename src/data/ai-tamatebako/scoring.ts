import { questions } from "./questions";
import { results } from "./results";

export type ScoreMap = {
  writing: number;
  research: number;
  design: number;
  video: number;
  voice: number;
  productivity: number;
  development: number;
  creative: number;
  community: number;
  monetization: number;
  beginner: number;
};

export type UserAnswer = {
  questionId: string;
  optionIds: string[];
};

export const initialScores: ScoreMap = {
  writing: 0,
  research: 0,
  design: 0,
  video: 0,
  voice: 0,
  productivity: 0,
  development: 0,
  creative: 0,
  community: 0,
  monetization: 0,
  beginner: 0
};

export function calculateScores(answers: UserAnswer[]): ScoreMap {
  const scores: ScoreMap = { ...initialScores };

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) continue;

    for (const optionId of answer.optionIds) {
      const option = question.options.find((o) => o.id === optionId);
      if (!option) continue;

      for (const [key, value] of Object.entries(option.scores)) {
        const scoreKey = key as keyof ScoreMap;
        scores[scoreKey] += value ?? 0;
      }
    }
  }

  return scores;
}

export function getTopScoreKey(scores: ScoreMap): keyof ScoreMap {
  const priority: (keyof ScoreMap)[] = ["beginner", "development", "writing", "productivity", "research", "design", "video", "voice", "creative", "community", "monetization"];
  let topKey: keyof ScoreMap = "beginner";
  let topValue = -1;

  for (const key of priority) {
    if (scores[key] > topValue) {
      topKey = key;
      topValue = scores[key];
    }
  }

  return topKey;
}

export function getResultByScores(scores: ScoreMap) {
  const topKey = getTopScoreKey(scores);
  return results.find((result) => result.primaryScoreKey === topKey) ?? results.find((result) => result.id === "beginner_starter");
}
