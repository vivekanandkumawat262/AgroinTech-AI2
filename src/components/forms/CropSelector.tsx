import AppSelect from "../ui/select";

const crops=[
"Cotton",
"Wheat",
"Rice",
"Sugarcane",
"Maize"
];

interface Props{
value:string;
onChange:(value:string)=>void;
}

export default function CropSelector({
value,
onChange
}:Props){

return(

<div className="space-y-2">

<label className="text-sm font-medium">
Crop Type
</label>

<AppSelect
items={crops}
value={value}
onChange={onChange}
/>

</div>

);

}