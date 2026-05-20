import { useEffect } from "react";

export default function useTheme(){

function setTheme(
theme:"light"|"dark"
){

document.documentElement.classList.remove(
"light",
"dark"
);

document.documentElement.classList.add(
theme
);

localStorage.setItem(
"theme",
theme
);

}

function toggleTheme(){

const current=
localStorage.getItem(
"theme"
) || "light";

const next=

current==="light"
?

"dark"

:

"light";

setTheme(next);

}

useEffect(()=>{

const saved=
localStorage.getItem(
"theme"
) || "light";

setTheme(
saved as any
);

},[]);

return{

toggleTheme,

setTheme

};

}