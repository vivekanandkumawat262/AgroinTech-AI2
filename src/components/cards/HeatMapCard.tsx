import { Card } from "../ui/card";

interface Props{
regions:{
name:string;
score:number;
}[];
}

export default function HeatMapCard({
regions
}:Props){

return(

<Card>

<h2 className="
font-bold
mb-6
">

Region Heatmap

</h2>

<div className="
grid
grid-cols-2
gap-4
">

{
regions.map(region=>(

<div
key={region.name}
className="
rounded-xl
p-4
bg-green-100
"
>

<h3>

{region.name}

</h3>

<p>

{region.score}%

</p>

</div>

))
}

</div>

</Card>

);

}