import {
TrendingUp
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
value:number;
change?:number;
}

export default function ConversionCard({
value,
change=3
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

Conversion Rate

</p>

<h2 className="
text-3xl
font-bold
text-purple-600
">

{value}%

</h2>

<p className="
text-xs
text-purple-500
mt-2
">

+{change}% improvement

</p>

</div>

<div className="
w-14
h-14
rounded-xl
bg-purple-100
flex
items-center
justify-center
">

<TrendingUp
className="
text-purple-600
"
/>

</div>

</Card>

);

}