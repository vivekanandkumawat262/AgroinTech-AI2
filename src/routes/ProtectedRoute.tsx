import {

Navigate

} from "react-router-dom";

interface Props{

children:React.ReactNode;

}

export default function ProtectedRoute({

children

}:Props){

const isAuthenticated=true;

/*
future:

const isAuthenticated=
localStorage.getItem(
"token"
);

*/

if(!isAuthenticated){

return(

<Navigate
to="/"
/>

);

}

return(

<>

{children}

</>

);

}