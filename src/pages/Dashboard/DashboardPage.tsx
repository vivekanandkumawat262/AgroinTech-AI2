import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";

import EngagementTrendChart from "@/components/charts/EngagementTrendChart";
import RegionPerformanceChart from "@/components/charts/RegionPerformanceChart";
import ChannelUsageChart from "@/components/charts/ChannelUsageChart";
import CampaignSuccessChart from "@/components/charts/CampaignSuccessChart";

import AnalyticsSummary from "@/components/analytics/AnalyticsSummary";

import PageContainer from "@/components/layout/PageContainer";

export default function DashboardPage(){

return(

<PageContainer>

<div className="space-y-8">

<DashboardHeader/>

<DashboardStats/>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
">

<div className="
bg-card
border
rounded-2xl
p-6
">

<h2 className="
font-bold
text-lg
mb-4
">

Engagement Trend

</h2>

<EngagementTrendChart/>

</div>

<div className="
bg-card
border
rounded-2xl
p-6
">

<h2 className="
font-bold
text-lg
mb-4
">

Region Performance

</h2>

<RegionPerformanceChart/>

</div>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
">

<div className="
bg-card
border
rounded-2xl
p-6
">

<h2 className="
font-bold
text-lg
mb-4
">

Channel Usage

</h2>

<ChannelUsageChart/>

</div>

<div className="
bg-card
border
rounded-2xl
p-6
">

<h2 className="
font-bold
text-lg
mb-4
">

Campaign Success

</h2>

<CampaignSuccessChart/>

</div>

</div>

<AnalyticsSummary
openRate={91}
ctr={74}
replyRate={58}
conversion={42}
/>

</div>

</PageContainer>

);

}