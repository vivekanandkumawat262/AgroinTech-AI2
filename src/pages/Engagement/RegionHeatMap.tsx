import HeatMapCard
from "@/components/cards/HeatMapCard";

export default function RegionHeatMap(){

const regions=[

{
name:"Maharashtra",
score:91
},

{
name:"Punjab",
score:76
},

{
name:"Tamil Nadu",
score:88
},

{
name:"Karnataka",
score:81
},

{
name:"UP",
score:69
},

{
name:"Rajasthan",
score:73
}

];

return(

<div className="space-y-5">

<h2 className="
text-2xl
font-bold
">

Region Performance Heatmap

</h2>

<HeatMapCard
regions={regions}
/>

</div>

);

}