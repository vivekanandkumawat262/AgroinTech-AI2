import {
BarChart3
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
title:string;
score:number;
}

export default function EngagementCard({
title,
score
}:Props){

return(

<Card>

<div className="
flex
justify-between
">

<h3>

{title}

</h3>

<BarChart3/>

</div>

<div className="
mt-4
">

<div className="
w-full
bg-muted
h-3
rounded-full
">

<div
className="
bg-green-600
h-3
rounded-full
"
style={{
width:`${score}%`
}}
/>

</div>

<p className="
mt-2
font-semibold
">

{score}%

</p>

</div>

</Card>

);

}