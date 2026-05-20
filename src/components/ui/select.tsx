import * as Select from "@radix-ui/react-select";

export default function AppSelect({

items,
value,
onChange

}:any){

return(

<Select.Root
value={value}
onValueChange={onChange}
>

<Select.Trigger className="
border
rounded-xl
px-4
py-2
w-full
">

<Select.Value/>

</Select.Trigger>

<Select.Content>

{
items.map(
(item:string)=>(

<Select.Item
key={item}
value={item}
>

{item}

</Select.Item>

)
)

}

</Select.Content>

</Select.Root>

);

}