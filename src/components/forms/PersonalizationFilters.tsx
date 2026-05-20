import { useState } from "react";

import CropSelector from "./CropSelector";
import RegionSelector from "./RegionSelector";
import LanguageSelector from "./LanguageSelector";

import { Button } from "../ui/button";

export default function PersonalizationFilters(){

const [crop,setCrop]=useState("");

const [region,setRegion]=useState("");

const [language,setLanguage]=useState("");

function applyFilters(){

console.log({
crop,
region,
language
});

}

return(

<div className="
space-y-5
border
rounded-2xl
p-5
bg-card
">

<h2 className="
font-bold
text-lg
">

Farmer Filters

</h2>

<CropSelector
value={crop}
onChange={setCrop}
/>

<RegionSelector
value={region}
onChange={setRegion}
/>

<LanguageSelector
value={language}
onChange={setLanguage}
/>

<Button
className="w-full"
onClick={applyFilters}
>

Apply Filters

</Button>

</div>

);

}