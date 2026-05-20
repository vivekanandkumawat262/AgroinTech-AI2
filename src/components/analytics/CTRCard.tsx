import {
MousePointerClick
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
value:number;
change?:number;
}

export default function CTRCard({
value,
change=5
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

CTR Prediction

</p>

<h2 className="
text-3xl
font-bold
text-blue-600
">

{value}%

</h2>

<p className="
text-xs
text-blue-500
mt-2
">

+{change}% growth

</p>

</div>

<div className="
w-14
h-14
rounded-xl
bg-blue-100
flex
items-center
justify-center
">

<MousePointerClick
className="
text-blue-600
"
/>

</div>

</Card>

);

}