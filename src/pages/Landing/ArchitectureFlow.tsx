import {
Database,
Brain,
Send,
BarChart3
} from "lucide-react";

export default function ArchitectureFlow(){

return(

<section className="
py-20
px-6
bg-green-50
">

<div className="
max-w-6xl
mx-auto
">

<h2 className="
text-center
text-4xl
font-bold
mb-14
">

Architecture Flow

</h2>

<div className="
grid
md:grid-cols-4
gap-8
">

<div className="text-center">

<Database
size={48}
className="
mx-auto
text-green-700
"
/>

<h3 className="
mt-4
font-bold
">

Farmer Data

</h3>

</div>

<div className="text-center">

<Brain
size={48}
className="
mx-auto
text-green-700
"
/>

<h3 className="
mt-4
font-bold
">

AI Processing

</h3>

</div>

<div className="text-center">

<Send
size={48}
className="
mx-auto
text-green-700
"
/>

<h3 className="
mt-4
font-bold
">

Campaign Delivery

</h3>

</div>

<div className="text-center">

<BarChart3
size={48}
className="
mx-auto
text-green-700
"
/>

<h3 className="
mt-4
font-bold
">

Analytics

</h3>

</div>

</div>

</div>

</section>

);

}