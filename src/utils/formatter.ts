export function formatPercent(
value:number
){

return `${value}%`;

}

export function formatNumber(
value:number
){

return new Intl.NumberFormat(
"en-IN"
).format(value);

}

export function formatCurrency(
value:number
){

return new Intl.NumberFormat(
"en-IN",
{
style:"currency",
currency:"INR"
}
).format(value);

}

export function capitalize(
text:string
){

return

text.charAt(0)
.toUpperCase()

+

text.slice(1);

}