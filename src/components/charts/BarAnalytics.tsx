import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

const data=[
{name:"Open",value:91},
{name:"CTR",value:74},
{name:"Reply",value:58},
{name:"Conversion",value:42}
];

export default function BarAnalytics(){

return(

<div className="h-[320px]">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="value"
fill="#15803D"
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}