import {
Sheet,
SheetContent,
SheetTrigger
}
from "@/components/ui/sheet";

import {
Menu
}
from "lucide-react";

import Sidebar from "./Sidebar";

export default function MobileSidebar(){

return(

<Sheet>

<SheetTrigger>

<Menu
className="
lg:hidden
cursor-pointer
"
/>

</SheetTrigger>

<SheetContent
side="left"
className="
w-72
p-0
bg-green-950
"
>

<Sidebar/>

</SheetContent>

</Sheet>

);

}