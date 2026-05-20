import { useState } from "react";

import PageContainer
from "@/components/layout/PageContainer";

import FarmerSearch from "./FarmerSearch";
import FarmerFilters from "./FarmerFilters";
import FarmerActions from "./FarmerActions";

import FarmerTable
from "@/components/tables/FarmerTable";

import ExportButton
from "@/components/common/ExportButton";

export default function FarmerCRMPage(){

const [search,setSearch]=useState("");

const farmers=[

{
id:1,
name:"Ramesh Kumar",
crop:"Cotton",
region:"Maharashtra",
language:"Hindi",
device:"Smartphone",
engagement:82
},

{
id:2,
name:"Ajay Singh",
crop:"Wheat",
region:"Punjab",
language:"Punjabi",
device:"Feature Phone",
engagement:68
},

{
id:3,
name:"Mohan Patel",
crop:"Rice",
region:"Tamil Nadu",
language:"Tamil",
device:"Smartphone",
engagement:91
},

{
id:4,
name:"Deepak Sharma",
crop:"Sugarcane",
region:"UP",
language:"Hindi",
device:"Feature Phone",
engagement:59
},

{
id:5,
name:"Kiran Rao",
crop:"Maize",
region:"Karnataka",
language:"Kannada",
device:"Smartphone",
engagement:76
}

];

const filtered=farmers.filter(
item=>

item.name
.toLowerCase()
.includes(
search.toLowerCase()
)

||

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

);

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Farmer CRM

</h1>

<p className="
text-muted-foreground
mt-2
">

Manage farmers, segments and engagement profiles.

</p>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-[320px_1fr]
gap-8
">

<div className="space-y-6">

<FarmerFilters/>

<FarmerActions/>

</div>

<div className="space-y-6">

<div className="
flex
flex-col
lg:flex-row
gap-4
justify-between
">

<FarmerSearch
value={search}
onChange={setSearch}
/>

<ExportButton
fileName="farmers"
data={filtered}
/>

</div>

<FarmerTable
farmers={filtered}
/>

</div>

</div>

</div>

</PageContainer>

);

}