import AppSelect from "../ui/select";

const stages=[
"Seedling",
"Vegetative",
"Flowering",
"Maturity"
];

export default function CropStageSelector({
value,
onChange
}:any){

return(

<div className="space-y-2">

<label>
Crop Stage
</label>

<AppSelect
items={stages}
value={value}
onChange={onChange}
/>

</div>

);

}