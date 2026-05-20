import {
Users,
Globe,
Sprout,
Languages
} from "lucide-react";

import PersonalizationFilters
from "@/components/forms/PersonalizationFilters";

export default function Segmentation(){

const items=[

{
icon:Users,
label:"Farmer Segments",
value:"12"
},

{
icon:Globe,
label:"Regions",
value:"8"
},

{
icon:Languages,
label:"Languages",
value:"18"
},

{
icon:Sprout,
label:"Crop Types",
value:"5"
}

];

return(

<div className="
space-y-6
">

<PersonalizationFilters/>

<div className="
border
rounded-2xl
bg-card
p-6
space-y-5
">

<h2 className="
font-bold
text-lg
">

Segmentation Overview

</h2>

{
items.map(
(item,index)=>{

const Icon=item.icon;

return(

<div
key={index}
className="
flex
items-center
justify-between
rounded-xl
bg-muted
p-4
"
>

<div className="
flex
items-center
gap-3
">

<Icon
size={18}
className="
text-green-700
"
/>

<span>

{item.label}

</span>

</div>

<strong>

{item.value}

</strong>

</div>

);

})

}

</div>

</div>

);

}