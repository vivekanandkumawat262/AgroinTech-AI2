import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid
} from "recharts";

const data=[
{month:"Jan",engagement:45},
{month:"Feb",engagement:55},
{month:"Mar",engagement:68},
{month:"Apr",engagement:72},
{month:"May",engagement:81},
{month:"Jun",engagement:90}
];

export default function EngagementTrendChart(){

return(

<div className="h-[350px]">

<ResponsiveContainer width="100%" height="100%">

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="engagement"
stroke="#16A34A"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

);

}