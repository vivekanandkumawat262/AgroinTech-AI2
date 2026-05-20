import {
AlertTriangle,
RefreshCcw
} from "lucide-react";

interface Props{

title?:string;

message?:string;

retry?:()=>void;

}

export default function ErrorState({

title="Something went wrong",

message=
"Unable to load data. Please try again.",

retry

}:Props){

return(

<div className="
border
rounded-2xl
bg-card
p-10
text-center
space-y-5
">

<div className="
mx-auto
w-20
h-20
rounded-full
bg-red-100
flex
items-center
justify-center
">

<AlertTriangle
size={36}
className="
text-red-600
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
max-w-lg
mx-auto
">

{message}

</p>

{
retry && (

<button
onClick={retry}
className="
mx-auto
flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-red-600
text-white
hover:bg-red-700
"
>

<RefreshCcw size={18}/>

Retry

</button>

)

}

</div>

);

}