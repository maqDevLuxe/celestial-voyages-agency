import StarBackground from "@/components/space/StarBackground";
import Navbar from "@/components/space/Navbar";
import Hero from "@/components/space/Hero";
import SpaceportPartners from "@/components/space/SpaceportPartners";
import MissionItinerary from "@/components/space/MissionItinerary";
import ZeroGExperience from "@/components/space/ZeroGExperience";
import SpeedMetrics from "@/components/space/SpeedMetrics";
import SpacecraftTech from "@/components/space/SpacecraftTech";
import PreflightTraining from "@/components/space/PreflightTraining";
import GalacticImage from "@/components/space/GalacticImage";
import AstronautCounters from "@/components/space/AstronautCounters";
import SpaceBlog from "@/components/space/SpaceBlog";
import SafetySystems from "@/components/space/SafetySystems";
import PassengerExpectations from "@/components/space/PassengerExpectations";
import Footer from "@/components/space/Footer";

const Index = () => {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SpaceportPartners />
        <MissionItinerary />
        <ZeroGExperience />
        <SpeedMetrics />
        <SpacecraftTech />
        <PreflightTraining />
        <GalacticImage />
        <AstronautCounters />
        <SpaceBlog />
        <SafetySystems />
        <PassengerExpectations />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
