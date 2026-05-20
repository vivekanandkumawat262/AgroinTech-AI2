import {
createContext,
useContext,
useMemo,
useState,
ReactNode
} from "react";

interface DashboardStats{

totalFarmers:number;

activeCampaigns:number;

generatedVariants:number;

predictedEngagement:number;

}

interface ContextType{

stats:DashboardStats;

updateStats:(
data:
Partial<
DashboardStats
>
)=>void;

resetStats:()=>void;

}

const initialState:DashboardStats={

totalFarmers:52481,

activeCampaigns:124,

generatedVariants:12540,

predictedEngagement:84

};

const DashboardContext=
createContext<
ContextType
|null
>(null);

export function DashboardProvider({

children

}:{
children:ReactNode
}){

const [
stats,
setStats
]=useState(
initialState
);

function updateStats(
data:
Partial<
DashboardStats
>
){

setStats(
prev=>({

...prev,

...data

})
);

}

function resetStats(){

setStats(
initialState
);

}

const value=
useMemo(
()=>({

stats,

updateStats,

resetStats

}),
[
stats
]
);

return(

<DashboardContext.Provider
value={value}
>

{children}

</DashboardContext.Provider>

);

}

export function useDashboard(){

const context=
useContext(
DashboardContext
);

if(!context){

throw new Error(
"Dashboard provider missing"
);

}

return context;

}