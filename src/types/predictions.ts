export interface EngagementPrediction{

id:number;

region:string;

crop:string;

videoProbability:number;

voiceProbability:number;

smsProbability:number;

ctrPrediction:number;

performance:number;

}

export interface PredictionSummary{

video:number;

voice:number;

sms:number;

ctr:number;

confidence:number;

}

export interface RegionHeatMap{

region:string;

score:number;

color:string;

}