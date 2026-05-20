import {
X,
Bell,
AlertTriangle,
CheckCircle2,
Info
} from "lucide-react";

interface Notification{

id:number;

title:string;

message:string;

time:string;

type:string;

}

interface Props{

open:boolean;

onClose:()=>void;

notifications:Notification[];

}

export default function NotificationPanel({

open,

onClose,

notifications

}:Props){

if(!open)
return null;

function getIcon(type:string){

switch(type){

case "success":

return(
<CheckCircle2
className="
text-green-600
"
/>
);

case "warning":

return(
<AlertTriangle
className="
text-yellow-600
"
/>
);

default:

return(
<Info
className="
text-blue-600
"
/>
);

}

}

return(

<div className="
absolute
right-0
top-14
w-[360px]
bg-background
border
rounded-2xl
shadow-xl
z-50
overflow-hidden
">

<div className="
flex
justify-between
items-center
p-5
border-b
">

<div className="
flex
items-center
gap-2
">

<Bell/>

<h2 className="
font-bold
">

Notifications

</h2>

</div>

<button
onClick={onClose}
>

<X size={18}/>

</button>

</div>

<div className="
max-h-[400px]
overflow-y-auto
">

{
notifications.map(
item=>(

<div
key={item.id}
className="
p-4
border-b
hover:bg-muted
transition
"
>

<div className="
flex
gap-3
">

{getIcon(item.type)}

<div className="
flex-1
space-y-1
">

<h3 className="
font-medium
">

{item.title}

</h3>

<p className="
text-sm
text-muted-foreground
">

{item.message}

</p>

<p className="
text-xs
text-muted-foreground
">

{item.time}

</p>

</div>

</div>

</div>

)
)

}

</div>

</div>

);

}