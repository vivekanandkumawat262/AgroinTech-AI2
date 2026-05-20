import { motion } from "framer-motion";

import {
ArrowRight,
Leaf,
Sparkles
} from "lucide-react";

import { Link } from "react-router-dom";

export default function HeroSection(){

return(

<section className="
px-6
py-24
lg:py-32
">

<div className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-12
items-center
">

<div className="space-y-8">

<div className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-green-100
text-green-700
">

<Leaf size={18}/>

AI Agriculture Platform

</div>

<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
text-5xl
lg:text-7xl
font-bold
leading-tight
"

>

AI Farmer Engagement Platform

</motion.h1>

<p className="
text-lg
text-muted-foreground
max-w-2xl
">

Hyper-personalized campaign generation for agriculture companies using AI powered crop intelligence, weather insights, pest alerts and engagement predictions.

</p>

<div className="
flex
gap-4
flex-wrap
">

<Link
to="/dashboard"
className="
px-6
py-4
rounded-xl
bg-green-600
text-white
flex
items-center
gap-2
hover:bg-green-700
"
>

Try Demo

<ArrowRight size={18}/>

</Link>

<Link
to="/dashboard"
className="
px-6
py-4
rounded-xl
border
hover:bg-muted
"
>

View Dashboard

</Link>

</div>

</div>

<div className="
bg-white
rounded-3xl
shadow-xl
border
p-8
space-y-6
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

AI Campaign Preview

</h2>

</div>

<div className="
rounded-2xl
bg-green-50
p-5
space-y-3
">

<p>

🌱 Crop:
Cotton

</p>

<p>

📍 Region:
Maharashtra

</p>

<p>

🐛 Pest:
Pink Bollworm

</p>

<p>

🌧 Weather:
Humid

</p>

</div>

<div className="
rounded-2xl
bg-green-600
text-white
p-5
">

नमस्ते किसान मित्र 🌾

गुलाबी इल्ली का खतरा बढ़ रहा है।

अनुशंसित उत्पाद का उपयोग करें।

</div>

</div>

</div>

</section>

);

}