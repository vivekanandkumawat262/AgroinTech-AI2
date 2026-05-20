import {
MessageCircle,
Phone,
MessagesSquare
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
channel:string;
confidence:number;
timing:string;
}

export default function ChannelCard({
channel,
confidence,
timing
}:Props){

const iconMap:any={

WhatsApp:<MessageCircle/>,

SMS:<MessagesSquare/>,

Voice:<Phone/>

};

return(

<Card>

<div className="
flex
justify-between
items-center
">

<h3>

{channel}

</h3>

{iconMap[channel]}

</div>

<div className="
space-y-2
mt-4
">

<p>

Best Time:
{timing}

</p>

<p>

Confidence:
{confidence}%

</p>

</div>

</Card>

);

}