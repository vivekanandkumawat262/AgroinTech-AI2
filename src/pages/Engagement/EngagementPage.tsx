import PageContainer from "@/components/layout/PageContainer";

import PredictionCards from "./PredictionCards";
import RegionHeatMap from "./RegionHeatMap";
import ProbabilityCharts from "./ProbabilityCharts";

export default function EngagementPage(){

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Engagement Prediction Engine

</h1>

<p className="
text-muted-foreground
mt-2
">

Predict campaign performance, farmer response rates and regional engagement using AI.

</p>

</div>

<PredictionCards/>

<ProbabilityCharts/>

<RegionHeatMap/>

</div>

</PageContainer>

);

}