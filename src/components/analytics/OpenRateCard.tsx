import {
MailOpen
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
value:number;
change?:number;
}

export default function OpenRateCard({
value,
change=8
}:Props){

return(

<Card className="
flex
justify-between
items-center
">

<div>

<p className="
text-sm
text-muted-foreground
">

Open Rate

</p>

<h2 className="
text-3xl
font-bold
text-green-700
">

{value}%

</h2>

<p className="
text-xs
text-green-600
mt-2
">

+{change}% this week

</p>

</div>

<div className="
w-14
h-14
rounded-xl
bg-green-100
flex
items-center
justify-center
">

<MailOpen
className="
text-green-700
"
/>

</div>

</Card>

);

}