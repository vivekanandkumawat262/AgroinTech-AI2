import {
useMemo
} from "react";

interface Filters{

[key:string]:any;

}

export default function useFilters<T>(

data:T[],

filters:Filters

){

const filtered=
useMemo(()=>{

return data.filter(
(item:any)=>{

return Object.entries(
filters
).every(

([key,value])=>{

if(
!value
)
return true;

return String(
item[key]
)

.toLowerCase()

.includes(

String(
value
)

.toLowerCase()

);

}

);

}

);

},[
data,
filters
]);

return filtered;

}