import {
Filter,
Sprout,
MapPin,
Smartphone
} from "lucide-react";

export default function FarmerFilters(){

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-5
">

<div className="
flex
items-center
gap-3
">

<Filter
className="
text-green-700
"
/>

<h2 className="
font-bold
text-lg
">

Filters

</h2>

</div>

<div className="
space-y-4
">

<div className="
rounded-xl
bg-muted
p-4
flex
items-center
gap-3
">

<Sprout
size={18}
/>

Cotton

</div>

<div className="
rounded-xl
bg-muted
p-4
flex
items-center
gap-3
">

<MapPin
size={18}
/>

Maharashtra

</div>

<div className="
rounded-xl
bg-muted
p-4
flex
items-center
gap-3
">

<Smartphone
size={18}
/>

Smartphone Users

</div>

</div>

</div>

);

}