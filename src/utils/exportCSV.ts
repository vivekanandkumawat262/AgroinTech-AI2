export function exportCSV(

data:any[],

fileName:string="export"

){

if(
data.length===0
)
return;

const headers=
Object.keys(
data[0]
);

const rows=
data.map(
row=>

headers
.map(
header=>

row[header]

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
type:"text/csv"
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

}