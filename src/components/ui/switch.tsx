import * as Switch from "@radix-ui/react-switch";

export default function ThemeSwitch({

checked,
onChange

}:any){

return(

<Switch.Root
checked={checked}
onCheckedChange={onChange}
className="
w-12
h-6
rounded-full
bg-green-600
"
>

<Switch.Thumb className="
block
w-5
h-5
bg-white
rounded-full
"
/>

</Switch.Root>

);

}