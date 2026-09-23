export const trajectoryItems = [
  { id: "origin", title: "Estratégia de marca", description: "Uma leitura clara do espaço que a marca pode ocupar.", image: "/images/eleva-origin-hand.png", mobileImage: "/images/eleva-origin-hand-mobile-v2.png" },
  { id: "movement", title: "Identidade que permanece", description: "Um sistema visual com fôlego para acompanhar a empresa.", image: "/images/eleva-gallery-banner.png" },
  { id: "presence", title: "Experiências digitais", description: "Interfaces pensadas para orientar sem interromper.", image: "/images/eleva-journal-water.png" },
] as const;

export type Service = {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  image: string;
  description: string;
  intro: string;
  detail: string;
  painTitle: string;
  pains: readonly string[];
  gainsTitle: string;
  gains: readonly string[];
  difference: string;
  deliverables: readonly string[];
  process: readonly string[];
};

export const services: readonly Service[] = [
  {
    id: "branding", slug: "marca-e-posicionamento", name: "Marca e posicionamento", eyebrow: "Marca", image: "/images/eleva-green-banner.png",
    description: "Posicionamento, identidade e direção para marcas que precisam de um lugar próprio.",
    intro: "Sua empresa já entrega valor. A marca precisa deixar isso evidente antes mesmo da conversa começar.",
    detail: "Construímos clareza sobre quem você é, para quem você existe e por que sua empresa merece ser escolhida.",
    painTitle: "Quando a marca não acompanha a qualidade do negócio, a decisão do cliente fica mais difícil.",
    pains: ["O cliente compara sua empresa apenas por preço porque não percebe um diferencial claro.", "A comunicação muda a cada canal e transmite uma imagem confusa.", "A equipe sabe que entrega bem, mas não consegue explicar isso com a mesma força."],
    gainsTitle: "Você ganha uma marca que sustenta a conversa comercial antes, durante e depois do primeiro contato.",
    gains: ["Mais clareza para apresentar valor sem depender de desconto.", "Uma identidade consistente para site, redes, propostas e atendimento.", "Direção para tomar decisões de comunicação com menos tentativa e erro."],
    difference: "Não começamos pelo logo. Começamos pelo que sua empresa precisa ser reconhecida por entregar. A identidade vem como consequência de uma estratégia que faz sentido para o negócio.",
    deliverables: ["Diagnóstico de percepção e concorrência", "Posicionamento e proposta de valor", "Arquitetura de marca e mensagens-chave", "Identidade verbal e direção visual", "Guia de aplicação para os principais pontos de contato"],
    process: ["Entendemos o negócio, o público e o espaço que a marca pode ocupar.", "Definimos mensagem, direção e os critérios que orientam a percepção.", "Transformamos a estratégia em um sistema visual e verbal aplicável no dia a dia."],
  },
  {
    id: "sites", slug: "ui-ux-sites-e-landing-pages", name: "UI/UX, sites e landing pages", eyebrow: "Digital", image: "/images/eleva-bust-blossom.png",
    description: "Arquitetura digital para organizar a mensagem e conduzir cada escolha.",
    intro: "Um site bonito chama atenção. Uma boa experiência faz o visitante entender, confiar e avançar.",
    detail: "Projetamos interfaces com hierarquia, ritmo e intenção para transformar presença digital em próximo passo.",
    painTitle: "Visitas não significam oportunidade quando o caminho até a ação está confuso.",
    pains: ["A pessoa entra no site e não entende rapidamente o que sua empresa faz.", "Informação importante fica escondida, repetida ou fora de ordem.", "O site parece genérico, lento ou desconectado do nível do serviço entregue."],
    gainsTitle: "Você ganha uma presença digital que organiza a decisão e deixa o próximo passo natural.",
    gains: ["Uma narrativa clara para diferentes tipos de visitante.", "Páginas pensadas para confiança, leitura e conversão.", "Uma base digital que pode crescer com campanhas, SEO e novas ofertas."],
    difference: "UI/UX não é enfeite de interface. É a escolha consciente de que informação aparece, em que momento, e como cada detalhe reduz dúvida para quem está avaliando sua empresa.",
    deliverables: ["Estratégia de conteúdo e arquitetura de informação", "Jornadas e fluxos de navegação", "UI design e protótipos de interface", "Sites institucionais e landing pages", "Preparação técnica para performance, SEO e mensuração"],
    process: ["Mapeamos objetivos do negócio e perguntas reais de quem visita.", "Organizamos a experiência em uma estrutura simples de entender e navegar.", "Desenhamos, construímos e refinamos o site com foco no que gera ação."],
  },
  {
    id: "performance", slug: "seo-e-trafego", name: "SEO e tráfego", eyebrow: "Performance", image: "/images/eleva-portrait-water.png",
    description: "Campanhas e dados para encontrar as pessoas certas no momento certo.",
    intro: "A presença certa precisa aparecer quando alguém já está procurando uma solução como a sua.",
    detail: "Combinamos busca, mídia e leitura de dados para atrair atenção qualificada e aprender com cada oportunidade.",
    painTitle: "A empresa até aparece, mas não de forma previsível para quem tem intenção de comprar.",
    pains: ["O investimento em anúncio gera volume, mas pouca conversa qualificada.", "A empresa não ocupa buscas locais importantes para o seu serviço.", "Não há leitura clara sobre quais canais trazem oportunidade de verdade."],
    gainsTitle: "Você ganha visibilidade com contexto: ser encontrado pelas pessoas certas e saber o que faz sentido escalar.",
    gains: ["Mais presença em pesquisas e canais que já concentram demanda.", "Campanhas conectadas a páginas preparadas para converter.", "Decisões guiadas por dados, não por sensação ou vaidade de alcance."],
    difference: "Tráfego sem mensagem e sem página preparada desperdiça atenção. Unimos mídia, conteúdo e experiência para que a procura encontre uma resposta clara.",
    deliverables: ["Plano de SEO local e oportunidade de palavras-chave", "Estrutura e otimização de campanhas no Google e Meta", "Páginas de destino alinhadas à intenção de busca", "Configuração de métricas e eventos relevantes", "Rotina de análise, teste e otimização"],
    process: ["Identificamos onde existe demanda e quais objeções impedem a conversão.", "Criamos a combinação de campanhas, páginas e mensagens mais adequada.", "Acompanhamos os sinais de qualidade para otimizar orçamento e resultado."],
  },
  {
    id: "sistemas", slug: "sistemas-e-automacoes", name: "Sistemas e automações", eyebrow: "Produto", image: "/images/eleva-gallery-banner.png",
    description: "Ferramentas diretas para reduzir atrito e dar ritmo à operação.",
    intro: "Quando o interesse chega, sua operação precisa estar pronta para responder sem perder energia.",
    detail: "Desenhamos fluxos, integrações e ferramentas sob medida para organizar o trabalho e transformar demanda em oportunidade.",
    painTitle: "Crescer fica mais caro quando tarefas repetidas, informação solta e demora de resposta viram rotina.",
    pains: ["Leads se perdem entre WhatsApp, planilhas, e-mail e anotações.", "A equipe repete processos que poderiam acontecer automaticamente.", "O dono precisa cobrar, procurar informação e apagar incêndio para a operação continuar."],
    gainsTitle: "Você ganha uma operação mais leve, visível e pronta para atender melhor sem depender de improviso.",
    gains: ["Menos trabalho manual e menos risco de esquecer oportunidades.", "Informação organizada para o time agir com mais autonomia.", "Processos que acompanham o crescimento sem virar gargalo."],
    difference: "Não vendemos uma ferramenta pronta para encaixar seu negócio nela. Primeiro entendemos o fluxo real; depois definimos o que automatizar, integrar ou simplificar.",
    deliverables: ["Mapeamento de processos, responsáveis e gargalos", "Desenho de fluxos comerciais e operacionais", "Integrações entre ferramentas que sua empresa já usa", "Automações de tarefas repetitivas e avisos", "Painéis e sistemas internos simples de operar"],
    process: ["Observamos como a operação funciona hoje e onde o tempo se perde.", "Priorizamos os pontos que trazem mais impacto com menos complexidade.", "Implementamos, documentamos e acompanhamos a adoção com a equipe."],
  },
] as const;

