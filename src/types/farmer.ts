export type DeviceType=

| "Smartphone"
| "Feature Phone";

export type PreferredChannel=

| "WhatsApp"
| "SMS"
| "Voice";

export interface Farmer{

id:number;

name:string;

crop:string;

region:string;

language:string;

device:DeviceType;

cropStage:string;

weather:string;

pestThreat:string;

engagementScore:number;

preferredChannel:PreferredChannel;

phone?:string;

village?:string;

lastCampaign?:string;

active:boolean;

createdAt:string;

updatedAt:string;

}

export interface FarmerSegment{

segmentId:number;

segmentName:string;

farmerCount:number;

crop:string;

region:string;

language:string;

}

export interface FarmerFilters{

crop?:string;

region?:string;

language?:string;

device?:DeviceType;

search?:string;

}