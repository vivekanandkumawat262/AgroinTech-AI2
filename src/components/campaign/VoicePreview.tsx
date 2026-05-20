import {
PhoneCall
} from "lucide-react";

export default function VoicePreview(){

return(

<div className="
border
rounded-2xl
bg-orange-50
p-6
space-y-4
">

<div className="
flex
items-center
gap-2
">

<PhoneCall
className="
text-orange-600
"
/>

<h2 className="
font-bold
">

Voice Script

</h2>

</div>

<div className="
bg-white
rounded-xl
p-4
leading-7
">

"नमस्कार किसान भाई,

आपकी कपास फसल में Pink Bollworm का खतरा है।

कृपया निरीक्षण करें और सुझाए गए उत्पाद का उपयोग करें।"

</div>

</div>

);

}