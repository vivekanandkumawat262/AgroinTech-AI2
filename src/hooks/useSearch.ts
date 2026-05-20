import {
useMemo,
useState
} from "react";

export default function useSearch<T>(

data:T[],

fields:string[]

){

const [
search,
setSearch
]=useState("");

const filtered=
useMemo(()=>{

if(
!search
)
return data;

return data.filter(
(item:any)=>

fields.some(
field=>

String(
item[field]
)

.toLowerCase()

.includes(

search
.toLowerCase()

)

)

);

},[
data,
search,
fields
]);

return{

search,

setSearch,

filtered

};

}