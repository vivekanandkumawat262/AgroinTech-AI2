import { useState } from "react";

import {
Input
} from "@/components/ui/input";

import {
Button
} from "@/components/ui/button";

export default function CampaignBuilder(){

const [campaign,setCampaign]=useState("");

const [region,setRegion]=useState("");

const [crop,setCrop]=useState("");

const [language,setLanguage]=useState("");

const [pest,setPest]=useState("");

const [weather,setWeather]=useState("");

function generate(){

console.log({
campaign,
region,
crop,
language,
pest,
weather
});

}

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-5
">

<h2 className="
text-xl
font-bold
">

Campaign Builder

</h2>

<Input
placeholder="Campaign Name"
value={campaign}
onChange={(e)=>
setCampaign(
e.target.value
)
}
/>

<Input
placeholder="Target Region"
value={region}
onChange={(e)=>
setRegion(
e.target.value
)
}
/>

<Input
placeholder="Crop"
value={crop}
onChange={(e)=>
setCrop(
e.target.value
)
}
/>

<Input
placeholder="Language"
value={language}
onChange={(e)=>
setLanguage(
e.target.value
)
}
/>

<Input
placeholder="Pest"
value={pest}
onChange={(e)=>
setPest(
e.target.value
)
}
/>

<Input
placeholder="Weather"
value={weather}
onChange={(e)=>
setWeather(
e.target.value
)
}
/>

<Button
className="w-full"
onClick={generate}
>

Generate Campaign

</Button>

</div>

);

}