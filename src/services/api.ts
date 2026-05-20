import {
getMockData
} from "./mockApi";

export const api={

farmers:()=>

getMockData(
"/mock-json/farmers.json"
),

campaigns:()=>

getMockData(
"/mock-json/campaigns.json"
),

weather:()=>

getMockData(
"/mock-json/weather.json"
),

pests:()=>

getMockData(
"/mock-json/pests.json"
),

predictions:()=>

getMockData(
"/mock-json/predictions.json"
)

};