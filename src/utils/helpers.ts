export function randomId(){

return Math.random()

.toString(36)

.substring(2,10);

}

export function sleep(
ms:number
){

return new Promise(
resolve=>

setTimeout(
resolve,
ms
)

);

}

export function groupBy(

array:any[],

key:string

){

return array.reduce(

(result,item)=>{

const value=
item[key];

if(
!result[value]
){

result[value]=[];

}

result[value]
.push(item);

return result;

},

{}

);

}

export function uniqueValues(

array:any[],

key:string

){

return [

...new Set(

array.map(
item=>

item[key]

)

)

];

}

export function sortByField(

array:any[],

field:string

){

return [...array]

.sort(

(a,b)=>

String(
a[field]
)

.localeCompare(

String(
b[field]
)

)

);

}