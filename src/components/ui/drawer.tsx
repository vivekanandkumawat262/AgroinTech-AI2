import { ReactNode } from "react";

export default function Drawer({
open,
children
}:{
open:boolean;
children:ReactNode;
}){

if(!open) return null;

return(

<div className="
fixed right-0 top-0
w-80
h-screen
bg-background
border-l
p-6
z-50
">

{children}

</div>

);

}