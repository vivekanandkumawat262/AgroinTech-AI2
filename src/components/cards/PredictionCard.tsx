import {
Brain
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
label:string;
probability:number;
}

export default function PredictionCard({
label,
probability
}:Props){

return(

<Card>

<div className="
flex
justify-between
">

<span>

{label}

</span>

<Brain/>

</div>

<div className="
text-4xl
font-bold
mt-6
text-green-600
">

{probability}%

</div>

<p className="
text-sm
text-muted-foreground
mt-2
">

AI Predicted Score

</p>

</Card>

);

}