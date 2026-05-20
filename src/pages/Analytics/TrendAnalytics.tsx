import TrendLineChart
from "@/components/charts/TrendLineChart";

import EngagementTrendChart
from "@/components/charts/EngagementTrendChart";

export default function TrendAnalytics(){

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-8
">

<div>

<h2 className="
text-xl
font-bold
">

Farmer Engagement Trends

</h2>

<p className="
text-muted-foreground
mt-2
">

Track weekly engagement, response rates and campaign growth.

</p>

</div>

<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-8
">

<div>

<h3 className="
font-semibold
mb-4
">

Weekly Trend

</h3>

<TrendLineChart/>

</div>

<div>

<h3 className="
font-semibold
mb-4
">

Engagement Growth

</h3>

<EngagementTrendChart/>

</div>

</div>

<div className="
grid
grid-cols-4
gap-4
">

<div className="
bg-green-50
rounded-xl
p-5
text-center
">

<h3 className="
text-3xl
font-bold
text-green-700
">

91%

</h3>

<p>

Open Rate

</p>

</div>

<div className="
bg-blue-50
rounded-xl
p-5
text-center
">

<h3 className="
text-3xl
font-bold
text-blue-700
">

74%

</h3>

<p>

CTR

</p>

</div>

<div className="
bg-yellow-50
rounded-xl
p-5
text-center
">

<h3 className="
text-3xl
font-bold
text-yellow-700
">

58%

</h3>

<p>

Reply

</p>

</div>

<div className="
bg-orange-50
rounded-xl
p-5
text-center
">

<h3 className="
text-3xl
font-bold
text-orange-700
">

43%

</h3>

<p>

Conversion

</p>

</div>

</div>

</div>

);

}