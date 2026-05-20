import {
DialogRoot,
DialogTrigger,
DialogContent
}
from "./dialog";

export default function Modal({

trigger,
children

}:any){

return(

<DialogRoot>

<DialogTrigger>

{trigger}

</DialogTrigger>

<DialogContent>

{children}

</DialogContent>

</DialogRoot>

);

}