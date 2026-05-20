import {
ChevronRight
}
from "lucide-react";

interface Props{
items:string[];
}

export default function Breadcrumb({
items
}:Props){

return(

<div className="
flex
items-center
gap-2
text-sm
text-muted-foreground
">

{
items.map(
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
items.length-1 &&

<ChevronRight
size={14}
/>

}

</div>

)
)

}

</div>

);

}