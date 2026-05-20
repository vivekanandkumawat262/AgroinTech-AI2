import { useState } from "react";

import {
Bell,
Circle
} from "lucide-react";

import NotificationPanel from "./NotificationPanel";

export default function NotificationBell(){

const [open,setOpen]=useState(false);

const notifications=[
{
id:1,
title:"Campaign Generated",
message:"Cotton campaign created successfully",
time:"2 min ago",
type:"success"
},
{
id:2,
title:"High Pest Alert",
message:"Pink Bollworm detected",
time:"10 min ago",
type:"warning"
},
{
id:3,
title:"Analytics Updated",
message:"CTR increased by 8%",
time:"1 hour ago",
type:"info"
}
];

return(

<div className="relative">

<button
onClick={()=>
setOpen(!open)
}
className="
relative
rounded-xl
p-2
hover:bg-muted
transition
"
>

<Bell size={22}/>

<span className="
absolute
top-1
right-1
">

<Circle
size={8}
fill="#22C55E"
className="
text-green-500
"
/>

</span>

</button>

<NotificationPanel
open={open}
onClose={()=>
setOpen(false)
}
notifications={notifications}
/>

</div>

);

}