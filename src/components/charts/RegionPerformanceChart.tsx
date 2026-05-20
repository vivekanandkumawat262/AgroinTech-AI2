import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip
} from "recharts";

const data=[
{name:"MH",score:88},
{name:"PB",score:72},
{name:"TN",score:91},
{name:"UP",score:69},
{name:"KA",score:81}
];

export default function RegionPerformanceChart(){

return(

<div className="h-[320px]">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="score"
fill="#15803D"
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}