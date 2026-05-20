import { useState } from "react";

import CropSelector
from "@/components/forms/CropSelector";

import RegionSelector
from "@/components/forms/RegionSelector";

import WeatherSelector
from "@/components/forms/WeatherSelector";

import PestSelector
from "@/components/forms/PestSelector";

import CropStageSelector
from "@/components/forms/CropStageSelector";

import LanguageSelector
from "@/components/forms/LanguageSelector";

import { Button }
from "@/components/ui/button";

interface Props{

onGenerate:(data:any)=>void;

}

export default function ContextForm({
onGenerate
}:Props){

const [crop,setCrop]=useState("");

const [region,setRegion]=useState("");

const [weather,setWeather]=useState("");

const [pest,setPest]=useState("");

const [stage,setStage]=useState("");

const [language,setLanguage]=useState("");

function generate(){

onGenerate({

message:
`नमस्ते किसान मित्र 🌾

फसल:
${crop}

क्षेत्र:
${region}

मौसम:
${weather}

कीट:
${pest}

अनुशंसित उत्पाद प्रयोग करें।`,

warning:
`${pest} Threat Detected`,

product:
`${crop} Shield Max`,

translation:
`${pest} risk increasing in ${crop}`

});

}

return(

<div className="
bg-card
border
rounded-2xl
p-6
space-y-5
">

<h2 className="
text-xl
font-bold
">

Campaign Inputs

</h2>

<CropSelector
value={crop}
onChange={setCrop}
/>

<RegionSelector
value={region}
onChange={setRegion}
/>

<WeatherSelector
value={weather}
onChange={setWeather}
/>

<PestSelector
value={pest}
onChange={setPest}
/>

<CropStageSelector
value={stage}
onChange={setStage}
/>

<LanguageSelector
value={language}
onChange={setLanguage}
/>

<Button
className="
w-full
"
onClick={generate}
>

Generate AI Message

</Button>

</div>

);

}