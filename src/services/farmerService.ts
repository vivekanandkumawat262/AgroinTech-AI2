import { api } from "./api";

export interface Farmer{

id:number;

name:string;

crop:string;

region:string;

language:string;

device:string;

cropStage:string;

weather:string;

pestThreat:string;

engagementScore:number;

preferredChannel:string;

}

export async function getFarmers():Promise<any[]>{

return await api.farmers() as any[];

}

export async function getFarmerByCrop(
crop:string
){

const farmers=
await getFarmers();

return farmers.filter(
(f:any)=>

f.crop
.toLowerCase()

===

crop
.toLowerCase()

);

}

export async function getSmartphoneUsers(){

const farmers=
await getFarmers();

return farmers.filter(
(f:any)=>

f.device==="Smartphone"

);

}