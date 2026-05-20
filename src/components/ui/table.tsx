export function Table({
children
}:any){

return(

<table className="
w-full
border-collapse
">

{children}

</table>

);

}

export function TableHead({
children
}:any){

return(
<thead className="bg-muted">
{children}
</thead>
);

}

export function TableRow({
children
}:any){

return(
<tr className="border-b">
{children}
</tr>
);

}

export function TableCell({
children
}:any){

return(
<td className="p-4">
{children}
</td>
);

}