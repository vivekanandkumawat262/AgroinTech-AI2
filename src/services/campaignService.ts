import { api } from "./api";

export async function getCampaigns():Promise<any[]>{

return await api.campaigns() as any[];

}

export async function getActiveCampaigns(){

const campaigns=
await getCampaigns();

return campaigns.filter(
(c)=>

c.status==="Active"

||

c.status==="Running"

);

}

export async function getCampaignCTR(){

const campaigns=
await getCampaigns();

return campaigns.map(
(c)=>({

name:c.campaignName,

ctr:c.ctr

})

);

}