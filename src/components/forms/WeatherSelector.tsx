import AppSelect from "../ui/select";

const weather=[
"Humid",
"Dry",
"Rainy",
"Cloudy",
"Hot"
];

export default function WeatherSelector({
value,
onChange
}:any){

return(

<div className="space-y-2">

<label>
Weather
</label>

<AppSelect
items={weather}
value={value}
onChange={onChange}
/>

</div>

);

}