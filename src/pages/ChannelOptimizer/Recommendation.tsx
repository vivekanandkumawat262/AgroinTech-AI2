import {
MessageCircle,
Phone,
MessagesSquare,
Smartphone
} from "lucide-react";

interface Props{

device:string;

channel:string;

confidence:number;

}

export default function Recommendation({

device,

channel,

confidence

}:Props){

function icon(){

switch(channel){

case "WhatsApp":

return(
<MessageCircle
size={36}
className="
text-green-600
"
/>
);

case "SMS":

return(
<MessagesSquare
size={36}
className="
text-yellow-600
"
/>
);

default:

return(
<Phone
size={36}
className="
text-orange-600
"
/>
);

}

}

return(

<div className="
border
rounded-2xl
bg-card
p-8
space-y-6
">

<div className="
flex
items-center
justify-between
">

<h2 className="
text-xl
font-bold
">

Recommended Channel

</h2>

{icon()}

</div>

<div className="
rounded-2xl
bg-green-50
p-6
space-y-4
">

<h1 className="
text-4xl
font-bold
text-green-700
">

{channel}

</h1>

<div className="
flex
items-center
gap-3
">

<Smartphone size={18}/>

Device:

{device}

</div>

<p>

Confidence:

<strong>

{confidence}%

</strong>

</p>

</div>

</div>

);

}