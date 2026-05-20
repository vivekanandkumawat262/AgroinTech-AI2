import {
Table,
TableHead,
TableRow,
TableCell
} from "../ui/table";

interface Prediction{
region:string;
video:number;
voice:number;
sms:number;
ctr:number;
}

interface Props{
data:Prediction[];
}

export default function PredictionTable({
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

<TableCell>Region</TableCell>
<TableCell>Video</TableCell>
<TableCell>Voice</TableCell>
<TableCell>SMS</TableCell>
<TableCell>CTR</TableCell>

</TableRow>

</TableHead>

<tbody>

{
data.map((item,index)=>(

<TableRow key={index}>

<TableCell>

{item.region}

</TableCell>

<TableCell>

{item.video}%

</TableCell>

<TableCell>

{item.voice}%

</TableCell>

<TableCell>

{item.sms}%

</TableCell>

<TableCell>

{item.ctr}%

</TableCell>

</TableRow>

))
}

</tbody>

</Table>

</div>

);

}