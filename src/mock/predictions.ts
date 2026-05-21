// src/mock/predictions.ts

import type {
  EngagementPrediction
} from "@/types/predictions";

export const predictions:
EngagementPrediction[] = [

  {
    id: 1,

    region:
      "Maharashtra",

    crop:
      "Cotton",

    videoProbability:
      82,

    voiceProbability:
      64,

    smsProbability:
      58,

    ctrPrediction:
      76,

    performance:
      91,
  },

  {
    id: 2,

    region:
      "Punjab",

    crop:
      "Wheat",

    videoProbability:
      70,

    voiceProbability:
      61,

    smsProbability:
      67,

    ctrPrediction:
      69,

    performance:
      81,
  },

  {
    id: 3,

    region:
      "Tamil Nadu",

    crop:
      "Rice",

    videoProbability:
      88,

    voiceProbability:
      72,

    smsProbability:
      55,

    ctrPrediction:
      80,

    performance:
      94,
  },

];