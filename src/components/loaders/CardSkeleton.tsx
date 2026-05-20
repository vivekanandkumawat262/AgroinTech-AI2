import Skeleton from "../ui/skeleton";

export default function CardSkeleton(){

return(

<div className="
rounded-2xl
border
bg-card
p-6
space-y-4
animate-pulse
">

<Skeleton
className="
h-4
w-24
"
/>

<Skeleton
className="
h-10
w-32
"
/>

<div className="
flex
justify-between
items-center
pt-2
">

<Skeleton
className="
h-4
w-20
"
/>

<Skeleton
className="
h-12
w-12
rounded-xl
"
/>

</div>

</div>

);

}