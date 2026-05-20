import AppSelect from "../ui/select";

const languages=[
"Hindi",
"English",
"Punjabi",
"Marathi",
"Tamil",
"Kannada",
"Telugu"
];

export default function LanguageSelector({
value,
onChange
}:any){

return(

<div className="space-y-2">

<label>
Language
</label>

<AppSelect
items={languages}
value={value}
onChange={onChange}
/>

</div>

);

}