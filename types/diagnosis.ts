export type ScoreJson = {
  types?: Record<string, number>;
  tools?: Record<string, number>;
};

export type DiagnosisAnswerInput = {
  questionKey: string;
  answerKey: string;
  scoreJson: ScoreJson;
};

export type DiagnosisQuestion = {
  questionKey: string;
  questionText: string;
  answers: {
    answerKey: string;
    answerText: string;
    scoreJson: ScoreJson;
  }[];
};

export type DiagnosisResult = {
  resultType: string;
  typeScores: Record<string, number>;
  toolScores: Record<string, number>;
  recommendedTools: string[];
};
