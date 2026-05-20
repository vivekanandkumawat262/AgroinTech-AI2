import PageContainer from "@/components/layout/PageContainer";

import AnalyticsSummary
from "@/components/analytics/AnalyticsSummary";

import PerformanceChart from "./PerformanceChart";
import ChannelAnalytics from "./ChannelAnalytics";
import TrendAnalytics from "./TrendAnalytics";

export default function AnalyticsPage(){

return(

<PageContainer>

<div className="space-y-8">

<div>

<h1 className="
text-4xl
font-bold
">

Campaign Analytics

</h1>

<p className="
text-muted-foreground
mt-2
">

Monitor campaign performance, engagement trends, conversions and channel efficiency.

</p>

</div>

<AnalyticsSummary
openRate={91}
ctr={74}
replyRate={58}
conversion={43}
/>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
">

<PerformanceChart/>

<ChannelAnalytics/>

</div>

<TrendAnalytics/>

</div>

</PageContainer>

);

}