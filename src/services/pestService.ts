import { api } from "./api";

export async function getPests(){

return api.pests();

}

export async function getHighRiskPests(){

const pests=
await getPests();

return pests.filter(
(p:any)=>

p.riskLevel==="High"

);

}

export async function getPestsByCrop(
crop:string
){

const pests=
await getPests();

return pests.filter(
(p:any)=>

p.crop
.toLowerCase()

===

crop
.toLowerCase()

);

}