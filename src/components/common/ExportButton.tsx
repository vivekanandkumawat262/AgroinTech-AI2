import {
Download
} from "lucide-react";

import { toast } from "sonner";

interface Props{

fileName?:string;

data?:any[];

label?:string;

}

export default function ExportButton({

fileName="export",

data=[],

label="Export CSV"

}:Props){

function exportCSV(){

if(data.length===0){

toast.error(
"No data available"
);

return;

}

const headers=
Object.keys(
data[0]
);

const rows=
data.map(
item=>
headers
.map(
header=>
item[header]
)
.join(",")
);

const csv=[
headers.join(","),
...rows
].join("\n");

const blob=
new Blob(
[csv],
{
type:
"text/csv;charset=utf-8;"
}
);

const url=
URL.createObjectURL(
blob
);

const link=
document.createElement(
"a"
);

link.href=url;

link.download=
`${fileName}.csv`;

link.click();

URL.revokeObjectURL(
url
);

toast.success(
"CSV exported"
);

}

return(

<button
onClick={exportCSV}
className="
flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-green-600
text-white
hover:bg-green-700
transition
"
>

<Download size={18}/>

{label}

</button>

);

}