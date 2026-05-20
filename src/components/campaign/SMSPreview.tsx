import {
MessagesSquare
} from "lucide-react";

export default function SMSPreview(){

return(

<div className="
border
rounded-2xl
p-6
bg-yellow-50
space-y-4
">

<div className="
flex
items-center
gap-2
">

<MessagesSquare
className="
text-yellow-600
"
/>

<h2 className="
font-bold
">

SMS Preview

</h2>

</div>

<div className="
bg-white
rounded-xl
p-4
">

Cotton Alert:

Pink Bollworm risk high.

Use pheromone traps.

Recommended spray available.

</div>

</div>

);

}