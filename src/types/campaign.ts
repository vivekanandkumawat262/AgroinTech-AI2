export type CampaignStatus=

| "Draft"
| "Running"
| "Active"
| "Paused"
| "Completed";

export type CampaignChannel=

| "WhatsApp"
| "SMS"
| "Voice";

export interface Campaign{

id:number;

campaignName:string;

crop:string;

region:string;

language:string;

weather:string;

pest:string;

status:CampaignStatus;

channel:CampaignChannel;

variants:number;

ctr:number;

openRate:number;

replyRate:number;

conversion:number;

createdAt:string;

updatedAt:string;

}

export interface CampaignVariant{

id:number;

campaignId:number;

language:string;

messageType:string;

content:string;

recommendation:string;

}

export interface CampaignMetrics{

openRate:number;

ctr:number;

replyRate:number;

conversion:number;

engagement:number;

}