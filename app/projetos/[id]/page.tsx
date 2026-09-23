import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectCampaigns, projectGalleries, projectLogos, projectStories, projects } from "@/lib/content";
import { ThemeToggle } from "@/components/ThemeToggle";
import "../../../components/landing/ProjectPage.css";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

type ProjectDetails = {
  service: string;
  location: string;
  focus: string;
  statement: string;
  deliverables: string[];
  context: string;
  challenge: string;
  solution: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) return { title: "Projeto não encontrado · Eleva" };

  return {
    title: `${project.name} · Eleva`,
    description: project.description,
    openGraph: {
      title: `${project.name} · Eleva`,
      description: project.description,
      images: [{ url: project.image, alt: project.name }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const logo = projectLogos.find((item) => item.id === project.id);
  const gallery = projectGalleries[project.id] ?? [project.image];
  const campaign = projectCampaigns[project.id] ?? [];
  const [projectName, projectCategory] = project.name.split(" · ");
  const details: ProjectDetails = ({
    fornao: { service: "Marca, site e experiência de pedido", location: "Fátima do Sul · MS", focus: "Organizamos a marca e a presença digital para facilitar o reconhecimento e a escolha do cliente.", statement: "Uma presença clara para vender melhor todos os dias.", deliverables: ["Posicionamento", "Identidade visual", "Experiência digital"], context: "O Fornão é uma pizzaria de Fátima do Sul que precisava transformar sua presença local em uma experiência de marca mais consistente.", challenge: "Criar uma identidade reconhecível e uma experiência digital que apresentasse o negócio com clareza, apetite e personalidade.", solution: "A Eleva conectou posicionamento, identidade visual e presença digital em uma mesma direção, levando a linguagem da pizzaria para os pontos de contato do cliente." },
    netbike: { service: "E-commerce e presença digital", location: "Fátima do Sul · MS", focus: "Estruturamos a vitrine digital, o catálogo e os caminhos de compra para uma operação de artigos esportivos.", statement: "Catálogo, experiência e conversão no mesmo caminho.", deliverables: ["E-commerce", "Catálogo de produtos", "Direção digital"], context: "A NetBike reúne produtos e acessórios para quem pratica ciclismo e precisa encontrar o equipamento certo com rapidez.", challenge: "Organizar uma oferta ampla em uma vitrine digital simples de navegar, com informação suficiente para apoiar a decisão de compra.", solution: "A Eleva estruturou a experiência de catálogo, a hierarquia de produtos e os caminhos de conversão para aproximar descoberta, comparação e compra." },
    "sheriff-hookah": { service: "Marca, e-commerce e campanha", location: "Fátima do Sul · MS", focus: "Construímos uma presença de marca forte para apresentar essências, narguilés e acessórios com mais atitude.", statement: "Uma identidade marcante para uma experiência de compra mais desejável.", deliverables: ["Direção visual", "E-commerce", "Peças de campanha"], context: "A Sheriff Hookah precisava transformar uma categoria visualmente intensa em uma experiência digital reconhecível, organizada e com personalidade.", challenge: "Equilibrar o universo noturno do produto com uma linguagem simples o bastante para guiar a escolha e forte o bastante para ser lembrada.", solution: "A Eleva organizou o contraste entre amarelo, preto e creme, aproximando símbolo, produto e campanha em uma presença digital única." },
  }[project.id] ?? { service: "Estratégia, design e tecnologia", location: "Fátima do Sul · MS", focus: project.description, statement: "Uma estrutura digital preparada para o próximo passo.", deliverables: ["Direção estratégica", "Identidade e experiência", "Presença digital"], context: project.description, challenge: "Traduzir o posicionamento do negócio em uma experiência clara para seus públicos.", solution: "A Eleva combinou direção estratégica, design e tecnologia para organizar a presença da marca e seus principais pontos de contato." });
  const story = projectStories[project.id] ?? [
    { label: "01 / Direção", title: "O negócio precisava tornar seu valor mais claro.", body: details.challenge },
    { label: "02 / Sistema visual", title: "A estratégia ganhou uma linguagem reconhecível.", body: details.solution },
    { label: "03 / Aplicação", title: "A presença digital conduz para o próximo passo.", body: details.focus },
  ];
  const storyImages = Array.from(new Set([...gallery, ...campaign].filter((image) => image !== project.image))).slice(0, 3);
  const processSteps = story.map((step, index) => ({ ...step, image: storyImages[index] }));
  const remainingCampaign = campaign.filter((image) => image !== project.image && !storyImages.includes(image));

  return (
    <main className="project-page">
      <header className="project-page__header">
        <Link href="/#projects" className="project-page__back">
          <span aria-hidden="true">←</span> Voltar aos projetos
        </Link>
        <div className="project-page__header-tools">
          <ThemeToggle />
          <span className="project-page__brand">ELEVA / PROJETO</span>
        </div>
      </header>

      <section className="project-page__hero">
        <div className="project-page__hero-top">
          <span className="project-page__eyebrow">PROJETO / {project.id}</span>
          {logo && <img className="project-page__logo" src={logo.image} alt={`${projectName} logo`} />}
        </div>
        <div className="project-page__hero-title">
          <h1>{projectName}</h1>
          <span>{projectCategory}</span>
        </div>
        <div className="project-page__hero-image">
          <img src={project.image} alt={project.name} loading="eager" fetchPriority="high" decoding="async" />
        </div>
        <div className="project-page__hero-bottom">
          <p>{details.focus}</p>
          <a className="project-page__visit" href={project.href} target="_blank" rel="noreferrer noopener">
            Visitar site do projeto <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="project-page__facts">
        <div><span>01 / Serviço</span><strong>{details.service}</strong></div>
        <div><span>02 / Local</span><strong>{details.location}</strong></div>
        <div><span>03 / Entregas</span><strong>{details.deliverables.join(" · ")}</strong></div>
      </section>

      <section className="project-page__statement">
        <span>Como a Eleva atuou</span>
        <div>
          <h2>{story[0]?.title ?? details.statement}</h2>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="project-page__case-grid">
        <article>
          <span>01 / Contexto</span>
          <p>{details.context}</p>
        </article>
        <article>
          <span>02 / Desafio</span>
          <p>{details.challenge}</p>
        </article>
        <article>
          <span>03 / Solução</span>
          <p>{details.solution}</p>
        </article>
      </section>

      <section className="project-page__story" aria-label={`Como o projeto ${projectName} foi construído`}>
        <div className="project-page__story-heading">
          <span>04 / Como foi feito</span>
          <p>Uma leitura visual do processo: da decisão inicial às aplicações que colocam a marca em movimento.</p>
        </div>
        <div className="project-page__story-steps">
          {processSteps.map((step, index) => (
            <article className={`project-page__story-row ${index % 2 ? "project-page__story-row--reverse" : ""}`} key={step.label}>
              <div className="project-page__story-copy">
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              {step.image && (
                <figure>
                  <img src={step.image} alt={`${projectName} — ${step.label.toLowerCase()}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                </figure>
              )}
            </article>
          ))}
        </div>
        </section>

      {remainingCampaign.length > 0 && (
        <section className="project-page__gallery project-page__gallery--campaign" aria-label={`Propaganda do projeto ${projectName}`}>
          <div className="project-page__gallery-heading">
            <span>05 / Propaganda</span>
            <p>Peças e imagens desenvolvidas para a direção visual da marca.</p>
          </div>
          <div className="project-page__gallery-grid">
            {remainingCampaign.map((image, index) => (
              <figure className={`project-page__gallery-item project-page__gallery-item--${index % 3}`} key={image}>
                <img src={image} alt={`${projectName} — peça de propaganda ${index + 1}`} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="project-page__action">
        <div>
          <span>Próximo passo</span>
          <h2>Veja o projeto funcionando.</h2>
        </div>
        <a className="project-page__action-button" href={project.href} target="_blank" rel="noreferrer noopener">
          Acessar {projectName} <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="project-page__closing">
        <span>Veja outro projeto</span>
        <Link href={`/projetos/${nextProject.id}`}>
          <strong>{nextProject.name}</strong>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