export const adsService: Service = {
  id: "ads",
  slug: "anuncios",
  name: "Anúncios e campanhas",
  eyebrow: "Performance",
  image: "/images/eleva-portrait-water.png",
  description: "Campanhas com estratégia para transformar atenção em oportunidades reais.",
  intro: "Anunciar não é apenas aparecer mais. É colocar sua empresa diante das pessoas certas, com uma mensagem que faz sentido para o momento de decisão.",
  detail: "Planejamos campanhas conectadas ao negócio, à oferta e à experiência que acontece depois do clique.",
  painTitle: "Quando o anúncio é tratado como impulsionamento, o orçamento vira tentativa e erro.",
  pains: [
    "A empresa investe em mídia, mas recebe cliques que não se transformam em conversas.",
    "As campanhas falam com todo mundo e não deixam claro por que aquela oferta importa.",
    "O gestor olha alcance e impressões, mas não consegue relacionar o investimento às oportunidades geradas.",
  ],
  gainsTitle: "Você ganha campanhas com direção, leitura e espaço para melhorar o que já funciona.",
  gains: [
    "Uma mensagem mais precisa para cada público e etapa da decisão.",
    "Páginas e caminhos preparados para receber a atenção comprada.",
    "Visibilidade sobre o que merece mais investimento e o que precisa ser corrigido.",
  ],
  difference: "Não começamos pelo botão de promover. Começamos pela pergunta que o anúncio precisa responder e pelo próximo passo que a pessoa deve encontrar. Assim, mídia, mensagem e experiência trabalham na mesma direção.",
  deliverables: [
    "Diagnóstico de oferta, público e canais",
    "Estratégia de campanhas e distribuição de verba",
    "Conceitos, textos e direcionamento para criativos",
    "Configuração de campanhas, eventos e conversões",
    "Rotina de análise, testes e otimização",
  ],
  process: [
    "Entendemos o objetivo comercial, a oferta e os sinais que indicam uma boa oportunidade.",
    "Definimos públicos, mensagens, canais e páginas para formar um caminho coerente.",
    "Acompanhamos os dados e refinamos a campanha para proteger o orçamento e aumentar a qualidade das conversas.",
  ],
};

