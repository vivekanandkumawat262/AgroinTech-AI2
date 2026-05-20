import {
Inbox
} from "lucide-react";

interface EmptyStateProps{

title?:string;

description?:string;

buttonText?:string;

onAction?:()=>void;

}

export default function EmptyState({

title="No Data Found",

description=
"There is currently no information available.",

buttonText,

onAction

}:EmptyStateProps){

return(

<div className="
flex
flex-col
items-center
justify-center
text-center
py-20
px-6
border
rounded-2xl
bg-card
space-y-5
">

<div className="
w-20
h-20
rounded-full
bg-green-100
flex
items-center
justify-center
">

<Inbox
size={36}
className="
text-green-700
"
/>

</div>

<h2 className="
text-2xl
font-bold
">

{title}

</h2>

<p className="
text-muted-foreground
max-w-md
">

{description}

</p>

{
buttonText && (

<button
onClick={onAction}
className="
px-5
py-3
rounded-xl
bg-green-600
text-white
hover:bg-green-700
transition
"
>

{buttonText}

</button>

)

}

</div>

);

}