import * as Avatar from "@radix-ui/react-avatar";

export default function UserAvatar(){

return(

<Avatar.Root>

<Avatar.Image
src="/logo.svg"
/>

<Avatar.Fallback>

AI

</Avatar.Fallback>

</Avatar.Root>

);

}