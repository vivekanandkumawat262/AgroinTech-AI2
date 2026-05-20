import { useQuery } from "@tanstack/react-query";

import {
getCampaigns
} from "@/services/campaignService";

export default function useCampaigns(){

const query=useQuery({

queryKey:["campaigns"],

queryFn:getCampaigns,

staleTime:1000*60*5

});

return{

campaigns:query.data || [],

loading:query.isLoading,

error:query.error,

refetch:query.refetch

};

}