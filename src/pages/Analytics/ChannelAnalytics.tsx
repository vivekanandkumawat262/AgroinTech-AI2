import PieAnalytics
from "@/components/charts/PieAnalytics";

import ChannelUsageChart
from "@/components/charts/ChannelUsageChart";

export default function ChannelAnalytics(){

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-6
">

<h2 className="
text-xl
font-bold
">

Channel Analytics

</h2>

<div className="
space-y-8
">

<div>

<h3 className="
font-semibold
mb-4
">

Channel Distribution

</h3>

<ChannelUsageChart/>

</div>

<div>

<h3 className="
font-semibold
mb-4
">

Open / CTR / Reply Ratio

</h3>

<PieAnalytics/>

</div>

</div>

</div>

);

}