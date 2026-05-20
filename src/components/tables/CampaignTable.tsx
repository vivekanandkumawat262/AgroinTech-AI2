import {
Table,
TableHead,
TableRow,
TableCell
} from "../ui/table";

interface Campaign{
id:number;
name:string;
crop:string;
region:string;
status:string;
variants:number;
ctr:number;
}

interface Props{
campaigns:Campaign[];
}

export default function CampaignTable({
campaigns
}:Props){

return(

<div className="
border
rounded-2xl
overflow-hidden
">

<Table>

<TableHead>

<TableRow>

<TableCell>ID</TableCell>
<TableCell>Campaign</TableCell>
<TableCell>Crop</TableCell>
<TableCell>Region</TableCell>
<TableCell>Status</TableCell>
<TableCell>Variants</TableCell>
<TableCell>CTR</TableCell>

</TableRow>

</TableHead>

<tbody>

{
campaigns.map(c=>(

<TableRow key={c.id}>

<TableCell>

{c.id}

</TableCell>

<TableCell>

{c.name}

</TableCell>

<TableCell>

{c.crop}

</TableCell>

<TableCell>

{c.region}

</TableCell>

<TableCell>

{c.status}

</TableCell>

<TableCell>

{c.variants}

</TableCell>

<TableCell>

{c.ctr}%

</TableCell>

</TableRow>

))
}

</tbody>

</Table>

</div>

);

}