import * as Tooltip from "@radix-ui/react-tooltip";

export default function AppTooltip({

text,
children

}:any){

return(

<Tooltip.Provider>

<Tooltip.Root>

<Tooltip.Trigger asChild>

{children}

</Tooltip.Trigger>

<Tooltip.Content className="
bg-black
text-white
rounded-lg
px-3
py-2
text-sm
">

{text}

</Tooltip.Content>

</Tooltip.Root>

</Tooltip.Provider>

);

}