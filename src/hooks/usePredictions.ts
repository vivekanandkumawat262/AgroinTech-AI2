import { useQuery } from "@tanstack/react-query";

import {
getPredictions
} from "@/services/predictionService";

export default function usePredictions(){

const query=useQuery({

queryKey:["predictions"],

queryFn:getPredictions

});

return{

predictions:
query.data || [],

loading:
query.isLoading,

error:
query.error,

refetch:
query.refetch

};

}