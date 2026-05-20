import {
RadialBarChart,
RadialBar,
ResponsiveContainer
} from "recharts";

const data=[{ctr:74}];

export default function CTRChart(){

return(

<div className="h-[300px]">

<ResponsiveContainer>

<RadialBarChart
innerRadius="40%"
outerRadius="90%"
data={data}
>

<RadialBar
dataKey="ctr"
fill="#16A34A"
/>

</RadialBarChart>

</ResponsiveContainer>

</div>

);

}