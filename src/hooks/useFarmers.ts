import { useQuery } from "@tanstack/react-query";

import {
getFarmers
} from "@/services/farmerService";

export default function useFarmers(){

const query=useQuery({

queryKey:["farmers"],

queryFn:getFarmers,

staleTime:1000*60*5,

refetchOnWindowFocus:false

});

return{

farmers:query.data || [],

loading:query.isLoading,

error:query.error,

refetch:query.refetch

};

}