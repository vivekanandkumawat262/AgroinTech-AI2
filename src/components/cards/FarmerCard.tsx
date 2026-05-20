import {
MapPin,
Smartphone,
Sprout
} from "lucide-react";

import { Card } from "../ui/card";

interface FarmerProps{
name:string;
crop:string;
region:string;
device:string;
language:string;
}

export default function FarmerCard({
name,
crop,
region,
device,
language
}:FarmerProps){

return(

<Card className="
space-y-4
hover:shadow-lg
transition
">

<div>

<h3 className="
text-lg
font-bold
">

{name}

</h3>

<p className="
text-sm
text-muted-foreground
">

{language}

</p>

</div>

<div className="
space-y-2
text-sm
">

<div className="
flex items-center gap-2
">

<Sprout size={16}/>

{crop}

</div>

<div className="
flex items-center gap-2
">

<MapPin size={16}/>

{region}

</div>

<div className="
flex items-center gap-2
">

<Smartphone size={16}/>

{device}

</div>

</div>

</Card>

);

}