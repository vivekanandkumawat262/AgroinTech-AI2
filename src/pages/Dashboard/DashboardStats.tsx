import {
Users,
Megaphone,
Layers3,
TrendingUp
} from "lucide-react";

import StatsCard from "@/components/cards/StatsCard";

export default function DashboardStats(){

const stats=[

{
title:"Total Farmers",
value:"52,481",
icon:Users,
color:"bg-green-600"
},

{
title:"Active Campaigns",
value:124,
icon:Megaphone,
color:"bg-yellow-500"
},

{
title:"Generated Variants",
value:"12,450",
icon:Layers3,
color:"bg-emerald-700"
},

{
title:"Predicted Engagement",
value:"84%",
icon:TrendingUp,
color:"bg-orange-500"
}

];

return(

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

{
stats.map((item,index)=>(

<StatsCard
key={index}
title={item.title}
value={item.value}
icon={item.icon}
color={item.color}
/>

))
}

</div>

);

}