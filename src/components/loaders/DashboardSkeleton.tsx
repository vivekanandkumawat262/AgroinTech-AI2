import CardSkeleton from "./CardSkeleton";
import ChartSkeleton from "./ChartSkeleton";
import TableSkeleton from "./TableSkeleton";

export default function DashboardSkeleton(){

return(

<div className="
space-y-8
animate-pulse
">

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

<CardSkeleton/>
<CardSkeleton/>
<CardSkeleton/>
<CardSkeleton/>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
">

<ChartSkeleton/>

<ChartSkeleton/>

</div>

<TableSkeleton
rows={5}
columns={6}
/>

</div>

);

}