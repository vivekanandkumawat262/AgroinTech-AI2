import {

BrowserRouter,

Routes,

Route

} from "react-router-dom";

import DashboardLayout
from "@/components/layout/DashboardLayout";

import ProtectedRoute
from "./ProtectedRoute";

import { routes }
from "./routeConfig";

export default function AppRoutes(){

return(

<BrowserRouter>

<Routes>

{
routes.map(route=>{

const Component=
route.element;

if(
route.path==="/"
){

return(

<Route

key={route.path}

path={route.path}

element={
<Component/>
}

/>

);

}

return(

<Route

key={route.path}

element={

<ProtectedRoute>

<DashboardLayout/>

</ProtectedRoute>

}

>

<Route

path={route.path}

element={
<Component/>
}

/>

</Route>

);

})

}

<Route

path="*"

element={

<div className="
h-screen
flex
items-center
justify-center
text-3xl
font-bold
">

404 Page Not Found

</div>

}

/>

</Routes>

</BrowserRouter>

);

}