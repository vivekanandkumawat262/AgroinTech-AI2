import {
Search
} from "lucide-react";

interface Props{
value:string;
onChange:(value:string)=>void;
placeholder?:string;
}

export default function SearchInput({
value,
onChange,
placeholder="Search..."
}:Props){

return(

<div className="
flex
items-center
gap-3
border
rounded-xl
px-4
py-3
bg-background
">

<Search size={18}/>

<input
value={value}
placeholder={placeholder}
onChange={(e)=>
onChange(
e.target.value
)
}
className="
bg-transparent
outline-none
w-full
"
/>

</div>

);

}