import {
Table,
TableHead,
TableRow,
TableCell
} from "../ui/table";

import { Badge } from "../ui/badge";

interface Farmer {
id:number;
name:string;
crop:string;
region:string;
language:string;
device:string;
engagement:number;
}

interface Props{
farmers:Farmer[];
}

export default function FarmerTable({
farmers
}:Props){

return(

<div className="
rounded-2xl
border
overflow-hidden
bg-card
">

<Table>

<TableHead>

<TableRow>

<TableCell>ID</TableCell>
<TableCell>Name</TableCell>
<TableCell>Crop</TableCell>
<TableCell>Region</TableCell>
<TableCell>Language</TableCell>
<TableCell>Device</TableCell>
<TableCell>Score</TableCell>

</TableRow>

</TableHead>

<tbody>

{
farmers.map(farmer=>(

<TableRow key={farmer.id}>

<TableCell>
#{farmer.id}
</TableCell>

<TableCell>
{farmer.name}
</TableCell>

<TableCell>

<Badge>

{farmer.crop}

</Badge>

</TableCell>

<TableCell>
{farmer.region}
</TableCell>

<TableCell>
{farmer.language}
</TableCell>

<TableCell>
{farmer.device}
</TableCell>

<TableCell>

{farmer.engagement}%

</TableCell>

</TableRow>

))
}

</tbody>

</Table>

</div>

);

}