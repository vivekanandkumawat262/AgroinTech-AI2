import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardLayout(){

return(

<div
className="
flex
min-h-screen
"
style={{
background:"var(--background)"
}}
>

<Sidebar/>

<div className="
flex-1
flex
flex-col
">

<Navbar/>

<main className="flex-1">

<Outlet/>

</main>

<Footer/>

</div>

</div>

);

}