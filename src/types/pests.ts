export type RiskLevel=

| "Low"
| "Medium"
| "High";

export interface Pest{

id:number;

name:string;

crop:string;

region:string;

riskLevel:RiskLevel;

weather:string;

warning:string;

recommendedProduct:string;

}

export interface PestPrediction{

pest:string;

probability:number;

severity:RiskLevel;

affectedRegions:string[];

}