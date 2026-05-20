import {
Bell,
Sparkles,
Leaf
} from "lucide-react";

import NotificationBell from "@/components/notifications/NotificationBell";

export default function DashboardHeader(){

return(

<div className="
flex
flex-col
lg:flex-row
justify-between
gap-6
items-start
lg:items-center
">

<div className="space-y-3">

<div className="
inline-flex
items-center
gap-2
bg-green-100
text-green-700
px-4
py-2
rounded-full
">

<Leaf size={18}/>

AgriAI Intelligence

</div>

<h1 className="
text-4xl
font-bold
">

Farmer Campaign Dashboard

</h1>

<p className="
text-muted-foreground
max-w-2xl
">

Monitor campaigns, engagement prediction, AI content generation, region performance and farmer activity.

</p>

</div>

<div className="
flex
items-center
gap-4
">

<div className="
hidden
md:flex
items-center
gap-3
bg-yellow-100
text-yellow-700
px-4
py-3
rounded-xl
">

<Sparkles size={18}/>

AI Active

</div>

<NotificationBell/>

<div className="
w-12
h-12
rounded-full
bg-green-600
text-white
flex
items-center
justify-center
">

<Bell size={18}/>

</div>

</div>

</div>

);

}