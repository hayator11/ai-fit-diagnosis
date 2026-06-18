import { getMockSummary } from "./mockSummary";

export function getExperienceLevelChartData() {
  const summary = getMockSummary();

  return [
    {
      label: "はじめてに近い",
      value: summary.byExperienceLevel.beginner
    },
    {
      label: "少し使っている",
      value: summary.byExperienceLevel.intermediate
    },
    {
      label: "もっと深く知りたい",
      value: summary.byExperienceLevel.advanced
    }
  ];
}

export function getMainAiChartData() {
  const summary = getMockSummary();

  return Object.entries(summary.byMainAi).map(([label, value]) => ({
    label,
    value
  }));
}

export function getResultTypeChartData() {
  const summary = getMockSummary();

  return Object.entries(summary.byResultType).map(([label, value]) => ({
    label,
    value
  }));
}

export function getSourceChartData() {
  const summary = getMockSummary();

  return Object.entries(summary.bySource).map(([label, value]) => ({
    label,
    value
  }));
}
