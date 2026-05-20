import PageContainer from "@/components/layout/PageContainer";

import Recommendation from "./Recommendation";
import TimingCard from "./TimingCard";
import AIExplanation from "./AIExplanation";

export default function ChannelPage(){

const recommendation={

device:"Smartphone",

channel:"WhatsApp",

confidence:91,

time:"Morning 8:00 AM"

};

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Smart Channel Optimizer

</h1>

<p className="
text-muted-foreground
mt-2
">

AI selects the best communication channel and delivery time for each farmer segment.

</p>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-8
">

<Recommendation
device={recommendation.device}
channel={recommendation.channel}
confidence={recommendation.confidence}
/>

<TimingCard
time={recommendation.time}
confidence={recommendation.confidence}
/>

</div>

<AIExplanation/>

</div>

</PageContainer>

);

}