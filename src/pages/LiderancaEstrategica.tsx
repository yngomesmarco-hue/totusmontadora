import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Eye, Layers, Clock, Building2, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import guilhermePhoto from "@/assets/guilherme-camargo.jpeg";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+gostaria+de+falar+sobre+parcerias+estrat%C3%A9gicas+com+a+Totus+Asset&type=phone_number&app_absent=0";

function vimeoIframeSrc(embedUrl: string) {
  if (embedUrl.includes("autoplay=")) return embedUrl;
  return `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`;
}

type TimelineItem = {
  year: string;
  title: string;
  paragraphs: string[];
  videoUrl?: string;
  siteUrl?: string;
};

const metrics = [
  { value: "1991", label: "Primeiro empreendimento" },
  { value: "35+", label: "Anos de trajetória" },
  { value: "4", label: "Empresas ativas no grupo" },
  { value: "3", label: "Setores de atuação" },
];

/** Vimeo dos cases = mesmos URLs do bundle em produção (locamotofacil.com.br/lideranca-estrategica). */
const timeline: TimelineItem[] = [
  {
    year: "2026",
    title: "Fundação da Totus Asset",
    paragraphs: [
      "A Totus Asset foi estruturada como a holding estratégica do grupo, com o objetivo de consolidar operações, organizar capital e viabilizar crescimento com governança e escala. A empresa atua na gestão de ativos, estruturação financeira e desenvolvimento de novos negócios, conectando investidores a operações reais com lastro operacional.",
      "Seu modelo se baseia em controle rigoroso, previsibilidade de resultados e eficiência na alocação de recursos, criando uma plataforma que sustenta o crescimento das empresas do grupo de forma integrada. Mais do que uma holding, a Totus Asset funciona como um sistema de inteligência operacional e financeira, responsável por transformar operações em ativos estruturados.",
    ],
  },
  {
    year: "2025",
    title: "Fundação da LocaMotoFácil",
    siteUrl: "https://www.locamotofacil.com.br",
    paragraphs: [
      "A LocaMotoFácil nasce para resolver uma ineficiência estrutural do mercado de mobilidade: o acesso limitado ao crédito para aquisição de veículos produtivos. A empresa estrutura uma alternativa baseada em locação, permitindo que profissionais de entrega e transporte tenham acesso imediato a ativos geradores de renda.",
      "A operação combina tecnologia proprietária, automação de processos, telemetria e controle de risco em tempo real, criando um modelo escalável, com alta taxa de ocupação e previsibilidade operacional. Ao integrar gestão, cobrança, monitoramento e manutenção em uma única plataforma, a LocaMotoFácil transforma locação em um sistema eficiente de geração de receita recorrente.",
    ],
  },
  {
    year: "2024",
    title: "Fundação da LocaCarroFácil",
    siteUrl: "https://www.locacarrofacil.com.br",
    paragraphs: [
      "A LocaCarroFácil foi criada com foco em eficiência operacional e giro de ativos no segmento de mobilidade urbana. A empresa oferece veículos prontos para operação por motoristas de aplicativo, eliminando barreiras de entrada como crédito, burocracia e tempo de aquisição.",
      "Seu modelo privilegia simplicidade, velocidade e alta ocupação, estruturando uma operação enxuta, com controle direto sobre performance dos ativos. A LocaCarroFácil consolida uma abordagem prática e orientada a resultado dentro do ecossistema de mobilidade do grupo.",
    ],
  },
  {
    year: "2023",
    title: "Fundação da Totus Cenografia",
    siteUrl: "/",
    videoUrl: "https://player.vimeo.com/video/1190656947?h=1e610e8173",
    paragraphs: [
      "A Totus Cenografia foi criada para atuar no desenvolvimento e execução de projetos cenográficos e stands premium para grandes eventos e feiras corporativas. A empresa rapidamente se posicionou como uma operação de alcance nacional, com capacidade de entrega para projetos de alta complexidade.",
      "Seus projetos são concebidos a partir da integração entre arquitetura, tecnologia e estratégia de marca, incorporando princípios de neuroarquitetura para influenciar comportamento, aumentar tempo de permanência e potencializar engajamento. Mais do que estruturas físicas, a Totus desenvolve ambientes que operam como ferramentas de comunicação e conversão.",
    ],
  },
  {
    year: "2020",
    title: "Fundação da Liga de Combate ao Câncer",
    videoUrl: "https://player.vimeo.com/video/508645636?badge=0&autopause=0&player_id=0&app_id=58479",
    paragraphs: [
      "Em parceria com o Hospital de Amor (antigo Hospital de Câncer de Barretos), foi concebida a Liga de Combate ao Câncer — uma iniciativa de impacto social estruturada a partir da aplicação integrada de tecnologia, design de experiência e estratégia comportamental.",
      "O projeto foi desenhado para atuar na base da cadeia de conscientização, transformando crianças do ensino fundamental em agentes multiplicadores de informação em suas comunidades. Por meio de uma jornada interativa, imersiva e gamificada, a iniciativa promove engajamento ativo e incentiva a realização de exames preventivos de câncer de mama e colo do útero.",
      "Reconhecida internacionalmente, a iniciativa recebeu certificação do American College of Surgeons como uma das melhores práticas globais em prevenção do câncer. Esse projeto estabelece as bases conceituais que hoje orientam a atuação do grupo: operações concebidas como sistemas completos, com foco em impacto real, engajamento e controle.",
    ],
  },
  {
    year: "2012",
    title: "Fundação da DigToten",
    videoUrl: "https://player.vimeo.com/video/1190655769?badge=0&autopause=0&player_id=0&app_id=58479",
    paragraphs: [
      "A DigToten foi pioneira no desenvolvimento de tecnologias interativas para marketing promocional, criando soluções que ampliam o engajamento do público em eventos e ativações de marca. A empresa também atuou na gestão de credenciamento e controle de acesso, sendo uma das primeiras a implementar sistemas de autoatendimento em feiras e congressos.",
      "Sua atuação integrou tecnologia, experiência do usuário e eficiência operacional em projetos para grandes marcas nacionais e internacionais, como Embraer, Ambev, Coca-Cola, Elvis Presley Enterprises e CVC. A DigToten antecipou tendências que hoje se consolidaram no mercado, posicionando a tecnologia como elemento central na experiência de eventos.",
    ],
  },
  {
    year: "2005",
    title: "Fundação da GPN",
    videoUrl: "https://player.vimeo.com/video/631008048?badge=0&autopause=0&player_id=0&app_id=58479",
    paragraphs: [
      "A GPN foi criada com o objetivo de estruturar um modelo inovador para gestão de reprodução de documentos acadêmicos com controle de direitos autorais. Em parceria com o Ministério da Cultura, Biblioteca Nacional, Agência Internacional do ISBN e Banco do Brasil, desenvolveu um sistema capaz de registrar e viabilizar o repasse de direitos autorais a cada página copiada de obras técnicas e literárias.",
      "A operação permitiu conciliar acesso democrático ao conhecimento com remuneração justa aos autores, criando um modelo sustentável e juridicamente estruturado. Instalada na Universidade Católica de Brasília e no UniCEUB, a empresa chegou a atender mais de 40 mil alunos diariamente, consolidando uma solução de grande escala dentro do ambiente acadêmico.",
    ],
  },
  {
    year: "2003",
    title: "Produção de Festival Internacional de Música",
    videoUrl: "https://player.vimeo.com/video/570418042?badge=0&autopause=0&player_id=0&app_id=58479",
    paragraphs: [
      "Em parceria com a Rede Globo e com patrocínio de grandes grupos como Banco do Brasil, Claro, Vale e Petrobras, foi realizado o maior festival de música da América Latina naquele ano, reunindo mais de 40 bandas nacionais e internacionais.",
      "O projeto teve desdobramento em um especial televisivo exibido após o programa Fantástico, alcançando mais de 50% dos televisores ligados no país. A operação envolveu coordenação de múltiplos stakeholders, produção em larga escala e integração entre evento físico e mídia de massa.",
    ],
  },
  {
    year: "1998",
    title: "Fundação da Suporte de Produção",
    paragraphs: [
      "A Suporte de Produção foi criada com foco em conteúdo audiovisual institucional, desenvolvendo vídeos publicitários e documentários para organizações públicas e privadas. Atendeu clientes como Sebrae, TV Escola e Caixa Econômica Federal.",
      "A empresa consolidou experiência na construção de narrativas audiovisuais estratégicas, conectando comunicação, conteúdo e objetivos institucionais de forma clara e eficiente.",
    ],
  },
  {
    year: "1994",
    title: 'Produção do Programa "YourFace" (Canadá)',
    paragraphs: [
      'Produziu, em Estevan, Canadá, o programa semanal "YourFace", voltado à cobertura de eventos esportivos e culturais, além da discussão de temas relevantes para o público jovem.',
      "A experiência internacional contribuiu para o desenvolvimento de uma visão ampliada sobre comunicação, audiência e construção de conteúdo, antecipando conceitos que hoje são centrais na economia da atenção.",
    ],
  },
  {
    year: "1991",
    title: "Fundação da Oficina de Imagens",
    paragraphs: [
      "Aos 14 anos, fundou a Oficina de Imagens, primeira produtora audiovisual de sua cidade natal, Barretos/SP, em sociedade com seu professor de fotografia e vídeo, Paulo Marques.",
      "Aos 15 anos, realizou seu primeiro contrato de grande porte, produzindo a campanha política do então candidato a prefeito Dr. Hélio Navarro. O projeto marcou o início de uma trajetória empreendedora baseada em execução, responsabilidade e capacidade de entrega em contextos reais.",
    ],
  },
];

