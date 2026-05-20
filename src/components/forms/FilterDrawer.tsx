import {
X
} from "lucide-react";

interface Props{
open:boolean;
onClose:()=>void;
children:any;
}

export default function FilterDrawer({
open,
onClose,
children
}:Props){

if(!open)
return null;

return(

<div className="
fixed
top-0
right-0
w-80
h-screen
bg-background
border-l
shadow-xl
z-50
p-6
">

<div className="
flex
justify-between
mb-6
">

<h2 className="
font-bold
text-lg
">

Filters

</h2>

<button
onClick={onClose}
>

<X/>

</button>

</div>

{children}

</div>

);

}