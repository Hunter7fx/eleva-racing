import { ArrowUpRight } from "lucide-react";
import { services as serviceItems } from "@/lib/content";

const navigation = ["Início", "O que fazemos", "Projetos", "Ideias", "Contato"];
const social = [
  { name: "Instagram", href: "https://www.instagram.com/elevacria/" },
  { name: "WhatsApp", href: "https://wa.me/5567998827384" },
];

export function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="section-shell footer-shell">
        <div className="footer-topline"><span>© 2026 Eleva Origem</span><a href="#top">Voltar ao topo <ArrowUpRight size={14} /></a></div>
        <div className="footer-branding"><p className="footer-wordmark">ELEVA<br /><span>ORIGEM</span></p><p>Estratégia para marcas<br />que querem avançar.</p></div>
        <div className="footer-columns">
          <div className="footer-column"><p className="footer-label">Explorar</p>{navigation.map((item, index) => <a href={["#top", "#services", "#projects", "#ideas", "/contato"][index]} key={item}>{item}</a>)}</div>
          <div className="footer-column"><p className="footer-label">O que fazemos</p>{serviceItems.map((item) => <a href="#services" key={item.id}>{item.name}</a>)}</div>
          <div className="footer-column"><p className="footer-label">Fale com a Eleva</p><a href="mailto:elevaorigem@gmail.com">elevaorigem@gmail.com</a><a href="tel:+5567998827384">+55 67 99882-7384</a><a href="/contato">Fátima do Sul · MS</a><span className="footer-business-id">CNPJ 69.273.518/0001-03</span></div>
          <div className="footer-column"><p className="footer-label">Redes sociais</p>{social.map((item) => <a href={item.href} key={item.name} target="_blank" rel="noreferrer">{item.name} <ArrowUpRight size={12} /></a>)}</div>
        </div>
      </div>
    </footer>
  );
}
