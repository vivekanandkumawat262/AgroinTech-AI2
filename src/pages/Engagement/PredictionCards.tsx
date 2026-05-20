import PredictionCard
from "@/components/cards/PredictionCard";

export default function PredictionCards(){

const predictions=[

{
label:"CTR Prediction",
probability:74
},

{
label:"Video Response",
probability:82
},

{
label:"Voice Response",
probability:63
},

{
label:"SMS Engagement",
probability:58
}

];

return(

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

{
predictions.map(
(item,index)=>(

<PredictionCard
key={index}
label={item.label}
probability={item.probability}
/>

)
)

}

</div>

);

}