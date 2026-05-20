import {
Layers3
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
count:number;
segments:number;
languages:number;
products:number;
}

export default function VariantCard({
count,
segments,
languages,
products
}:Props){

return(

<Card>

<div className="
flex
justify-between
">

<h2>

Campaign Variants

</h2>

<Layers3/>

</div>

<div className="
mt-6
space-y-3
">

<p>

Generated:
{count}

</p>

<p>

Segments:
{segments}

</p>

<p>

Languages:
{languages}

</p>

<p>

Products:
{products}

</p>

</div>

</Card>

);

}