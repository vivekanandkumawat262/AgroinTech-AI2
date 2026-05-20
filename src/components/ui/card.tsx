import { cn } from "@/lib/utils";

export function Card({
className,
children
}:any){

return(
<div
className={cn(
"rounded-2xl border bg-card p-6 shadow-sm",
className
)}
>
{children}
</div>
);

}

export function CardTitle({
children
}:any){

return(
<h3 className="font-semibold text-lg">
{children}
</h3>
);

}

export function CardContent({
children
}:any){

return(
<div className="mt-4">
{children}
</div>
);

}