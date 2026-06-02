export type ExperienceLevelId = "beginner" | "intermediate" | "advanced";

export type ExperienceLevel = {
  id: ExperienceLevelId;
  title: string;
  description: string;
  detail: string;
  boxName: string;
  icon: string;
  visual: {
    shape: string;
    size: string;
    mainColor: string;
    subColor: string;
    accentColor: string;
    decoration: string[];
    animation: string;
  };
  resultTone: {
    explanationDepth: "easy" | "standard" | "deep";
    showWorkflow: boolean;
    showPromptExamples: boolean;
    showToolCombination: boolean;
  };
};

export const experienceLevels: ExperienceLevel[] = [
  {
    id: "beginner",
    title: "はじめてに近い",
    description: "何を聞いたらいいかわからない人向けに、まず頼みやすい使い方から出します。",
    detail: "AIを少し触ったことはあるけれど、まだうまく使えていない人向けです。文章作成、相談、アイデア出し、調べものなど、最初に使いやすいAI相棒を提案します。",
    boxName: "はじまりの玉手箱",
    icon: "small-key",
    visual: {
      shape: "small-rounded-box",
      size: "small",
      mainColor: "soft-white",
      subColor: "pale-gold",
      accentColor: "light-blue",
      decoration: ["thin-gold-line", "small-light-particles", "soft-rounded-lid"],
      animation: "soft-float-and-gentle-glow"
    },
    resultTone: {
      explanationDepth: "easy",
      showWorkflow: false,
      showPromptExamples: true,
      showToolCombination: false
    }
  },
  {
    id: "intermediate",
    title: "少し使っている",
    description: "ChatGPTなどを触ったことがある人向けに、用途別の使い分けを出します。",
    detail: "ChatGPTやGemini、Claudeなどを使ったことがあり、次に何をどう使い分ければいいかを知りたい人向けです。文章、調査、画像、資料、SNS、仕事効率化など、目的別のAI相棒を提案します。",
    boxName: "ひろがりの玉手箱",
    icon: "light-key",
    visual: {
      shape: "standard-balanced-box",
      size: "medium",
      mainColor: "deep-indigo",
      subColor: "gold",
      accentColor: "soft-purple-light",
      decoration: ["gold-line", "small-emblem", "slightly-open-lid", "glow-from-inside"],
      animation: "lift-and-medium-glow"
    },
    resultTone: {
      explanationDepth: "standard",
      showWorkflow: true,
      showPromptExamples: true,
      showToolCombination: true
    }
  },
  {
    id: "advanced",
    title: "もっと深く知りたい",
    description: "設計、資料整理、実装、DB化など、AIを分担させる使い方まで出します。",
    detail: "AIを単体で使うだけではなく、複数のAIを役割分担させたい人向けです。企画、設計、実装、資料整理、データベース化、発信導線、収益化まで含めて、AIの組み合わせ方を提案します。",
    boxName: "探究の玉手箱",
    icon: "gold-key",
    visual: {
      shape: "layered-heavy-box",
      size: "large",
      mainColor: "dark-indigo",
      subColor: "deep-purple",
      accentColor: "rich-gold",
      decoration: ["gold-edge", "geometric-pattern", "hidden-drawer-lines", "subtle-circuit-wa-pattern", "deep-inner-light"],
      animation: "rich-gold-glow-and-deep-open"
    },
    resultTone: {
      explanationDepth: "deep",
      showWorkflow: true,
      showPromptExamples: true,
      showToolCombination: true
    }
  }
];
