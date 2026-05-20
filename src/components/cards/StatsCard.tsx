import { Card } from "../ui/card";
import React from "react";

interface Props{

title:string;

value:number|string;

icon:React.ElementType;

color?:string;

}

export default function StatsCard({

title,

value,

icon:Icon,

color="bg-green-600"

}:Props){

return(

<Card
className="
flex
justify-between
items-center
p-6
"
>

<div>

<p className="
text-sm
text-gray-500
">

{title}

</p>

<h2 className="
text-3xl
font-bold
mt-2
">

{value}

</h2>

</div>

<div

className={`
w-14
h-14
rounded-xl
text-white
flex
items-center
justify-center
${color}
`}

>

<Icon size={24}/>

</div>

</Card>

);

}