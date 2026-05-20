import {
Copy,
Download,
AlertTriangle,
Package
} from "lucide-react";

import { toast } from "sonner";

interface Props{

message:string;

warning:string;

product:string;

}

export default function OutputPanel({

message,

warning,

product

}:Props){

function copyMessage(){

navigator.clipboard.writeText(
message
);

toast.success(
"Copied"
);

}

return(

<div className="
border
rounded-2xl
bg-card
p-6
space-y-6
">

<h2 className="
text-xl
font-bold
">

AI Output

</h2>

<div className="
rounded-xl
bg-green-50
p-5
whitespace-pre-line
leading-7
">

{message}

</div>

<div className="
flex
items-center
gap-3
rounded-xl
bg-red-50
p-4
">

<AlertTriangle
className="
text-red-600
"
/>

<div>

<h3 className="
font-semibold
">

Pest Warning

</h3>

<p>

{warning}

</p>

</div>

</div>

<div className="
flex
items-center
gap-3
rounded-xl
bg-yellow-50
p-4
">

<Package
className="
text-yellow-600
"
/>

<div>

<h3 className="
font-semibold
">

Recommendation

</h3>

<p>

{product}

</p>

</div>

</div>

<div className="
flex
gap-4
">

<button
onClick={copyMessage}
className="
flex-1
bg-green-600
text-white
rounded-xl
py-3
flex
items-center
justify-center
gap-2
"
>

<Copy size={18}/>

Copy

</button>

<button
className="
flex-1
border
rounded-xl
py-3
flex
items-center
justify-center
gap-2
"
>

<Download size={18}/>

Export

</button>

</div>

</div>

);

}