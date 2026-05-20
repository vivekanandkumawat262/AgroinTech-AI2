import { api } from "./api";

export async function getPredictions():Promise<any[]>{

return await api.predictions() as any[];

}

export async function getTopRegions(){

const predictions=
await getPredictions();

return predictions.sort(

(a:any,b:any)=>

b.performance

-

a.performance

);

}

export async function getAverageCTR(){

const predictions=
await getPredictions();

const total=
predictions.reduce(

(sum:any,item:any)=>

sum+
item.ctrPrediction,

0

);

return Math.round(
total/
predictions.length
);

}