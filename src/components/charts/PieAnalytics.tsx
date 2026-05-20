import {
PieChart,
Pie,
ResponsiveContainer
} from "recharts";

const data=[
{name:"Open",value:45},
{name:"CTR",value:30},
{name:"Reply",value:25}
];

export default function PieAnalytics(){

return(

<div className="h-[300px]">

<ResponsiveContainer>

<PieChart>

<Pie
data={data}
dataKey="value"
outerRadius={90}
/>

</PieChart>

</ResponsiveContainer>

</div>

);

}