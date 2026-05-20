import OpenRateCard from "./OpenRateCard";
import CTRCard from "./CTRCard";
import ReplyRateCard from "./ReplyRateCard";
import ConversionCard from "./ConversionCard";

interface Props{
openRate?:number;
ctr?:number;
replyRate?:number;
conversion?:number;
}

export default function AnalyticsSummary({

openRate=91,
ctr=74,
replyRate=58,
conversion=42

}:Props){

return(

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

<OpenRateCard
value={openRate}
/>

<CTRCard
value={ctr}
/>

<ReplyRateCard
value={replyRate}
/>

<ConversionCard
value={conversion}
/>

</div>

);

}