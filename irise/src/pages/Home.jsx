import Hero from "../components/Hero";
import PainSection from "../components/PainSection";
import SystemSection from "../components/SystemSection";
import Testimonials from "../components/Testimonials";
import BlueprintSection from "../components/BlueprintSection";
import Scarcity from "../components/Scarcity";
import BlueprintModal from "../components/BlueprintModal";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainSection />
      <SystemSection />
      <Testimonials />
      <BlueprintSection />
      <Scarcity />
      <BlueprintModal />
    </main>
  );
}
