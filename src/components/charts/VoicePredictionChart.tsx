import {
BarChart,
Bar,
XAxis,
YAxis,
ResponsiveContainer
} from "recharts";

const data=[
{name:"Voice",value:63}
];

export default function VoicePredictionChart(){

return(

<div className="h-[250px]">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Bar
dataKey="value"
fill="#F97316"
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}