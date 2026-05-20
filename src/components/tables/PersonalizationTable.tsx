import {
Table,
TableHead,
TableRow,
TableCell
} from "../ui/table";

interface Row{
id:number;
crop:string;
region:string;
language:string;
messageType:string;
recommendation:string;
}

interface Props{
rows:Row[];
}

export default function PersonalizationTable({
rows
}:Props){

return(

<div className="
border
rounded-2xl
overflow-hidden
bg-card
">

<Table>

<TableHead>

<TableRow>

<TableCell>Farmer ID</TableCell>
<TableCell>Crop</TableCell>
<TableCell>Region</TableCell>
<TableCell>Language</TableCell>
<TableCell>Message</TableCell>
<TableCell>Recommendation</TableCell>

</TableRow>

</TableHead>

<tbody>

{
rows.map(row=>(

<TableRow key={row.id}>

<TableCell>

{row.id}

</TableCell>

<TableCell>

{row.crop}

</TableCell>

<TableCell>

{row.region}

</TableCell>

<TableCell>

{row.language}

</TableCell>

<TableCell>

{row.messageType}

</TableCell>

<TableCell>

{row.recommendation}

</TableCell>

</TableRow>

))
}

</tbody>

</Table>

</div>

);

}