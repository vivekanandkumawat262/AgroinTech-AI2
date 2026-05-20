import { useState } from "react";

import WhatsAppPreview
from "@/components/campaign/WhatsAppPreview";

import SMSPreview
from "@/components/campaign/SMSPreview";

import VoicePreview
from "@/components/campaign/VoicePreview";

export default function PreviewTabs(){

const [tab,setTab]=useState(
"whatsapp"
);

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-6
">

<div className="
flex
gap-3
flex-wrap
">

<button
onClick={()=>
setTab(
"whatsapp"
)
}
className={`
px-5
py-3
rounded-xl
${
tab==="whatsapp"
?
"bg-green-600 text-white"
:
"border"
}
`}
>

WhatsApp

</button>

<button
onClick={()=>
setTab(
"sms"
)
}
className={`
px-5
py-3
rounded-xl
${
tab==="sms"
?
"bg-yellow-500 text-white"
:
"border"
}
`}
>

SMS

</button>

<button
onClick={()=>
setTab(
"voice"
)
}
className={`
px-5
py-3
rounded-xl
${
tab==="voice"
?
"bg-orange-500 text-white"
:
"border"
}
`}
>

Voice

</button>

</div>

{
tab==="whatsapp"
&&

<WhatsAppPreview/>

}

{
tab==="sms"
&&

<SMSPreview/>

}

{
tab==="voice"
&&

<VoicePreview/>

}

</div>

);

}