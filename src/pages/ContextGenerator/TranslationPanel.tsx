import {
Languages
} from "lucide-react";

interface Props{

translation:string;

}

export default function TranslationPanel({
translation
}:Props){

return(

<div className="
bg-card
border
rounded-2xl
p-6
space-y-5
">

<div className="
flex
items-center
gap-3
">

<Languages
className="
text-green-600
"
/>

<h2 className="
text-xl
font-bold
">

Translation

</h2>

</div>

<div className="
rounded-xl
bg-muted
p-5
leading-7
">

{translation}

</div>

</div>

);

}