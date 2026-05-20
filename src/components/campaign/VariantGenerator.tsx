import { useState } from "react";

import {
Layers3,
Sparkles
} from "lucide-react";

import { Button } from "../ui/button";

export default function VariantGenerator(){

const [variants,setVariants]=useState(0);

function generateVariants(){

const total=
Math.floor(
Math.random()*5000
)+1000;

setVariants(total);

}

return(

<div className="
border
rounded-2xl
p-6
space-y-5
bg-card
">

<div className="
flex
justify-between
">

<h2 className="
font-bold
">

Variant Generator

</h2>

<Layers3/>

</div>

<div className="
text-center
">

<h1 className="
text-5xl
font-bold
text-green-600
">

{variants}

</h1>

<p className="
text-muted-foreground
">

Generated Variants

</p>

</div>

<Button
className="
w-full
gap-2
"
onClick={
generateVariants
}
>

<Sparkles size={18}/>

Generate Variants

</Button>

</div>

);

}