const principleCards = [
  { n: "01", title: "Estrutura antes da escala", desc: "Construir bases sólidas antes de buscar volume." },
  { n: "02", title: "Controle antes do crescimento", desc: "Crescer com governança, métricas e previsibilidade." },
  { n: "03", title: "Sistema antes da execução", desc: "Pensar o todo como mecanismo integrado, não como tarefas isoladas." },
];

const LiderancaEstrategica = () => {
  const [openCaseVideoUrl, setOpenCaseVideoUrl] = useState<string | null>(null);

  const handleContact = () => {
    window.open(WHATSAPP, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
        {/* Hero — ordem mobile: foto primeiro (igual referência) */}
        <section>
          <div className="grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Liderança Estratégica
              </div>

              <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
                <span className="text-neon">Guilherme Camargo</span>
              </h1>

              <p className="mb-5 text-base font-semibold text-foreground/90 sm:text-lg">
                Fundador &amp; CEO da Totus Asset
              </p>

              <p className="mb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Empreendedor com atuação multissetorial, responsável pela estruturação de operações escaláveis nos setores
                de cenografia, mobilidade e tecnologia, com foco em eficiência operacional, controle e geração de valor
                sustentável.
              </p>

              <Button
                size="lg"
                className="gap-2 bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
                onClick={() => document.getElementById("trajetoria")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="h-4 w-4" />
                Ver trajetória completa
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto aspect-[3/4] max-w-[320px] overflow-hidden rounded-2xl border-2 border-primary/40 shadow-[0_0_40px_hsl(var(--primary)/0.25)] sm:max-w-[380px]">
                <img
                  src={guilhermePhoto}
                  alt="Guilherme Camargo, Fundador e CEO da Totus Asset"
                  className="h-full w-full object-cover [object-position:center_25%]"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Visão e abordagem */}
        <section className="mt-12 sm:mt-16">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Eye className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">Visão e abordagem</h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-primary/30 bg-card/50 p-5 sm:p-7">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              A atuação de Guilherme é orientada pela construção de operações estruturadas, onde estratégia, execução e
              controle caminham de forma integrada. Ao longo de sua trajetória, desenvolveu modelos capazes de transformar
              atividades operacionais em ativos organizados, com previsibilidade, escala e governança.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Seu trabalho conecta diferentes disciplinas — tecnologia, cenografia, experiência do usuário, gestão
              financeira e estruturação jurídica — com o objetivo de criar sistemas completos, capazes de sustentar
              crescimento consistente e geração de valor no longo prazo.
            </p>
          </div>
        </section>

        {/* Trajetória */}
        <section id="trajetoria" className="mt-12 scroll-mt-24 sm:mt-16">
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">Trajetória</h2>
          </div>

          <div className="relative pl-10 sm:pl-14">
            <div className="absolute bottom-2 left-3 top-2 w-px bg-primary/30 sm:left-5" />

            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={`${item.year}-${item.title}`} className="relative">
                  <div className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] ring-4 ring-background sm:-left-[42px]" />

                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">{item.year}</p>
                  <h3 className="mb-3 text-base font-bold sm:text-lg">{item.title}</h3>
                  <div className="space-y-3 rounded-xl border border-primary/20 bg-card/40 p-4 sm:p-5">
                    {item.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                    <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      {item.videoUrl ? (
                        <button
                          type="button"
                          onClick={() => setOpenCaseVideoUrl(item.videoUrl!)}
                          className="inline-flex items-center gap-2 text-left text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                        >
                          <Play className="h-3.5 w-3.5 shrink-0 fill-primary" />
                          Assistir case
                        </button>
                      ) : null}
                      {item.siteUrl ? (
                        item.siteUrl.startsWith("/") ? (
                          <Link
                            to={item.siteUrl}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                          >
                            <Globe className="h-3.5 w-3.5" />
                            Ver site
                          </Link>
                        ) : (
                          <a
                            href={item.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                          >
                            <Globe className="h-3.5 w-3.5" />
                            Ver site
                          </a>
                        )
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Princípios de construção */}
        <section className="mt-12 sm:mt-16">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Layers className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">Princípios de construção</h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-primary/30 bg-card/50 p-5 sm:p-7">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Os projetos liderados por Guilherme seguem uma lógica comum: são concebidos como{" "}
              <span className="font-semibold text-primary">sistemas integrados</span>, onde cada elemento — operacional,
              financeiro, tecnológico e jurídico — é estruturado desde a origem.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Essa abordagem aumenta controle, reduz risco e permite escalar operações com{" "}
              <span className="font-semibold text-primary">consistência e previsibilidade</span>.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {principleCards.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-primary/30 bg-card/50 p-5 transition-colors hover:border-primary"
              >
                <p className="mb-2 text-2xl font-bold text-neon">{p.n}</p>
                <h3 className="mb-2 text-base font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* A Totus como plataforma */}
        <section className="mt-12 sm:mt-16">
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20">
              <Building2 className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-xl font-bold sm:text-2xl">A Totus como plataforma</h2>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <h3 className="mb-3 text-lg font-bold sm:text-xl">
                Onde cada operação se torna um <span className="text-primary">ativo</span>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                A Totus Asset consolida essa visão ao atuar como uma plataforma de gestão, organização e expansão das
                operações do grupo, estruturando capital, processos e governança. Mais do que centralizar operações, cria as
                condições para que cada iniciativa evolua como um ativo estruturado e escalável.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-primary/30 bg-card/50 p-4 text-center">
                  <p className="mb-1 text-2xl font-bold text-neon sm:text-3xl">{m.value}</p>
                  <p className="text-[10px] uppercase leading-tight tracking-wider text-muted-foreground sm:text-xs">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border-2 border-primary bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-6 text-center sm:mt-16 sm:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">Parcerias Estratégicas</p>
          <h3 className="mb-3 text-xl font-bold sm:text-2xl">
            Para parcerias, investimentos ou oportunidades estratégicas
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-sm text-muted-foreground">
            Vamos conversar sobre como a Totus Asset pode estruturar sua próxima operação.
          </p>
          <Button
            size="lg"
            className="gap-2 bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
            onClick={handleContact}
          >
            Falar com a Totus
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </main>

      <Dialog open={openCaseVideoUrl !== null} onOpenChange={(open) => !open && setOpenCaseVideoUrl(null)}>
        <DialogContent className="w-[min(92vw,420px,min(calc(85vh*9/16),100vw))] max-w-[min(92vw,420px,min(calc(85vh*9/16),100vw))] p-0 bg-black border-0 shadow-none [&>button]:text-white [&>button]:hover:opacity-100">
          {openCaseVideoUrl ? (
            <div className="overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
              <div className="aspect-[9/16] w-full bg-black">
                <iframe
                  key={openCaseVideoUrl}
                  title="Case em vídeo"
                  src={vimeoIframeSrc(openCaseVideoUrl)}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default LiderancaEstrategica;
