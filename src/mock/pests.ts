// src/mock/pests.ts

import type { Pest } from "@/types/pests";

export const pests: Pest[] = [

  {
    id: 1,

    name: "Pink Bollworm",

    crop: "Cotton",

    region: "Maharashtra",

    riskLevel: "High",

    weather: "Humid",

    warning:
      "Severe crop damage risk",

    recommendedProduct:
      "Cotton Shield Pro",
  },

  {
    id: 2,

    name: "Stem Borer",

    crop: "Wheat",

    region: "Punjab",

    riskLevel: "Medium",

    weather: "Dry",

    warning:
      "Monitor crop stage",

    recommendedProduct:
      "Borer Guard",
  },

  {
    id: 3,

    name: "Leaf Blight",

    crop: "Rice",

    region: "Tamil Nadu",

    riskLevel: "High",

    weather: "Rainy",

    warning:
      "Immediate action required",

    recommendedProduct:
      "Rice Protect",
  },

];