import {
Megaphone,
TrendingUp
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
campaign:string;
status:string;
variants:number;
ctr:number;
}

export default function CampaignCard({
campaign,
status,
variants,
ctr
}:Props){

return(

<Card>

<div className="
flex
justify-between
">

<Megaphone/>

<span className="
px-3
py-1
rounded-full
bg-green-100
text-green-700
text-xs
">

{status}

</span>

</div>

<h2 className="
font-bold
mt-4
">

{campaign}

</h2>

<div className="
mt-4
space-y-2
">

<p>

Variants:
{variants}

</p>

<p className="
flex items-center gap-2
">

<TrendingUp size={16}/>

CTR:
{ctr}%

</p>

</div>

</Card>

);

}