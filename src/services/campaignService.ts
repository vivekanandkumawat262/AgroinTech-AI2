import { api } from "./api";

export async function getCampaigns(){

return api.campaigns();

}

export async function getActiveCampaigns(){

const campaigns=
await getCampaigns();

return campaigns.filter(
(c:any)=>

c.status==="Active"

||

c.status==="Running"

);

}

export async function getCampaignCTR(){

const campaigns=
await getCampaigns();

return campaigns.map(
(c:any)=>({

name:
c.campaignName,

ctr:
c.ctr

})

);

}