import { HeroSection } from "@/sections/HeroSection";
import { SolutionsSection } from "@/sections/SolutionsSection";
import { MethodologySection } from "@/sections/MethodologySection";
import { ContactAndFooter } from "@/sections/ContactAndFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <MethodologySection />
      <ContactAndFooter />
    </>
  );
}
