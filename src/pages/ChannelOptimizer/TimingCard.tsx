import {
Clock3,
Sun,
CloudSun,
Moon
} from "lucide-react";

interface Props{

time:string;

confidence:number;

}

export default function TimingCard({

time,

confidence

}:Props){

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
font-bold
text-xl
">

Timing Recommendation

</h2>

<Clock3
className="
text-green-700
"
/>

</div>

<div className="
grid
grid-cols-3
gap-4
">

<div className="
bg-yellow-50
rounded-xl
p-4
text-center
">

<Sun
className="
mx-auto
text-yellow-600
"
/>

<p className="mt-2">

Morning

</p>

</div>

<div className="
bg-orange-50
rounded-xl
p-4
text-center
">

<CloudSun
className="
mx-auto
text-orange-600
"
/>

<p className="mt-2">

Afternoon

</p>

</div>

<div className="
bg-blue-50
rounded-xl
p-4
text-center
">

<Moon
className="
mx-auto
text-blue-600
"
/>

<p className="mt-2">

Evening

</p>

</div>

</div>

<div className="
rounded-xl
bg-green-50
p-5
">

<p>

Best Send Time:

</p>

<h3 className="
text-2xl
font-bold
text-green-700
">

{time}

</h3>

<p className="mt-2">

Confidence:

{confidence}%

</p>

</div>

</div>

);

}