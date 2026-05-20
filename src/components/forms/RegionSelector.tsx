import AppSelect from "../ui/select";

const regions=[
"Maharashtra",
"Punjab",
"Tamil Nadu",
"Karnataka",
"UP",
"Gujarat",
"Rajasthan"
];

export default function RegionSelector({
value,
onChange
}:any){

return(

<div className="space-y-2">

<label>
Region
</label>

<AppSelect
items={regions}
value={value}
onChange={onChange}
/>

</div>

);

}