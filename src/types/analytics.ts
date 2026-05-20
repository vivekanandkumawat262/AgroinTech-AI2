export interface AnalyticsMetric{

openRate:number;

ctr:number;

replyRate:number;

conversion:number;

engagement:number;

}

export interface ChannelAnalytics{

channel:string;

usage:number;

performance:number;

}

export interface RegionAnalytics{

region:string;

score:number;

farmers:number;

campaigns:number;

ctr:number;

}

export interface TrendPoint{

date:string;

value:number;

}

export interface CampaignAnalytics{

campaignId:number;

campaignName:string;

openRate:number;

ctr:number;

replyRate:number;

conversion:number;

status:string;

}