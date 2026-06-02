import { mockResponses } from "@/src/data/ai-tamatebako/mockResponses";

function escapeCsv(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function GET() {
  const headers = [
    "id",
    "sessionId",
    "createdAt",
    "experienceLevel",
    "resultType",
    "mainAi",
    "relatedAis",
    "favoriteAi",
    "favoriteCategory",
    "topicsOfInterest",
    "source",
    "deviceType",
    "isCompleted",
    "ctaClicked",
    "shareClicked"
  ];

  const rows = mockResponses.map((item) => [
    item.id,
    item.sessionId,
    item.createdAt,
    item.experienceLevel,
    item.resultType,
    item.mainAi,
    item.relatedAis.join(" / "),
    item.favoriteAi.join(" / "),
    item.favoriteCategory.join(" / "),
    item.topicsOfInterest.join(" / "),
    item.source,
    item.deviceType,
    String(item.isCompleted),
    String(item.ctaClicked),
    String(item.shareClicked)
  ]);

  const csv = [headers, ...rows].map((row) => row.map((value) => escapeCsv(value)).join(",")).join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="ai-tamatebako-responses.csv"'
    }
  });
}
