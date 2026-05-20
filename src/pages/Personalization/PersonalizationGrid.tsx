import { useState } from "react";

import SearchInput
from "@/components/forms/SearchInput";

import PersonalizationTable
from "@/components/tables/PersonalizationTable";

import ExportButton
from "@/components/common/ExportButton";

export default function PersonalizationGrid(){

const [search,setSearch]=useState("");

const rows=[

{
id:1,
crop:"Cotton",
region:"Maharashtra",
language:"Hindi",
messageType:"WhatsApp",
recommendation:"Pest Shield"
},

{
id:2,
crop:"Rice",
region:"Tamil Nadu",
language:"Tamil",
messageType:"SMS",
recommendation:"Rice Guard"
},

{
id:3,
crop:"Wheat",
region:"Punjab",
language:"Punjabi",
messageType:"Voice",
recommendation:"Yield Boost"
},

{
id:4,
crop:"Maize",
region:"Karnataka",
language:"Kannada",
messageType:"WhatsApp",
recommendation:"Leaf Protect"
},

{
id:5,
crop:"Sugarcane",
region:"UP",
language:"Hindi",
messageType:"SMS",
recommendation:"Growth Max"
}

];

const filtered=rows.filter(
item=>

item.crop
.toLowerCase()
.includes(
search.toLowerCase()
)

||

item.region
.toLowerCase()
.includes(
search.toLowerCase()
)

||

item.language
.toLowerCase()
.includes(
search.toLowerCase()
)

);

return(

<div className="
space-y-6
">

<div className="
flex
flex-col
lg:flex-row
gap-4
justify-between
">

<div className="
w-full
lg:w-[350px]
">

<SearchInput
value={search}
onChange={setSearch}
placeholder="
Search crop, region, language...
"
/>

</div>

<ExportButton
fileName="personalization"
data={filtered}
/>

</div>

<div className="
border
rounded-2xl
bg-card
p-6
space-y-5
">

<h2 className="
text-xl
font-bold
">

Generated Variants

</h2>

<PersonalizationTable
rows={filtered}
/>

</div>

</div>

);

}