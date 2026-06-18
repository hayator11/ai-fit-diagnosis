import { mockResponses } from "./mockResponses";

export function getMockSummary() {
  const total = mockResponses.length;
  const completed = mockResponses.filter((r) => r.isCompleted).length;
  const ctaClicks = mockResponses.filter((r) => r.ctaClicked).length;
  const shareClicks = mockResponses.filter((r) => r.shareClicked).length;

  const byExperienceLevel = {
    beginner: mockResponses.filter((r) => r.experienceLevel === "beginner").length,
    intermediate: mockResponses.filter((r) => r.experienceLevel === "intermediate").length,
    advanced: mockResponses.filter((r) => r.experienceLevel === "advanced").length
  };

  const byMainAi = mockResponses.reduce<Record<string, number>>((acc, item) => {
    acc[item.mainAi] = (acc[item.mainAi] ?? 0) + 1;
    return acc;
  }, {});

  const byResultType = mockResponses.reduce<Record<string, number>>((acc, item) => {
    acc[item.resultType] = (acc[item.resultType] ?? 0) + 1;
    return acc;
  }, {});

  const bySource = mockResponses.reduce<Record<string, number>>((acc, item) => {
    acc[item.source] = (acc[item.source] ?? 0) + 1;
    return acc;
  }, {});

  const byDeviceType = mockResponses.reduce<Record<string, number>>((acc, item) => {
    acc[item.deviceType] = (acc[item.deviceType] ?? 0) + 1;
    return acc;
  }, {});

  return {
    total,
    completed,
    completionRate: total === 0 ? 0 : Math.round((completed / total) * 100),
    ctaClicks,
    shareClicks,
    byExperienceLevel,
    byMainAi,
    byResultType,
    bySource,
    byDeviceType
  };
}
