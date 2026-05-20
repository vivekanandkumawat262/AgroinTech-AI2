import VideoPredictionChart
from "@/components/charts/VideoPredictionChart";

import VoicePredictionChart
from "@/components/charts/VoicePredictionChart";

import SMSChart
from "@/components/charts/SMSChart";

import CTRChart
from "@/components/charts/CTRChart";

export default function ProbabilityCharts(){

return(

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
">

<div className="
border
rounded-2xl
bg-card
p-6
">

<h2 className="
font-bold
text-lg
mb-5
">

CTR Prediction

</h2>

<CTRChart/>

</div>

<div className="
border
rounded-2xl
bg-card
p-6
">

<h2 className="
font-bold
text-lg
mb-5
">

Video Probability

</h2>

<VideoPredictionChart/>

</div>

<div className="
border
rounded-2xl
bg-card
p-6
">

<h2 className="
font-bold
text-lg
mb-5
">

Voice Probability

</h2>

<VoicePredictionChart/>

</div>

<div className="
border
rounded-2xl
bg-card
p-6
">

<h2 className="
font-bold
text-lg
mb-5
">

SMS Engagement

</h2>

<SMSChart/>

</div>

</div>

);

}