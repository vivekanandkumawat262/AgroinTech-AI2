import PageContainer from "@/components/layout/PageContainer";

import CampaignBuilder from "./CampaignBuilder";
import PreviewTabs from "./PreviewTabs";
import GeneratorPanel from "./GeneratorPanel";

export default function CampaignStudioPage(){

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Campaign Studio

</h1>

<p className="
text-muted-foreground
mt-2
">

Create AI campaigns for farmers using crop intelligence, weather insights and pest alerts.

</p>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-[420px_1fr]
gap-8
">

<div className="space-y-6">

<CampaignBuilder/>

<GeneratorPanel/>

</div>

<PreviewTabs/>

</div>

</div>

</PageContainer>

);

}