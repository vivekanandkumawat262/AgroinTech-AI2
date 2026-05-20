import AppSelect from "../ui/select";

const pests=[
"Pink Bollworm",
"Stem Borer",
"Aphids",
"Armyworm",
"Leaf Blight"
];

export default function PestSelector({
value,
onChange
}:any){

return(

<div className="space-y-2">

<label>
Pest Threat
</label>

<AppSelect
items={pests}
value={value}
onChange={onChange}
/>

</div>

);

}