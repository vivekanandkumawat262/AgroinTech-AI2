import {
Brain,
CheckCircle2
} from "lucide-react";

export default function AIExplanation(){

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
gap-3
">

<Brain
className="
text-green-700
"
/>

<h2 className="
text-xl
font-bold
">

AI Explanation

</h2>

</div>

<div className="
space-y-5
">

<div className="
flex
gap-3
items-start
">

<CheckCircle2
className="
text-green-600
mt-1
"
/>

<p>

Farmer uses a smartphone device, therefore WhatsApp is preferred.

</p>

</div>

<div className="
flex
gap-3
items-start
">

<CheckCircle2
className="
text-green-600
mt-1
"
/>

<p>

Morning delivery has historically produced the highest CTR in this region.

</p>

</div>

<div className="
flex
gap-3
items-start
">

<CheckCircle2
className="
text-green-600
mt-1
"
/>

<p>

Weather conditions and crop stage indicate urgent engagement.

</p>

</div>

<div className="
flex
gap-3
items-start
">

<CheckCircle2
className="
text-green-600
mt-1
"
/>

<p>

Predicted engagement confidence exceeds 90%.

</p>

</div>

</div>

</div>

);

}