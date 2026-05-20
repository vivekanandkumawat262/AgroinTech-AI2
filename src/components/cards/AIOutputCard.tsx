import {
Copy,
Download
} from "lucide-react";

import { Card } from "../ui/card";

interface Props{
message:string;
warning:string;
recommendation:string;
translation:string;
}

export default function AIOutputCard({
message,
warning,
recommendation,
translation
}:Props){

return(

<Card className="
space-y-4
">

<h2 className="
font-bold
text-xl
">

AI Generated Output

</h2>

<div>

<p>

{message}

</p>

</div>

<div>

<strong>

Pest Warning:

</strong>

{warning}

</div>

<div>

<strong>

Product:

</strong>

{recommendation}

</div>

<div>

<strong>

Translation:

</strong>

{translation}

</div>

<div className="
flex gap-3
">

<button>

<Copy/>

</button>

<button>

<Download/>

</button>

</div>

</Card>

);

}