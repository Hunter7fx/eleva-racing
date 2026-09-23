import { Footer } from "@/components/landing/Footer";
import { HeroExperience } from "@/components/landing/HeroExperience";
import { HistorySection } from "@/components/landing/HistorySection";
import { JournalSection } from "@/components/landing/JournalSection";
import { CarsSection } from "@/components/landing/CarsSection";
import { PartnersSection } from "@/components/landing/PartnersSection";
import { TeamsSection } from "@/components/landing/TeamsSection";

export default function Home() {
  return (
    <main>
      <HeroExperience />
      <HistorySection />
      <CarsSection />
      <TeamsSection />
      <JournalSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
