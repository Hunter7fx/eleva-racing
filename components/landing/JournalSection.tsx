import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { journalItems } from "@/lib/content";
import { ScrollFloat } from "@/components/landing/ScrollFloat";

export function JournalSection() {
  return (
    <section className="journal-section" id="ideas">
      <div className="journal-film">
        <Image className="journal-background journal-background-desktop" src="/images/eleva-blue-banner.png" alt="Cena original de escultura arquitetônica azul refletida na água" fill sizes="100vw" />
        <Image className="journal-background journal-background-mobile" src="/images/eleva-journal-water-mobile-v2.png" alt="Escultura branca entre arcos, flores e água" fill sizes="100vw" />
        <div className="journal-film-shade" />
        <ScrollFloat as="h2" animationDuration={0.9} stagger={0.03}>
          Notas para pensar<br />a próxima escolha.
        </ScrollFloat>
      </div>
      <div className="journal-rail">
        {journalItems.map((item) => (
          <a className="journal-card" href={`mailto:elevaorigem@gmail.com?subject=${encodeURIComponent(item.title)}`} key={item.id}>
            <div className="journal-card-image"><Image className="journal-image-desktop" src={item.image} alt={item.title} fill sizes="(max-width: 760px) 86vw, 32vw" />{item.mobileImage ? <Image className="journal-image-mobile" src={item.mobileImage} alt="" fill sizes="86vw" /> : null}<span><ArrowUpRight size={17} /></span></div>
            <div className="journal-card-copy"><p>{item.tag}</p><h3>{item.title}</h3></div>
          </a>
        ))}
      </div>
    </section>
  );
}
