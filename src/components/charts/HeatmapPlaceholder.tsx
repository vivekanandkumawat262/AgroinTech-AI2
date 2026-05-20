export default function HeatmapPlaceholder() {

const regions = [

{ region:"Maharashtra", score:92 },

{ region:"Punjab", score:74 },

{ region:"Tamil Nadu", score:88 },

{ region:"Karnataka", score:69 },

{ region:"Rajasthan", score:81 }

];

return(

<div className="
rounded-2xl
border
p-6
bg-white
shadow-sm
space-y-4
">

<h2 className="
text-xl
font-bold
">

Region Heatmap

</h2>

<div className="
space-y-3
">

{
regions.map((item)=>(

<div
key={item.region}
className="
space-y-1
"
>

<div className="
flex
justify-between
text-sm
">

<span>

{item.region}

</span>

<span>

{item.score}%

</span>

</div>

<div className="
w-full
h-3
rounded-full
bg-gray-200
overflow-hidden
">

<div

className="
h-full
bg-green-600
rounded-full
"

style={{
width:`${item.score}%`
}}

>

</div>

</div>

</div>

))
}

</div>

</div>

);

}