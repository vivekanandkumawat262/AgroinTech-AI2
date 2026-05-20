import * as Dialog from "@radix-ui/react-dialog";

export const DialogRoot=Dialog.Root;

export const DialogTrigger=
Dialog.Trigger;

export const DialogContent=({
children
}:any)=>(

<Dialog.Portal>

<Dialog.Overlay className="
fixed inset-0 bg-black/50
"/>

<Dialog.Content className="
fixed top-1/2 left-1/2
-translate-x-1/2
-translate-y-1/2
bg-background
p-6
rounded-xl
w-[500px]
">

{children}

</Dialog.Content>

</Dialog.Portal>

);