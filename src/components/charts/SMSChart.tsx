import {
BarChart,
Bar,
XAxis,
YAxis,
ResponsiveContainer
} from "recharts";

const data=[
{name:"SMS",value:52}
];

export default function SMSChart(){

return(

<div className="h-[250px]">

<ResponsiveContainer>

<BarChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Bar
dataKey="value"
fill="#FACC15"
/>

</BarChart>

</ResponsiveContainer>

</div>

);

}