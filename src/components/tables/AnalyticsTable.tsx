import {
Table,
TableHead,
TableRow,
TableCell
} from "../ui/table";

interface Analytics{
campaign:string;
openRate:number;
ctr:number;
reply:number;
conversion:number;
}

interface Props{
data:Analytics[];
}

export default function AnalyticsTable({
data
}:Props){

return(

<div className="
rounded-2xl
border
overflow-hidden
">

<Table>

<TableHead>

<TableRow>

<TableCell>Campaign</TableCell>
<TableCell>Open Rate</TableCell>
<TableCell>CTR</TableCell>
<TableCell>Reply</TableCell>
<TableCell>Conversion</TableCell>

</TableRow>

</TableHead>

<tbody>

{
data.map((item,index)=>(

<TableRow key={index}>

<TableCell>

{item.campaign}

</TableCell>

<TableCell>

{item.openRate}%

</TableCell>

<TableCell>

{item.ctr}%

</TableCell>

<TableCell>

{item.reply}%

</TableCell>

<TableCell>

{item.conversion}%

</TableCell>

</TableRow>

))
}

</tbody>

</Table>

</div>

);

}