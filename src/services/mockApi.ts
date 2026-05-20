export async function delay(
time:number=700
){

return new Promise(
resolve=>

setTimeout(
resolve,
time
)

);

}

export async function getMockData<T>(
url:string
):Promise<T>{

await delay();

const response=
await fetch(url);

if(
!response.ok
){

throw new Error(
"Mock fetch failed"
);

}

return response.json();

}