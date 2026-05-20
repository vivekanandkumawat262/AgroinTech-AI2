import { cn } from "@/lib/utils";

export function Input({
className,
...props
}:any){

return(

<input

className={cn(
"w-full rounded-xl border px-4 py-3 outline-none",
className
)}

{...props}

/>

);

}