import { useQuery } from "@tanstack/react-query";

import {
getWeather
} from "@/services/weatherService";

export default function useWeather(){

const query=useQuery({

queryKey:["weather"],

queryFn:getWeather

});

return{

weather:
query.data || [],

loading:
query.isLoading,

error:
query.error,

refetch:
query.refetch

};

}