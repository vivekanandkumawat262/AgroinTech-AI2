import { Toaster } from "sonner";

export default function ToastProvider(){

return(

<Toaster

position="top-right"

expand={true}

richColors

closeButton

toastOptions={{

duration:3000,

style:{

borderRadius:"14px"

}

}}

/>

);

}