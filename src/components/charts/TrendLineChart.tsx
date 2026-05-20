import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

const data=[
{day:"Mon",value:50},
{day:"Tue",value:55},
{day:"Wed",value:61},
{day:"Thu",value:73},
{day:"Fri",value:79},
{day:"Sat",value:82},
{day:"Sun",value:88}
];

export default function TrendLineChart(){

return(

<div className="h-[320px]">

<ResponsiveContainer>

<LineChart data={data}>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="value"
stroke="#22C55E"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

);

}