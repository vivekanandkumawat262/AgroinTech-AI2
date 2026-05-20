export interface PersonalizationVariant{

id:number;

crop:string;

region:string;

language:string;

messageType:string;

recommendation:string;

channel:string;

content:string;

}

export interface VariantStats{

totalVariants:number;

farmerSegments:number;

languages:number;

products:number;

}

export interface PersonalizationFilter{

crop?:string;

region?:string;

language?:string;

messageType?:string;

channel?:string;

}

export interface SegmentDistribution{

segment:string;

count:number;

percentage:number;

}