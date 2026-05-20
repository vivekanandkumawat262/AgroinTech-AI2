import {
Send,
Users,
MessageCircle,
Phone
} from "lucide-react";

export default function FarmerActions(){

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-5
">

<h2 className="
font-bold
text-lg
">

Quick Actions

</h2>

<div className="
grid
grid-cols-2
gap-4
">

<div className="
rounded-xl
bg-green-50
p-5
text-center
">

<Users
className="
mx-auto
text-green-700
"
/>

<p className="mt-2">

Segment

</p>

</div>

<div className="
rounded-xl
bg-yellow-50
p-5
text-center
">

<Send
className="
mx-auto
text-yellow-700
"
/>

<p className="mt-2">

Campaign

</p>

</div>

<div className="
rounded-xl
bg-blue-50
p-5
text-center
">

<MessageCircle
className="
mx-auto
text-blue-700
"
/>

<p className="mt-2">

WhatsApp

</p>

</div>

<div className="
rounded-xl
bg-orange-50
p-5
text-center
">

<Phone
className="
mx-auto
text-orange-700
"
/>

<p className="mt-2">

Voice

</p>

</div>

</div>

</div>

);

}