export type Project = {
  id: string;
  name: string;
  image: string;
  description: string;
  href: string;
  visual?: "segenergy-case" | "fornao-case" | "brothers-case" | "jp-case";
  layout: "full" | "medium" | "medium-left" | "large-left" | "large-right" | "small-left" | "small-right";
};

export const projects: readonly Project[] = [
  { id: "fornao", name: "O Fornão · Pizzaria", image: "/images/fornao-cover-editorial-v2-optimized.webp", href: "https://ofornaopizzaria.com/", visual: "fornao-case", layout: "full", description: "Identidade, experiência e presença digital para a pizzaria de Fátima do Sul." },
  { id: "netbike", name: "NetBike · Artigos esportivos", image: "/images/netbike-cover-editorial-v1-optimized.webp", href: "https://netbike.shop/#modelos", layout: "medium", description: "E-commerce, catálogo e experiência digital para bicicletas, acessórios e oficina especializada em Fátima do Sul." },
  { id: "carcara", name: "Carcará · Imobiliária", image: "/images/carcara-hero-architecture-optimized.webp", href: "https://carcara-fawn.vercel.app/", layout: "large-left", description: "Estratégia digital e experiência premium para uma imobiliária de Fátima do Sul e Dourados." },
  { id: "brothers", name: "Brothers · Academia", image: "/images/brothers-gym-hero-optimized.webp", href: "https://brothers-orcin.vercel.app/site/index.html", visual: "brothers-case", layout: "small-right", description: "Presença digital, estrutura e conversão para uma academia de Fátima do Sul." },
  { id: "segenergy", name: "SegEnergy · Presença digital", image: "/images/segenergy-hero-solar-home-new.webp", href: "https://segenergydourados.vercel.app/", visual: "segenergy-case", layout: "full", description: "Logo, hero e experiência digital para uma operação de energia solar em Dourados e região." },
  { id: "casa-requinte", name: "Casa Requinte · Decor", image: "/images/casa-requinte-project.webp", href: "https://casaerequinte-2.vercel.app/", layout: "medium", description: "Experiência digital e presença elegante para uma loja de decoração, presentes e ambientes em Fátima do Sul." },
  { id: "limpeza-cia", name: "Limpeza & Cia · Produtos", image: "/images/limpeza-cia-cover-site-direction-v1-optimized.webp", href: "https://limpezaecia27-08.vercel.app/", layout: "small-left", description: "Catálogo e experiência de compra para soluções de limpeza doméstica, profissional, automotiva e agro." },
  { id: "jp-lanches", name: "JP Lanches · Delivery", image: "/images/jp-lanches-cover-editorial-v1-optimized.webp", href: "https://jplanches10-09.vercel.app/", visual: "jp-case", layout: "large-left", description: "Identidade, cardápio e experiência de pedido para uma marca local de alimentação." },
  { id: "jp-doces", name: "JP Doces Artesanais", image: "/images/jp-doces-hero-optimized.webp", href: "https://jplanches10-09.vercel.app/doces#cardapio-doces", layout: "small-right", description: "Cardápio artesanal e experiência de encomenda para doces, presentes e celebrações em Fátima do Sul." },
  { id: "hunter-tech", name: "Hunter Tech · Tecnologia", image: "/images/hunter-tech-project.webp", href: "https://huntertechcom.vercel.app/", layout: "small-right", description: "Vitrine digital premium para produtos Apple, acessórios, scooters e assistência técnica especializada." },
  { id: "sandra-lima", name: "Sandra Lima · Beauty", image: "/images/sandra-lima-cover-beauty-v1-optimized.webp", href: "https://sandralima7.vercel.app/", layout: "large-right", description: "E-commerce de beleza com curadoria de cosméticos, acessórios, skincare e produtos para unhas." },
  { id: "sheriff-hookah", name: "Sheriff Hookah · Essências", image: "/images/sheriff-hookah-cover-hookah-v1-optimized.webp", href: "https://sheriffhookah-vercel-fixed.vercel.app/", layout: "full", description: "E-commerce e experiência de marca para essências, carvões, narguilés e acessórios em Fátima do Sul." },
] as const;

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export const projectGalleries: Record<string, readonly string[]> = {
  fornao: ["/images/fornao-site-capture.png", "https://ofornaopizzaria.com/images/menu/catalog/calabresa.webp", "https://ofornaopizzaria.com/images/featured-carousel/casa-grande.png", "https://ofornaopizzaria.com/images/featured-carousel/douradense.png", "https://ofornaopizzaria.com/images/featured-carousel/frango-catupiry.png"],
  netbike: ["/images/netbike-site-capture.png", "https://netbike.shop/assets/catalog-absolute-standard-Bb0RhQ_q.webp", "https://netbike.shop/assets/catalog-bike-retro-standard-C-Ilb-_B.webp", "https://netbike.shop/hero-lifestyle-absolute.webp", "https://netbike.shop/hero-lifestyle-gta.webp", "https://netbike.shop/hero-lifestyle-vikingx.webp"],
  carcara: ["/images/carcara-site-capture.png", "/images/carcara-hero-architecture-optimized.webp"],
  brothers: ["/images/brothers-site-capture.png", "https://brothers-orcin.vercel.app/site/assets/gym-1.png", "https://brothers-orcin.vercel.app/site/assets/gym-2.png"],
  segenergy: ["/images/segenergy-site-capture.png", "https://segenergydourados.vercel.app/_next/image?url=%2Fimages%2Fhero-solar-home-new.webp&w=1920&q=75", "https://segenergydourados.vercel.app/_next/image?url=%2Fimages%2Fhero-solar-family-new.webp&w=1920&q=75", "https://segenergydourados.vercel.app/_next/image?url=%2Fimages%2Fhero-solar-technician-new.webp&w=1920&q=75", "https://segenergydourados.vercel.app/_next/image?url=%2Fimages%2Fabout-solar-consultation-new.webp&w=640&q=75", "https://segenergydourados.vercel.app/_next/image?url=%2Fimages%2Fproject-dourados-rural-field.webp&w=3840&q=75"],
  "casa-requinte": ["/images/casa-requinte-site-capture.png", "https://casaerequinte-2.vercel.app/images/hero-luxury.png", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"],
  "limpeza-cia": ["/images/limpeza-cia-site-capture.png", "/images/limpeza-cia-kitchen-campaign-v1.png", "https://limpezaecia27-08.vercel.app/_next/image?url=%2Fproducts-clean%2Fautomotivo%2Fnoval-x-car-1-100.png&w=640&q=75"],
  "jp-lanches": ["/images/jp-lanches-site-capture.png", "https://jplanches10-09.vercel.app/_next/image?url=%2Fimages%2Fburger-brasa.png&w=3840&q=75", "https://jplanches10-09.vercel.app/_next/image?url=%2Fimages%2Fburger-picante.png&w=3840&q=75", "https://jplanches10-09.vercel.app/_next/image?url=%2Fimages%2Fburger-duplo.png&w=3840&q=75", "https://jplanches10-09.vercel.app/_next/image?url=%2Fimages%2Fcombo-action.png&w=3840&q=75"],
  "jp-doces": ["/images/jp-doces-site-capture.png", "/images/jp-doces-hero-optimized.webp"],
  "hunter-tech": ["/images/hunter-tech-site-capture.png", "https://huntertechcom.vercel.app/assets/showcase-pc/carrossel-pc-1.png", "https://huntertechcom.vercel.app/assets/showcase-pc/carrossel-pc-2.png", "https://huntertechcom.vercel.app/assets/showcase-pc/carrossel-pc-3.png", "https://huntertechcom.vercel.app/assets/showcase-pc/carrossel-pc-4.png"],
  "sandra-lima": ["/images/sandra-lima-site-capture.png", "https://sandralima7.vercel.app/_next/image?url=%2Fproducts%2Fbuilder-gel.png&w=640&q=75", "https://sandralima7.vercel.app/_next/image?url=%2Fproducts%2Flip-oil.jpg&w=640&q=75", "https://sandralima7.vercel.app/_next/image?url=%2Fproducts%2Fserum-facial.jpg&w=640&q=75", "https://sandralima7.vercel.app/_next/image?url=%2Fproducts%2Fkit-bases.png&w=640&q=75"],
  "sheriff-hookah": ["/images/sheriff-hookah-site-capture.png", "/images/sheriff-hookah-propaganda.png"],
};

export const projectCampaigns: Record<string, readonly string[]> = {
  fornao: ["/images/fornao-cover-editorial-v1-optimized.webp"],
  netbike: ["/images/netbike-cover-editorial-v1-optimized.webp"],
  brothers: ["/images/brothers-gym-hero-optimized.webp"],
  segenergy: ["/images/segenergy-about-solar-consultation-new.webp"],
  "casa-requinte": ["/images/casa-requinte-project.webp"],
  "limpeza-cia": ["/images/limpeza-cia-cover-campaign-v2.png"],
  "jp-lanches": ["/images/jp-lanches-cover-editorial-v1-optimized.webp"],
  "jp-doces": ["/images/jp-doces-hero-optimized.webp"],
  "hunter-tech": ["/images/hunter-tech-project.webp"],
  "sandra-lima": ["/images/sandra-lima-project.webp"],
  "sheriff-hookah": ["/images/sheriff-hookah-project.webp"],
};

export type ProjectStoryStep = { label: string; title: string; body: string };

export const projectStories: Record<string, readonly ProjectStoryStep[]> = {
  fornao: [
    { label: "01 / Direção", title: "A pizzaria precisava ser reconhecida antes do primeiro pedido.", body: "A direção parte do calor da rua, do forno e do encontro para organizar uma presença local com mais apetite e personalidade." },
    { label: "02 / Sistema visual", title: "Formas circulares transformam sabor em assinatura.", body: "Arcos, blocos de cor e uma paleta terrosa criam um sistema simples de repetir na fachada, no cardápio e nas peças digitais." },
    { label: "03 / Aplicação", title: "O caminho digital termina onde a experiência começa.", body: "A vitrine apresenta os sabores com hierarquia e leva a pessoa da descoberta ao contato sem perder o jeito espontâneo da marca." },
  ],
  netbike: [
    { label: "01 / Direção", title: "Encontrar a bicicleta certa precisava ser rápido.", body: "A experiência foi pensada para quem compara modelos, procura confiança e quer sair da pesquisa direto para a conversa." },
    { label: "02 / Sistema visual", title: "Velocidade também é uma escolha de interface.", body: "Contraste, recortes de produto e blocos objetivos dão ritmo ao catálogo sem transformar a loja em um inventário frio." },
    { label: "03 / Aplicação", title: "O catálogo organiza a decisão sem interromper o desejo.", body: "Modelos, acessórios e oficina aparecem em um percurso que facilita a comparação e deixa o contato comercial sempre próximo." },
  ],
  carcara: [
    { label: "01 / Direção", title: "Imóveis de alto valor pediam uma presença à altura.", body: "A narrativa foi construída para transmitir segurança, curadoria e visão de futuro antes mesmo da primeira visita." },
    { label: "02 / Sistema visual", title: "Arquitetura e espaço conduzem a percepção.", body: "Grandes imagens, tipografia precisa e intervalos generosos colocam cada imóvel em cena sem disputar atenção com ele." },
    { label: "03 / Aplicação", title: "A busca começa com desejo e termina com confiança.", body: "A experiência aproxima localização, características e contato para transformar contemplação em uma próxima conversa." },
  ],
  brothers: [
    { label: "01 / Direção", title: "A academia precisava comunicar energia sem gritar.", body: "Partimos da rotina real de treino para construir uma experiência que acolhe quem está começando e desafia quem já está no ritmo." },
    { label: "02 / Sistema visual", title: "Força aparece no contraste e na cadência.", body: "Fotografia de movimento, tipografia direta e blocos escuros criam presença sem esconder a clareza das informações." },
    { label: "03 / Aplicação", title: "A matrícula fica mais próxima quando o caminho é simples.", body: "Horários, modalidades e contato são apresentados no momento certo para reduzir dúvida e aumentar a vontade de conhecer o espaço." },
  ],
  segenergy: [
    { label: "01 / Direção", title: "Energia solar precisava parecer possível no dia a dia.", body: "A comunicação aproxima tecnologia, economia e cuidado com a casa para tornar a decisão mais concreta e menos técnica." },
    { label: "02 / Sistema visual", title: "Luz e confiança viram uma mesma linguagem.", body: "Céu aberto, verdes naturais e imagens de pessoas equilibram a dimensão técnica com o futuro desejado pelo cliente." },
    { label: "03 / Aplicação", title: "A página responde antes que a objeção apareça.", body: "A estrutura conduz da promessa à avaliação, explicando o serviço com clareza e deixando o orçamento como consequência natural." },
  ],
  "casa-requinte": [
    { label: "01 / Direção", title: "O produto precisava carregar a sensação de presente.", body: "A direção valoriza o cuidado da escolha e transforma a loja em um lugar de descoberta, não apenas em uma lista de objetos." },
    { label: "02 / Sistema visual", title: "Textura, luz e silêncio dão valor ao detalhe.", body: "Composição editorial, tons naturais e respiro visual criam uma presença sofisticada sem afastar quem está procurando inspiração." },
    { label: "03 / Aplicação", title: "Cada ambiente abre uma possibilidade.", body: "A navegação aproxima categorias, atmosfera e contato para que a pessoa encontre um objeto e imagine onde ele pode viver." },
  ],
  "limpeza-cia": [
    { label: "01 / Direção", title: "Uma operação ampla precisava ficar fácil de entender.", body: "Organizamos categorias e necessidades de uso para que a pessoa encontre a solução certa sem precisar conhecer o portfólio antes." },
    { label: "02 / Sistema visual", title: "Produto, cor e informação trabalham juntos.", body: "Recortes de embalagem, contraste e hierarquia de dados criam uma linguagem prática para limpeza doméstica, profissional e automotiva." },
    { label: "03 / Aplicação", title: "O catálogo encurta a distância até a consulta.", body: "A experiência apresenta o produto, esclarece sua função e mantém o contato acessível para transformar pesquisa em pedido." },
  ],
  "jp-lanches": [
    { label: "01 / Direção", title: "O desejo precisava aparecer antes da fome apertar.", body: "A marca foi organizada em torno de textura, velocidade e proximidade para fazer o delivery parecer uma escolha óbvia." },
    { label: "02 / Sistema visual", title: "A fotografia é o primeiro argumento de venda.", body: "Cores quentes, enquadramentos próximos e uma hierarquia generosa deixam o produto falar alto sem perder organização." },
    { label: "03 / Aplicação", title: "Do olhar ao pedido em poucos movimentos.", body: "Cardápio, combos e chamada para ação formam um caminho curto, direto e com a personalidade de quem prepara na hora." },
  ],
  "jp-doces": [
    { label: "01 / Direção", title: "Doces artesanais pediam uma experiência mais afetiva.", body: "A direção transforma encomenda em ocasião, mostrando cuidado, variedade e o prazer de escolher algo feito para alguém." },
    { label: "02 / Sistema visual", title: "Delicadeza também pode ter contraste.", body: "Fotografia de detalhe, espaços claros e pontos de cor criam uma linguagem presenteável sem cair no excesso decorativo." },
    { label: "03 / Aplicação", title: "A vitrine ajuda a imaginar a celebração.", body: "Sabores, formatos e contato aparecem em uma sequência que facilita a encomenda e mantém a experiência pessoal." },
  ],
  "hunter-tech": [
    { label: "01 / Direção", title: "Tecnologia premium precisa ser desejável e compreensível.", body: "A experiência foi desenhada para comunicar curadoria e assistência, não apenas uma pilha de produtos eletrônicos." },
    { label: "02 / Sistema visual", title: "Produto e atmosfera dividem o mesmo palco.", body: "Superfícies escuras, luz controlada e enquadramentos de produto criam um ambiente de precisão, sem parecer distante." },
    { label: "03 / Aplicação", title: "A vitrine apresenta escolha, suporte e próximo passo.", body: "Categorias e destaques conduzem a pessoa da inspiração à compra ou ao atendimento especializado com menos atrito." },
  ],
  "sandra-lima": [
    { label: "01 / Direção", title: "Beleza começa quando a curadoria faz sentido.", body: "A marca foi apresentada como uma seleção confiável para quem quer escolher melhor entre cuidado, cor e rotina." },
    { label: "02 / Sistema visual", title: "Cada produto ganha espaço para revelar sua textura.", body: "Luz limpa, enquadramentos próximos e ritmo de catálogo constroem uma experiência delicada, atual e comercial." },
    { label: "03 / Aplicação", title: "Descoberta e compra seguem o mesmo fluxo.", body: "Categorias, kits e detalhes do produto se conectam para reduzir a indecisão e aproximar a escolha do checkout." },
  ],
  "sheriff-hookah": [
    { label: "01 / Direção", title: "A experiência precisava ter atitude antes de explicar o produto.", body: "A linguagem parte do universo noturno, mas mantém a leitura simples para que a marca seja lembrada e a escolha aconteça." },
    { label: "02 / Sistema visual", title: "O chapéu vira gesto, recorte e assinatura.", body: "Amarelo intenso, contorno preto e creme funcionam como um kit de formas que pode aparecer em produto, tela e campanha." },
    { label: "03 / Aplicação", title: "A loja transforma personalidade em desejo.", body: "Produtos, acessórios e imagens de campanha convivem em uma vitrine que comunica presença sem esconder o próximo passo de compra." },
  ],
};

export const journalItems = [
  { id: "brand", tag: "Marca", title: "A primeira impressão começa antes do logo.", image: "/images/eleva-origin-hand.png", mobileImage: "/images/eleva-journal-hand-card-v2.png" },
  { id: "digital", tag: "Digital", title: "Uma boa interface também sabe quando sair do caminho.", image: "/images/eleva-bust-blossom.png", mobileImage: "/images/eleva-journal-bust-card-v2.png" },
  { id: "strategy", tag: "Estratégia", title: "Escolher onde estar muda o que as pessoas percebem.", image: "/images/eleva-portrait-water.png", mobileImage: "/images/eleva-journal-face-card-v2.png" },
] as const;

export const capabilities = [
  "Posicionamento de marca",
  "Identidade visual e verbal",
  "Sites e produtos digitais",
  "Sistemas e automações",
  "Conteúdo e direção criativa",
  "Mídia e performance",
  "Consultoria estratégica",
  "Experiências que conectam",
] as const;

export const projectLogos = [
  { id: "segenergy", name: "SegEnergy", image: "/images/segenergy-logo-cutout.png", href: "https://segenergydourados.vercel.app/" },
  { id: "fornao", name: "O Fornão Pizzaria", image: "/images/fornao-logo-cutout.png", href: "https://ofornaopizzaria.com/" },
  { id: "brothers", name: "Brothers Academia", image: "/images/brothers-logo-cutout.png", href: "https://brothers-orcin.vercel.app/site/index.html" },
  { id: "jp-lanches", name: "JP Lanches", image: "/images/jp-lanches-logo-clean.png", href: "https://jplanches10-09.vercel.app/" },
  { id: "jp-doces", name: "JP Doces Artesanais", image: "/images/jp-doces-logo-cutout.png", href: "https://jplanches10-09.vercel.app/doces#cardapio-doces" },
  { id: "carcara", name: "Carcará", image: "/images/carcara-logo.png", href: "https://carcara-fawn.vercel.app/" },
  { id: "netbike", name: "NetBike", image: "/images/netbike-logo-clean.png", href: "https://netbike.shop/#modelos" },
  { id: "casa-requinte", name: "Casa Requinte Decor", image: "/images/casa-requinte-logo.svg", href: "https://casaerequinte-2.vercel.app/" },
  { id: "hunter-tech", name: "Hunter Tech", image: "/images/hunter-tech-logo-clean.png", href: "https://huntertechcom.vercel.app/" },
  { id: "limpeza-cia", name: "Limpeza & Cia", image: "/images/limpeza-cia-logo.png", href: "https://limpezaecia27-08.vercel.app/" },
  { id: "sandra-lima", name: "Sandra Lima", image: "/images/sandra-lima-logo-trim.png", href: "https://sandralima7.vercel.app/" },
  { id: "sheriff-hookah", name: "Sheriff Hookah", image: "/images/sheriff-hookah-logo.svg", href: "https://sheriffhookah-vercel-fixed.vercel.app/" },
] as const;
