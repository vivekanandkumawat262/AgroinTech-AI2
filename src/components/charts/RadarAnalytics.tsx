import {
RadarChart,
Radar,
PolarGrid,
PolarAngleAxis,
ResponsiveContainer
} from "recharts";

const data=[
{subject:"CTR",score:80},
{subject:"Reply",score:72},
{subject:"Open",score:91},
{subject:"Voice",score:63},
{subject:"Video",score:84}
];

export default function RadarAnalytics(){

return(

<div className="h-[350px]">

<ResponsiveContainer>

<RadarChart data={data}>

<PolarGrid/>

<PolarAngleAxis dataKey="subject"/>

<Radar
dataKey="score"
fill="#16A34A"
fillOpacity={0.6}
/>

</RadarChart>

</ResponsiveContainer>

</div>

);

}