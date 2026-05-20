import {
Brain,
Radio,
BarChart3,
Layers3
} from "lucide-react";

const features=[

{
icon:Brain,
title:"Context AI",
desc:"Generate crop specific campaigns"
},

{
icon:Radio,
title:"Channel Optimizer",
desc:"WhatsApp, SMS and Voice"
},

{
icon:BarChart3,
title:"Engagement Prediction",
desc:"CTR and response forecasting"
},

{
icon:Layers3,
title:"Mass Personalization",
desc:"Thousands of campaign variants"
}

];

export default function FeatureSection(){

return(

<section className="
py-20
px-6
">

<div className="
max-w-7xl
mx-auto
">

<h2 className="
text-4xl
font-bold
text-center
mb-14
">

Platform Features

</h2>

<div className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-8
">

{
features.map((item,index)=>{

const Icon=item.icon;

return(

<div
key={index}
className="
bg-white
border
rounded-3xl
p-8
space-y-5
hover:shadow-lg
transition
"
>

<div className="
w-16
h-16
rounded-2xl
bg-green-100
flex
items-center
justify-center
">

<Icon
className="
text-green-700
"
/>

</div>

<h3 className="
font-bold
text-xl
">

{item.title}

</h3>

<p className="
text-muted-foreground
">

{item.desc}

</p>

</div>

);

})

}

</div>

</div>

</section>

);

}