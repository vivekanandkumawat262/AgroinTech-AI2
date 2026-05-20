import {
AreaChart,
Area,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";

const data=[
{week:"W1",success:50},
{week:"W2",success:60},
{week:"W3",success:70},
{week:"W4",success:86}
];

export default function CampaignSuccessChart(){

return(

<div className="h-[320px]">

<ResponsiveContainer>

<AreaChart data={data}>

<XAxis dataKey="week"/>

<YAxis/>

<Tooltip/>

<Area
dataKey="success"
stroke="#22C55E"
fill="#DCFCE7"
/>

</AreaChart>

</ResponsiveContainer>

</div>

);

}