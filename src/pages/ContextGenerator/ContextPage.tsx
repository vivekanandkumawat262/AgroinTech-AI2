import { useState } from "react";

import ContextForm from "./ContextForm";
import OutputPanel from "./OutputPanel";
import TranslationPanel from "./TranslationPanel";

import PageContainer
from "@/components/layout/PageContainer";

export default function ContextPage(){

const [result,setResult]=useState({

message:
"नमस्ते किसान मित्र 🌱\n\nकपास फसल में Pink Bollworm का खतरा बढ़ रहा है।\n\nअनुशंसित उत्पाद का उपयोग करें।",

warning:
"High Pink Bollworm Risk",

product:
"Agri Protect Plus",

translation:
"Pink Bollworm risk increasing in cotton crop."

});

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Context Aware Generator

</h1>

<p className="
text-muted-foreground
mt-2
">

Generate AI marketing campaigns using crop intelligence.

</p>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-8
">

<ContextForm
onGenerate={setResult}
/>

<div className="
space-y-6
">

<OutputPanel
message={result.message}
warning={result.warning}
product={result.product}
/>

<TranslationPanel
translation={result.translation}
/>

</div>

</div>

</div>

</PageContainer>

);

}