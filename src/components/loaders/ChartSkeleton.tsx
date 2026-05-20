import Skeleton from "../ui/skeleton";

export default function ChartSkeleton(){

return(

<div className="
rounded-2xl
border
bg-card
p-6
space-y-6
">

<div className="
flex
justify-between
">

<Skeleton
className="
h-6
w-40
"
/>

<Skeleton
className="
h-6
w-20
"
/>

</div>

<div className="
space-y-3
">

<Skeleton
className="
h-10
w-full
"
/>

<Skeleton
className="
h-10
w-full
"
/>

<Skeleton
className="
h-10
w-full
"
/>

<Skeleton
className="
h-10
w-full
"
/>

<Skeleton
className="
h-[180px]
w-full
rounded-2xl
"
/>

</div>

</div>

);

}