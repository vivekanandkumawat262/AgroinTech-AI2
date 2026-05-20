import {
Moon,
Sun
}
from "lucide-react";

import { useEffect,useState } from "react";

export default function ThemeSwitcher(){

const [dark,setDark]=useState(false);

useEffect(()=>{

const html=document.documentElement;

if(dark){

html.classList.add("dark");

}else{

html.classList.remove("dark");

}

},[dark]);

return(

<button
onClick={()=>
setDark(!dark)
}
className="
border
rounded-xl
p-2
"
>

{
dark
?

<Sun size={18}/>

:

<Moon size={18}/>

}

</button>

);

}