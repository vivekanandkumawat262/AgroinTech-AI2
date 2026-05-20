import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants=cva(
"inline-flex items-center justify-center rounded-xl font-medium transition",
{
variants:{
variant:{
default:"bg-green-600 text-white hover:bg-green-700",
outline:"border",
ghost:"hover:bg-muted"
},
size:{
sm:"h-9 px-3",
md:"h-10 px-4",
lg:"h-12 px-6"
}
},
defaultVariants:{
variant:"default",
size:"md"
}
}
);

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
variant?:"default"|"outline"|"ghost";
size?:"sm"|"md"|"lg";
}

export function Button({
className,
variant,
size,
...props
}:ButtonProps){

return(
<button
className={cn(
variants({variant,size}),
className
)}
{...props}
/>
);

}