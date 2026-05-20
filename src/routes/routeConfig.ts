import LandingPage from "@/pages/Landing/LandingPage";

import DashboardPage from "@/pages/Dashboard/DashboardPage";

import ContextPage from "@/pages/ContextGenerator/ContextPage";

import ChannelPage from "@/pages/ChannelOptimizer/ChannelPage";

import EngagementPage from "@/pages/Engagement/EngagementPage";

import PersonalizationPage from "@/pages/Personalization/PersonalizationPage";

import CampaignStudioPage from "@/pages/CampaignStudio/CampaignStudioPage";

import AnalyticsPage from "@/pages/Analytics/AnalyticsPage";

import FarmerCRMPage from "@/pages/FarmerCRM/FarmerCRMPage";

export interface RouteItem{

path:string;

element:any;

protected?:boolean;

}

export const routes:RouteItem[]=[

{
path:"/",
element:LandingPage,
protected:false
},

{
path:"/dashboard",
element:DashboardPage,
protected:true
},

{
path:"/context-generator",
element:ContextPage,
protected:true
},

{
path:"/channel-optimizer",
element:ChannelPage,
protected:true
},

{
path:"/engagement",
element:EngagementPage,
protected:true
},

{
path:"/personalization",
element:PersonalizationPage,
protected:true
},

{
path:"/campaign-studio",
element:CampaignStudioPage,
protected:true
},

{
path:"/analytics",
element:AnalyticsPage,
protected:true
},

{
path:"/farmers",
element:FarmerCRMPage,
protected:true
}

];