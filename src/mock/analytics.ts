// src/mock/analytics.ts

import type {
  AnalyticsMetric,
  ChannelAnalytics,
  RegionAnalytics,
} from "@/types/analytics";

export const analyticsSummary: AnalyticsMetric = {
  openRate: 91,

  ctr: 74,

  replyRate: 58,

  conversion: 43,

  engagement: 87,
};

export const channelAnalytics: ChannelAnalytics[] = [
  {
    channel: "WhatsApp",

    usage: 62,

    performance: 91,
  },

  {
    channel: "SMS",

    usage: 24,

    performance: 74,
  },

  {
    channel: "Voice",

    usage: 14,

    performance: 65,
  },
];

export const regionAnalytics: RegionAnalytics[] = [
  {
    region: "Maharashtra",

    score: 91,

    farmers: 12000,

    campaigns: 82,

    ctr: 76,
  },

  {
    region: "Punjab",

    score: 80,

    farmers: 9500,

    campaigns: 65,

    ctr: 69,
  },

  {
    region: "Tamil Nadu",

    score: 94,

    farmers: 8700,

    campaigns: 58,

    ctr: 81,
  },
];