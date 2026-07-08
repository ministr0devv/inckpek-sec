import { HeroSection } from "@/sections/HeroSection";
import { MetricsSection } from "@/sections/MetricsSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { MethodologySection } from "@/sections/MethodologySection";
import { B2BSection } from "@/sections/B2BSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <SolutionsSection />
      <MethodologySection />
      <B2BSection />
    </>
  );
}
