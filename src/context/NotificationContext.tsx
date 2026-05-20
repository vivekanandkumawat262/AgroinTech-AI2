import {
createContext,
useContext,
useMemo,
useState,
ReactNode
} from "react";

export interface Notification{

id:number;

title:string;

message:string;

type:
"success"
|
"warning"
|
"info";

read:boolean;

time:string;

}

interface ContextType{

notifications:
Notification[];

addNotification:(
notification:
Omit<
Notification,
"id"
>
)=>void;

markRead:(
id:number
)=>void;

removeNotification:(
id:number
)=>void;

clearNotifications:()=>void;

}

const NotificationContext=
createContext<
ContextType
|null
>(null);

export function NotificationProvider({

children

}:{
children:ReactNode
}){

const [
notifications,
setNotifications
]=useState<
Notification[]
>([]);

function addNotification(
notification:any
){

setNotifications(
prev=>[
{
id:Date.now(),

...notification

},

...prev

]
);

}

function markRead(
id:number
){

setNotifications(
prev=>

prev.map(
item=>

item.id===id

?

{
...item,
read:true
}

:

item

)

);

}

function removeNotification(
id:number
){

setNotifications(
prev=>

prev.filter(
item=>

item.id!==id
)

);

}

function clearNotifications(){

setNotifications(
[]
);

}

const value=
useMemo(
()=>({

notifications,

addNotification,

markRead,

removeNotification,

clearNotifications

}),
[
notifications
]
);

return(

<NotificationContext.Provider
value={value}
>

{children}

</NotificationContext.Provider>

);

}

export function useNotification(){

const context=
useContext(
NotificationContext
);

if(!context){

throw new Error(
"Notification provider missing"
);

}

return context;

}