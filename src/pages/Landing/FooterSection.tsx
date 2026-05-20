import {
Leaf,
Globe,
Mail,
Phone
} from "lucide-react";

export default function FooterSection(){

return(

<footer className="
bg-green-950
text-white
py-14
px-6
mt-20
">

<div className="
max-w-7xl
mx-auto
grid
lg:grid-cols-3
gap-10
">

<div className="space-y-4">

<div className="
flex
items-center
gap-3
">

<Leaf/>

<h2 className="
text-2xl
font-bold
">

AgriAI

</h2>

</div>

<p className="
text-green-100
">

AI powered farmer engagement and campaign intelligence platform.

</p>

</div>

<div>

<h3 className="
font-bold
mb-4
">

Navigation

</h3>

<ul className="
space-y-2
text-green-100
">

<li>Dashboard</li>

<li>Campaign Studio</li>

<li>Analytics</li>

<li>Personalization</li>

</ul>

</div>

<div>

<h3 className="
font-bold
mb-4
">

Follow

</h3>

<div className="
flex
gap-4
">

<Globe/>

<Mail/>

<Phone/>

</div>

</div>

</div>

<div className="
text-center
text-green-200
mt-10
pt-8
border-t
border-green-800
">

© 2026 AgriAI Campaign Intelligence Platform

</div>

</footer>

);

}