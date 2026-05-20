import {
Bell,
Search,
User
}
from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";
import MobileSidebar from "./MobileSidebar";

export default function Navbar(){

return(

<header className="
h-16
border-b
bg-background
flex
items-center
justify-between
px-6
sticky
top-0
z-50
">

<div className="
flex
items-center
gap-4
">

<MobileSidebar/>

<div className="
hidden
md:flex
items-center
gap-2
border
rounded-xl
px-4
py-2
w-96
">

<Search size={18}/>

<input
placeholder="Search farmers..."
className="
bg-transparent
outline-none
w-full
"
/>

</div>

</div>

<div className="
flex
items-center
gap-4
">

<ThemeSwitcher/>

<button>

<Bell/>

</button>

<div className="
w-10
h-10
rounded-full
bg-green-600
flex
items-center
justify-center
text-white
">

<User size={18}/>

</div>

</div>

</header>

);

}