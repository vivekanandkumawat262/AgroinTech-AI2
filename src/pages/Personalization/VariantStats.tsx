import VariantCard
from "@/components/cards/VariantCard";

export default function VariantStats(){

return(

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-4
gap-6
">

<VariantCard
count={12540}
segments={12}
languages={18}
products={32}
/>

<VariantCard
count={8250}
segments={8}
languages={10}
products={18}
/>

<VariantCard
count={15220}
segments={15}
languages={22}
products={41}
/>

<VariantCard
count={9340}
segments={9}
languages={12}
products={24}
/>

</div>

);

}