import { api } from "./api";

export async function getWeather(){

return api.weather();

}

export async function getWeatherByType(
type:string
){

const weather=
await getWeather();

return weather.find(
(w:any)=>

w.type
.toLowerCase()

===

type
.toLowerCase()

);

}

export async function getHotWeather(){

const weather=
await getWeather();

return weather.filter(
(w:any)=>

w.temperature>35

);

}