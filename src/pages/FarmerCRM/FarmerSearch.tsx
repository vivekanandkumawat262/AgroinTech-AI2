import SearchInput
from "@/components/forms/SearchInput";

interface Props{

value:string;

onChange:(value:string)=>void;

}

export default function FarmerSearch({

value,

onChange

}:Props){

return(

<div className="
w-full
lg:w-[360px]
">

<SearchInput
value={value}
onChange={onChange}
placeholder="
Search farmers, crop, region...
"
/>

</div>

);

}