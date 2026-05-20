import {
LayoutDashboard,
Brain,
Radio,
BarChart3,
Layers3,
Megaphone,
LineChart,
Users,
Settings
} from "lucide-react";

import { NavLink } from "react-router-dom";
import clsx from "clsx";

const items = [
{
title:"Dashboard",
icon:LayoutDashboard,
path:"/dashboard"
},
{
title:"Context Generator",
icon:Brain,
path:"/context-generator"
},
{
title:"Channel Optimizer",
icon:Radio,
path:"/channel-optimizer"
},
{
title:"Engagement",
icon:BarChart3,
path:"/engagement"
},
{
title:"Personalization",
icon:Layers3,
path:"/personalization"
},
{
title:"Campaign Studio",
icon:Megaphone,
path:"/campaign-studio"
},
{
title:"Analytics",
icon:LineChart,
path:"/analytics"
},
{
title:"Farmers",
icon:Users,
path:"/farmers"
},
{
title:"Settings",
icon:Settings,
path:"/settings"
}
];

export default function Sidebar() {

return (

<aside className="
hidden
lg:flex
w-72
bg-green-950
text-white
flex-col
border-r
border-green-800
">

<div className="p-6">

<h1 className="
text-3xl
font-bold
text-green-300
">
AgriAI
</h1>

<p className="text-sm text-green-100">
Campaign Intelligence
</p>

</div>

<nav className="
flex-1
px-4
space-y-2
">

{
items.map(item=>{

const Icon=item.icon;

return(

<NavLink
key={item.path}
to={item.path}
className={({isActive})=>

clsx(
"flex items-center gap-3 rounded-xl px-4 py-3 transition",
isActive
? "bg-green-700"
: "hover:bg-green-800"
)

}
>

<Icon size={20}/>

<span>
{item.title}
</span>

</NavLink>

);

})

}

</nav>

</aside>

);

}