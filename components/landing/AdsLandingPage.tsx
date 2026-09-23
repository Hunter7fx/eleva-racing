import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, MessageCircle, ScanSearch } from "lucide-react";
import { FadeOnScroll } from "@/components/FadeOnScroll";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";

const whatsappHref = "https://wa.me/5567998827384?text=Ol%C3%A1%2C%20quero%20fazer%20o%20diagn%C3%B3stico%20da%20presen%C3%A7a%20digital%20da%20minha%20empresa.";

const questions = [
  "Seu Instagram parece profissional para quem chega pela primeira vez?",
  "Seu site conduz o cliente ou apenas mostra informações?",
  "Seus anúncios atraem compradores ou apenas cliques?",
  "Sua empresa é lembrada ou apenas visualizada?",
];

const auditItems = [
  ["01", "Instagram", "Se o perfil comunica valor, confiança e um próximo passo claro."],
  ["02", "Site", "Se a experiência responde dúvidas e facilita a decisão."],
  ["03", "Anúncios", "Se a campanha chega às pessoas certas com a mensagem certa."],
  ["04", "Jornada", "Onde o interesse esfria entre o primeiro clique e o contato."],
] as const;

const faqs = [
  ["Para quem é o diagnóstico?", "Para donos de lojas, negócios locais e empresas de Fátima do Sul, Dourados e região que querem entender por que a presença digital não está gerando o potencial que poderia."],
  ["O que eu recebo?", "Uma leitura objetiva dos pontos que podem estar enfraquecendo sua percepção, sua conversão e sua geração de oportunidades, com prioridades para decidir o próximo passo."],
  ["Preciso contratar um serviço depois?", "Não. O diagnóstico é o primeiro passo para entender o cenário. Depois da conversa, você decide se faz sentido avançar e por onde começar."],
] as const;

export function AdsLandingPage() {
  return (
    <main className="ads-page">
      <header className="ads-nav">
        <Link className="ads-wordmark" href="/" aria-label="Voltar para a Eleva">Eleva <span>diagnóstico digital</span></Link>
        <div className="ads-nav-actions">
          <TrackedWhatsAppLink className="ads-nav-cta" href={whatsappHref}>Quero analisar minha presença digital <ArrowUpRight size={15} /></TrackedWhatsAppLink>
        </div>
      </header>

      <section className="ads-hero" aria-labelledby="ads-title">
        <div className="ads-hero-grid" aria-hidden="true" />
        <div className="ads-hero-copy">
          <FadeOnScroll>
            <p className="ads-kicker"><span /> Diagnóstico da presença digital</p>
            <h1 id="ads-title">Seu negócio pode estar perdendo vendas <em>antes</em> mesmo do cliente falar com você.</h1>
            <p className="ads-hero-lead">O cliente pesquisa, compara e cria uma impressão em poucos segundos. Descubra o que ele percebe antes de pedir um orçamento.</p>
            <TrackedWhatsAppLink className="ads-primary-cta" href={whatsappHref}>Quero analisar minha presença digital <ArrowUpRight size={18} /></TrackedWhatsAppLink>
            <p className="ads-hero-note">Diagnóstico para empresas de Fátima do Sul, Dourados e região.</p>
            <p className="ads-authority">Análise estratégica realizada pela Eleva, especialista em estratégia, design e tecnologia. A única empresa do MS com UI/UX aplicado à construção de sites e experiências digitais.</p>
          </FadeOnScroll>
        </div>
        <div className="ads-hero-visual">
          <Image src="/images/eleva-bust-blossom.png" alt="Busto clássico entre flores, uma metáfora para percepção e presença" fill priority sizes="(max-width: 760px) 100vw, 46vw" />
          <div className="ads-scan-card"><ScanSearch size={17} /><span>leitura em andamento</span><strong>percepção → decisão</strong></div>
          <div className="ads-hero-stamp">ELEVA<br /><span>FÁTIMA DO SUL · MS</span></div>
        </div>
      </section>

      <section className="ads-loss" aria-labelledby="ads-loss-title">
        <div className="ads-section-intro">
          <FadeOnScroll><p className="ads-kicker"><span /> O custo invisível</p><h2 id="ads-loss-title">Cada pessoa que entra no seu perfil e vai embora pode ser uma oportunidade que você nunca soube que perdeu.</h2></FadeOnScroll>
        </div>
        <div className="ads-question-list">
          {questions.map((question, index) => <FadeOnScroll as="article" delay={index * 120} key={question}><span>0{index + 1}</span><p>{question}</p><ArrowUpRight size={19} /></FadeOnScroll>)}
        </div>
      </section>

      <section className="ads-audit" aria-labelledby="ads-audit-title">
        <div className="ads-audit-heading"><FadeOnScroll><p className="ads-kicker"><span /> O que será analisado</p><h2 id="ads-audit-title">Encontramos onde sua presença pode estar <em>enfraquecendo</em> oportunidades.</h2><p>Não é uma opinião genérica sobre marketing. É uma leitura dos pontos que o cliente encontra antes de falar com sua empresa.</p></FadeOnScroll></div>
        <div className="ads-audit-list">{auditItems.map(([number, title, body]) => <FadeOnScroll as="article" delay={Number(number) * 90} key={number}><span className="ads-audit-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><Check size={18} /></FadeOnScroll>)}</div>
      </section>

      <section className="ads-result" aria-labelledby="ads-result-title">
        <div><p className="ads-kicker"><span /> O resultado</p><h2 id="ads-result-title">Você sai sabendo o que está afastando clientes, o que precisa ser priorizado e qual é o próximo passo mais inteligente.</h2></div>
        <div className="ads-result-mark">01<br /><span>clareza antes de investir</span></div>
      </section>

      <section className="ads-method" aria-labelledby="ads-method-title">
        <FadeOnScroll><p className="ads-kicker"><span /> Método Eleva</p><h2 id="ads-method-title">Sua empresa não precisa apenas aparecer. Ela precisa ser percebida como a escolha certa.</h2></FadeOnScroll>
        <div className="ads-method-line"><span>Branding</span><b>+</b><span>UI/UX</span><b>+</b><span>Sites</span><b>+</b><span>SEO</span><b>+</b><span>Tráfego</span><b>+</b><span>Sistemas</span></div>
        <p className="ads-method-copy">Não entregamos marketing fragmentado. Conectamos marca, experiência, aquisição e tecnologia para que a percepção acompanhe a qualidade do negócio.</p>
      </section>

      <section className="ads-cta" aria-labelledby="ads-cta-title">
        <div><p className="ads-kicker"><span /> Primeiro passo</p><h2 id="ads-cta-title">Quanto mais tempo sua empresa permanece mal apresentada, mais oportunidades continuam passando para concorrentes mais preparados.</h2></div>
        <TrackedWhatsAppLink className="ads-whatsapp-cta" href={whatsappHref}><MessageCircle size={19} /> Quero analisar minha presença digital <ArrowUpRight size={18} /></TrackedWhatsAppLink>
      </section>

      <section className="ads-faq" aria-labelledby="ads-faq-title">
        <FadeOnScroll><p className="ads-kicker"><span /> Perguntas frequentes</p><h2 id="ads-faq-title">Antes de começar.</h2></FadeOnScroll>
        <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div>
      </section>

      <footer className="ads-footer"><span>ELEVA · DIAGNÓSTICO DIGITAL</span><TrackedWhatsAppLink href={whatsappHref}>Quero analisar minha presença digital <ArrowUpRight size={15} /></TrackedWhatsAppLink></footer>
    </main>
  );
}
