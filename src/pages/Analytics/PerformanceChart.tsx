import BarAnalytics
from "@/components/charts/BarAnalytics";

import RadarAnalytics
from "@/components/charts/RadarAnalytics";

export default function PerformanceChart(){

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-6
">

<h2 className="
text-xl
font-bold
">

Campaign Performance

</h2>

<div className="
grid
grid-cols-1
gap-6
">

<div>

<h3 className="
font-semibold
mb-3
">

Performance Metrics

</h3>

<BarAnalytics/>

</div>

<div>

<h3 className="
font-semibold
mb-3
">

AI Performance Radar

</h3>

<RadarAnalytics/>

</div>

</div>

</div>

);

}