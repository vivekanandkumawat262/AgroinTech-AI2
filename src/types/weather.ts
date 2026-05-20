export type WeatherType=

| "Humid"
| "Dry"
| "Rainy"
| "Cloudy"
| "Hot";

export interface Weather{

id:number;

type:WeatherType;

temperature:number;

humidity:number;

windSpeed:number;

rainProbability:number;

region:string;

date:string;

}

export interface WeatherAlert{

id:number;

region:string;

alert:string;

severity:

| "Low"
| "Medium"
| "High";

message:string;

}