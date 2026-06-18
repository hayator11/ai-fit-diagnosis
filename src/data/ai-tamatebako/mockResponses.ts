export type MockResponse = {
  id: string;
  sessionId: string;
  createdAt: string;
  experienceLevel: "beginner" | "intermediate" | "advanced";
  answers: {
    questionId: string;
    optionIds: string[];
  }[];
  favoriteAi: string[];
  favoriteCategory: string[];
  topicsOfInterest: string[];
  resultType: string;
  mainAi: string;
  relatedAis: string[];
  source: "x" | "google" | "direct" | "instagram" | "note" | "referral";
  deviceType: "mobile" | "desktop" | "tablet";
  isCompleted: boolean;
  ctaClicked: boolean;
  shareClicked: boolean;
};

export const mockResponses: MockResponse[] = [
  {
    id: "res_001",
    sessionId: "sess_001",
    createdAt: "2026-06-01T08:00:00+09:00",
    experienceLevel: "beginner",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_unknown"] },
      { questionId: "q2_problem", optionIds: ["q2_too_many"] },
      { questionId: "q3_usage", optionIds: ["q3_personal", "q3_learning"] }
    ],
    favoriteAi: ["ChatGPT", "Canva"],
    favoriteCategory: ["初心者", "文章", "画像"],
    topicsOfInterest: ["AIの始め方", "SNS投稿"],
    resultType: "beginner_starter",
    mainAi: "ChatGPT",
    relatedAis: ["Gemini", "Canva", "NotebookLM"],
    source: "x",
    deviceType: "mobile",
    isCompleted: true,
    ctaClicked: true,
    shareClicked: false
  },
  {
    id: "res_002",
    sessionId: "sess_002",
    createdAt: "2026-06-01T09:15:00+09:00",
    experienceLevel: "intermediate",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_writing"] },
      { questionId: "q2_problem", optionIds: ["q2_sns"] },
      { questionId: "q5_interest_ai", optionIds: ["q5_chatgpt", "q5_claude"] }
    ],
    favoriteAi: ["ChatGPT", "Claude"],
    favoriteCategory: ["文章", "SNS投稿", "企画"],
    topicsOfInterest: ["X投稿", "note記事", "言語化"],
    resultType: "writing_guide",
    mainAi: "ChatGPT",
    relatedAis: ["Claude", "NotebookLM", "Canva"],
    source: "direct",
    deviceType: "desktop",
    isCompleted: true,
    ctaClicked: true,
    shareClicked: true
  },
  {
    id: "res_003",
    sessionId: "sess_003",
    createdAt: "2026-06-01T10:40:00+09:00",
    experienceLevel: "advanced",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_research"] },
      { questionId: "q3_usage", optionIds: ["q3_team", "q3_work"] },
      { questionId: "q5_interest_ai", optionIds: ["q5_notebooklm", "q5_coding"] }
    ],
    favoriteAi: ["NotebookLM", "Codex", "Claude Code"],
    favoriteCategory: ["調査", "資料整理", "実装"],
    topicsOfInterest: ["DB化", "管理画面", "AI分担"],
    resultType: "research_keeper",
    mainAi: "NotebookLM",
    relatedAis: ["Gemini", "ChatGPT", "Perplexity"],
    source: "google",
    deviceType: "desktop",
    isCompleted: true,
    ctaClicked: false,
    shareClicked: false
  },
  {
    id: "res_004",
    sessionId: "sess_004",
    createdAt: "2026-06-01T13:20:00+09:00",
    experienceLevel: "intermediate",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_design"] },
      { questionId: "q2_problem", optionIds: ["q2_material"] },
      { questionId: "q6_result_need", optionIds: ["q6_sns", "q6_work"] }
    ],
    favoriteAi: ["Canva", "ChatGPT"],
    favoriteCategory: ["画像", "デザイン", "資料作成"],
    topicsOfInterest: ["Instagram投稿", "チラシ", "スライド"],
    resultType: "design_crafter",
    mainAi: "Canva",
    relatedAis: ["ChatGPT", "Claude", "NotebookLM"],
    source: "instagram",
    deviceType: "mobile",
    isCompleted: true,
    ctaClicked: true,
    shareClicked: true
  },
  {
    id: "res_005",
    sessionId: "sess_005",
    createdAt: "2026-06-01T15:30:00+09:00",
    experienceLevel: "advanced",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_video"] },
      { questionId: "q2_problem", optionIds: ["q2_video_voice"] },
      { questionId: "q4_preference", optionIds: ["q4_creative", "q4_quality"] }
    ],
    favoriteAi: ["Runway", "Pictory", "ChatGPT"],
    favoriteCategory: ["動画", "映像", "創作"],
    topicsOfInterest: ["ショート動画", "映像表現", "SNS"],
    resultType: "video_mover",
    mainAi: "Runway",
    relatedAis: ["Pictory", "ChatGPT", "Canva"],
    source: "note",
    deviceType: "tablet",
    isCompleted: true,
    ctaClicked: false,
    shareClicked: true
  },
  {
    id: "res_006",
    sessionId: "sess_006",
    createdAt: "2026-06-02T07:10:00+09:00",
    experienceLevel: "beginner",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_writing"] },
      { questionId: "q2_problem", optionIds: ["q2_idea"] },
      { questionId: "q4_preference", optionIds: ["q4_easy", "q4_japanese"] }
    ],
    favoriteAi: ["ChatGPT"],
    favoriteCategory: ["文章", "アイデア出し"],
    topicsOfInterest: ["ブログ", "SNS投稿"],
    resultType: "writing_guide",
    mainAi: "ChatGPT",
    relatedAis: ["Claude", "NotebookLM", "Canva"],
    source: "x",
    deviceType: "mobile",
    isCompleted: true,
    ctaClicked: true,
    shareClicked: false
  },
  {
    id: "res_007",
    sessionId: "sess_007",
    createdAt: "2026-06-02T08:45:00+09:00",
    experienceLevel: "intermediate",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_voice"] },
      { questionId: "q2_problem", optionIds: ["q2_video_voice"] },
      { questionId: "q7_type", optionIds: ["q7_voice"] }
    ],
    favoriteAi: ["ElevenLabs", "ChatGPT"],
    favoriteCategory: ["音声", "ナレーション", "動画"],
    topicsOfInterest: ["音声配信", "動画ナレーション"],
    resultType: "voice_narrator",
    mainAi: "ElevenLabs",
    relatedAis: ["ChatGPT", "Pictory", "Canva"],
    source: "referral",
    deviceType: "mobile",
    isCompleted: true,
    ctaClicked: true,
    shareClicked: true
  },
  {
    id: "res_008",
    sessionId: "sess_008",
    createdAt: "2026-06-02T09:30:00+09:00",
    experienceLevel: "advanced",
    answers: [
      { questionId: "q1_goal", optionIds: ["q1_unknown"] },
      { questionId: "q3_usage", optionIds: ["q3_team", "q3_creation"] },
      { questionId: "q6_result_need", optionIds: ["q6_combination", "q6_monetize"] }
    ],
    favoriteAi: ["Claude", "Codex", "Canva"],
    favoriteCategory: ["創作", "実装", "収益化"],
    topicsOfInterest: ["AI分担", "コミュニティ", "マッチング"],
    resultType: "creative_explorer",
    mainAi: "Claude",
    relatedAis: ["ChatGPT", "Canva", "Runway"],
    source: "direct",
    deviceType: "desktop",
    isCompleted: true,
    ctaClicked: false,
    shareClicked: false
  }
];
