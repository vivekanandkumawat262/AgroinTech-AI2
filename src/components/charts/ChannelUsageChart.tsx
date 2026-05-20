import {
PieChart,
Pie,
Tooltip,
ResponsiveContainer
} from "recharts";

const data=[
{name:"WhatsApp",value:60},
{name:"SMS",value:25},
{name:"Voice",value:15}
];

export default function ChannelUsageChart(){

return(

<div className="h-[320px]">

<ResponsiveContainer>

<PieChart>

<Pie
data={data}
dataKey="value"
outerRadius={100}
/>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

);

}