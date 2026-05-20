import Skeleton from "../ui/skeleton";

interface Props{
rows?:number;
columns?:number;
}

export default function TableSkeleton({

rows=6,
columns=6

}:Props){

return(

<div className="
rounded-2xl
border
bg-card
overflow-hidden
">

<div className="
grid
border-b
bg-muted
p-4
gap-4
"
style={{
gridTemplateColumns:
`repeat(${columns},1fr)`
}}
>

{
Array.from({
length:columns
}).map((_,i)=>(

<Skeleton
key={i}
className="
h-5
w-full
"
/>

))

}

</div>

{
Array.from({
length:rows
}).map((_,row)=>(

<div
key={row}
className="
grid
gap-4
p-4
border-b
"
style={{
gridTemplateColumns:
`repeat(${columns},1fr)`
}}
>

{
Array.from({
length:columns
}).map((_,col)=>(

<Skeleton
key={col}
className="
h-4
w-full
"
/>

))

}

</div>

))
}

</div>

);

}