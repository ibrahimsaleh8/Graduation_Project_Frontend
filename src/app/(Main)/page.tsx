import Footer from "@/components/Layout/Footer";
import Hero from "@/components/sections/Hero";
import LatestJobsSections from "@/components/sections/LatestJobsSections";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <LatestJobsSections />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
