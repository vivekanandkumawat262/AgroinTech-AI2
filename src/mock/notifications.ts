export interface Notification{

id:number;

title:string;

message:string;

type:

| "success"
| "warning"
| "info";

time:string;

read:boolean;

}

export const notifications:Notification[]=[

{
id:1,
title:"Campaign Generated",
message:"Cotton campaign created successfully",
type:"success",
time:"2 min ago",
read:false
},

{
id:2,
title:"Pest Alert",
message:"Pink Bollworm risk detected",
type:"warning",
time:"10 min ago",
read:false
},

{
id:3,
title:"Analytics Updated",
message:"CTR improved by 8%",
type:"info",
time:"1 hour ago",
read:true
},

{
id:4,
title:"Farmer Segment Updated",
message:"New Maharashtra segment created",
type:"success",
time:"3 hours ago",
read:true
}

];