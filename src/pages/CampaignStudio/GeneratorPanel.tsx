import {
Sparkles,
Layers3,
Send,
TrendingUp
} from "lucide-react";

import VariantGenerator
from "@/components/campaign/VariantGenerator";

import CampaignToolbar
from "@/components/campaign/CampaignToolbar";

export default function GeneratorPanel(){

return(

<div className="
space-y-6
">

<div className="
border
rounded-2xl
bg-card
p-6
space-y-5
">

<div className="
flex
items-center
gap-3
">

<Sparkles
className="
text-yellow-500
"
/>

<h2 className="
font-bold
text-xl
">

AI Generator

</h2>

</div>

<div className="
grid
grid-cols-2
gap-4
">

<div className="
bg-green-50
rounded-xl
p-4
">

<Layers3
className="
text-green-700
"
/>

<p className="mt-2">

Variants

</p>

<strong>

12,540

</strong>

</div>

<div className="
bg-blue-50
rounded-xl
p-4
">

<Send
className="
text-blue-700
"
/>

<p className="mt-2">

Campaigns

</p>

<strong>

148

</strong>

</div>

<div className="
bg-orange-50
rounded-xl
p-4
">

<TrendingUp
className="
text-orange-700
"
/>

<p className="mt-2">

CTR

</p>

<strong>

74%

</strong>

</div>

<div className="
bg-yellow-50
rounded-xl
p-4
">

<Sparkles
className="
text-yellow-600
"
/>

<p className="mt-2">

AI Score

</p>

<strong>

91%

</strong>

</div>

</div>

</div>

<VariantGenerator/>

<CampaignToolbar/>

</div>

);

}