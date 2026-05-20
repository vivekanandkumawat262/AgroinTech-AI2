export default function HeatmapPlaceholder(){

const rows=[1,2,3,4,5];

return(

<div className="
grid
grid-cols-5
gap-2
p-6
">

{
rows.map(r=>

rows.map(c=>(

<div
key={`${r}-${c}`}
className="
h-12
rounded
bg-green-200
"
/>

))

}

</div>

);

}