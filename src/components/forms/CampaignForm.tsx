import { useState } from "react";

import CropSelector from "./CropSelector";
import RegionSelector from "./RegionSelector";
import WeatherSelector from "./WeatherSelector";
import PestSelector from "./PestSelector";
import CropStageSelector from "./CropStageSelector";
import LanguageSelector from "./LanguageSelector";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CampaignForm(){

const [campaign,setCampaign]=useState("");

const [crop,setCrop]=useState("");

const [region,setRegion]=useState("");

const [weather,setWeather]=useState("");

const [pest,setPest]=useState("");

const [stage,setStage]=useState("");

const [language,setLanguage]=useState("");

function handleSubmit(){

console.log({
campaign,
crop,
region,
weather,
pest,
stage,
language
});

}

return(

<div className="
space-y-5
bg-card
p-6
rounded-2xl
border
">

<Input
placeholder="Campaign Name"
value={campaign}
onChange={(e)=>
setCampaign(
e.target.value
)
}
/>

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
className="w-full"
onClick={handleSubmit}
>

Generate Campaign

</Button>

</div>

);

}