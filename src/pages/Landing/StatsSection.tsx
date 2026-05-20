const stats=[

{
value:"50K+",
title:"Farmers"
},

{
value:"10K+",
title:"Campaigns"
},

{
value:"92%",
title:"Prediction Accuracy"
},

{
value:"18",
title:"Languages"
}

];

export default function StatsSection(){

return(

<section className="
py-20
px-6
">

<div className="
max-w-7xl
mx-auto
grid
grid-cols-2
lg:grid-cols-4
gap-8
">

{
stats.map((item,index)=>(

<div
key={index}
className="
bg-white
border
rounded-3xl
p-8
text-center
"
>

<h2 className="
text-5xl
font-bold
text-green-700
">

{item.value}

</h2>

<p className="
mt-3
text-muted-foreground
">

{item.title}

</p>

</div>

))
}

</div>

</section>

);

}