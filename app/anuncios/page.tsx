import type { Metadata } from "next";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AdsLandingPage } from "@/components/landing/AdsLandingPage";

export const metadata: Metadata = {
  title: "Anúncios e campanhas | Eleva",
  description: "Descubra onde sua empresa pode estar perdendo oportunidades antes mesmo do primeiro contato.",
};

export default function AdsPage() {
  return <><ScrollToTop /><AdsLandingPage /></>;
}
