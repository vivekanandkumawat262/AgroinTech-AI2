import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import ArchitectureFlow from "./ArchitectureFlow";
import StatsSection from "./StatsSection";
import FooterSection from "./FooterSection";

export default function LandingPage(){

return(

<div className="
min-h-screen
bg-gradient-to-b
from-green-50
via-white
to-yellow-50
">

<HeroSection/>

<FeatureSection/>

<ArchitectureFlow/>

<StatsSection/>

<FooterSection/>

</div>

);

}