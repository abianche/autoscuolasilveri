import AboutSection from "@/components/AboutSection";
import Associates from "@/components/Associates";
import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <Associates />
      <CallToAction />
    </>
  );
}
