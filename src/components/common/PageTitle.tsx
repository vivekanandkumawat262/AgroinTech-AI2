import {
ChevronRight
} from "lucide-react";

interface Props{

title:string;

subtitle?:string;

breadcrumbs?:string[];

actions?:React.ReactNode;

}

export default function PageTitle({

title,

subtitle,

breadcrumbs=[],

actions

}:Props){

return(

<div className="
flex
flex-col
lg:flex-row
lg:items-center
lg:justify-between
gap-6
">

<div className="space-y-3">

{
breadcrumbs.length>0 && (

<div className="
flex
items-center
gap-2
text-sm
text-muted-foreground
flex-wrap
">

{
breadcrumbs.map(
(item,index)=>(
<div
key={index}
className="
flex
items-center
gap-2
"
>

<span>

{item}

</span>

{
index<
breadcrumbs.length-1 &&

<ChevronRight
size={14}
/>

}

</div>
)
}

</div>

)

}

<h1 className="
text-3xl
font-bold
">

{title}

</h1>

{
subtitle && (

<p className="
text-muted-foreground
max-w-2xl
">

{subtitle}

</p>

)

}

</div>

{
actions && (

<div>

{actions}

</div>

)

}

</div>

);

}