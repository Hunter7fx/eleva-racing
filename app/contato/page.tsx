import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ContactSection } from "@/components/landing/ContactSection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-page-nav">
        <Link className="contact-page-back" href="/"><ArrowLeft size={16} /> Voltar para o início</Link>
        <Link className="contact-page-brand" href="/">Eleva <span>Branding / Digital</span></Link>
        <div className="contact-page-actions">
          <ThemeToggle />
          <a className="contact-page-email" href="mailto:elevaorigem@gmail.com">elevaorigem@gmail.com</a>
          <span className="contact-page-cnpj">CNPJ 69.273.518/0001-03</span>
        </div>
      </header>
      <ContactSection />
    </main>
  );
}
