import {
Download,
Filter
}
from "lucide-react";

export default function TopActions(){

return(

<div className="
flex
gap-3
flex-wrap
">

<button className="
px-4
py-2
rounded-xl
bg-green-600
text-white
">

Export

</button>

<button className="
px-4
py-2
rounded-xl
border
flex
items-center
gap-2
">

<Filter size={16}/>

Filters

</button>

<button className="
px-4
py-2
rounded-xl
border
flex
items-center
gap-2
">

<Download size={16}/>

Download

</button>

</div>

);

}