import PageContainer from "@/components/layout/PageContainer";

import Segmentation from "./Segmentation";
import VariantStats from "./VariantStats";
import PersonalizationGrid from "./PersonalizationGrid";

export default function PersonalizationPage(){

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Massive Personalization Engine

</h1>

<p className="
text-muted-foreground
mt-2
">

Generate campaign variants automatically for different crops, regions, languages and farmer groups.

</p>

</div>

<VariantStats/>

<div className="
grid
grid-cols-1
xl:grid-cols-[320px_1fr]
gap-8
">

<Segmentation/>

<PersonalizationGrid/>

</div>

</div>

</PageContainer>

);

}