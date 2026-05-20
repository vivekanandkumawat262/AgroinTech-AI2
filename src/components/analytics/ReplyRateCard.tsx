import {
MessageSquareReply
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
value:number;
change?:number;
}

export default function ReplyRateCard({
value,
change=4
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

Reply Rate

</p>

<h2 className="
text-3xl
font-bold
text-yellow-600
">

{value}%

</h2>

<p className="
text-xs
text-yellow-500
mt-2
">

+{change}% engagement

</p>

</div>

<div className="
w-14
h-14
rounded-xl
bg-yellow-100
flex
items-center
justify-center
">

<MessageSquareReply
className="
text-yellow-600
"
/>

</div>

</Card>

);

}