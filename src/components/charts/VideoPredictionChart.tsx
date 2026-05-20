import {
BarChart,
Bar,
ResponsiveContainer,
XAxis,
YAxis
} from "recharts";

const data=[
{name:"Video",value:81}
];

export default function VideoPredictionChart(){

return(

<div className="h-[250px]">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Bar
dataKey="value"
fill="#16A34A"
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}