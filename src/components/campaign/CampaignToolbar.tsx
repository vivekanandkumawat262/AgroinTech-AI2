import {
Save,
Play,
Download,
Upload,
Trash2
} from "lucide-react";

import { Button } from "../ui/button";

export default function CampaignToolbar(){

return(

<div className="
flex
flex-wrap
gap-3
border
rounded-2xl
p-4
bg-card
">

<Button>

<Save size={16}/>

Save

</Button>

<Button>

<Play size={16}/>

Deploy

</Button>

<Button variant="outline">

<Download size={16}/>

Export

</Button>

<Button variant="outline">

<Upload size={16}/>

Import

</Button>

<Button
variant="outline"
className="
text-red-600
"
>

<Trash2 size={16}/>

Delete

</Button>

</div>

);

}