import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/** Imagem de capa usada no OG do site de referência (substitua por foto local se preferir). */
const HERO_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/YsUifBCkcQYnfLcY49O9s53Zmhn1/social-images/social-1778195437426-Design_sem_nome.webp";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=11940042546&text=Oi%2C+gostaria+de+falar+sobre+parcerias+com+a+Totus+Asset&type=phone_number&app_absent=0";

type TrajectoryItem = {
  year: string;
  title: string;
  body: string;
  caseLabel?: string;
  caseHref?: string;
};

const TRAJECTORY: TrajectoryItem[] = [
  {
    year: "2026",
    title: "Fundação da Totus Asset",
    body: "A Totus Asset foi estruturada como a holding estratégica do grupo, com o objetivo de consolidar operações, organizar capital e viabilizar crescimento com governança e escala. A empresa atua na gestão de ativos, estruturação financeira e desenvolvimento de novos negócios, conectando investidores a operações reais com lastro operacional.\n\nSeu modelo se baseia em controle rigoroso, previsibilidade de resultados e eficiência na alocação de recursos, criando uma plataforma que sustenta o crescimento das empresas do grupo de forma integrada. Mais do que uma holding, a Totus Asset funciona como um sistema de inteligência operacional e financeira, responsável por transformar operações em ativos estruturados.",
  },
  {
    year: "2025",
    title: "Fundação da LocaMotoFácil",
    body: "A LocaMotoFácil nasce para resolver uma ineficiência estrutural do mercado de mobilidade: o acesso limitado ao crédito para aquisição de veículos produtivos. A empresa estrutura uma alternativa baseada em locação, permitindo que profissionais de entrega e transporte tenham acesso imediato a ativos geradores de renda.\n\nA operação combina tecnologia proprietária, automação de processos, telemetria e controle de risco em tempo real, criando um modelo escalável, com alta taxa de ocupação e previsibilidade operacional. Ao integrar gestão, cobrança, monitoramento e manutenção em uma única plataforma, a LocaMotoFácil transforma locação em um sistema eficiente de geração de receita recorrente.",
  },
  {
    year: "2024",
    title: "Fundação da LocaCarroFácil",
    body: "A LocaCarroFácil foi criada com foco em eficiência operacional e giro de ativos no segmento de mobilidade urbana. A empresa oferece veículos prontos para operação por motoristas de aplicativo, eliminando barreiras de entrada como crédito, burocracia e tempo de aquisição.\n\nSeu modelo privilegia simplicidade, velocidade e alta ocupação, estruturando uma operação enxuta, com controle direto sobre performance dos ativos. A LocaCarroFácil consolida uma abordagem prática e orientada a resultado dentro do ecossistema de mobilidade do grupo.",
  },
  {
    year: "2023",
    title: "Fundação da Totus Cenografia",
    body: "A Totus Cenografia foi criada para atuar no desenvolvimento e execução de projetos cenográficos e stands premium para grandes eventos e feiras corporativas. A empresa rapidamente se posicionou como uma operação de alcance nacional, com capacidade de entrega para projetos de alta complexidade.\n\nSeus projetos são concebidos a partir da integração entre arquitetura, tecnologia e estratégia de marca, incorporando princípios de neuroarquitetura para influenciar comportamento, aumentar tempo de permanência e potencializar engajamento. Mais do que estruturas físicas, a Totus desenvolve ambientes que operam como ferramentas de comunicação e conversão.",
    caseLabel: "Assistir case",
    caseHref: "#",
  },
  {
    year: "2020",
    title: "Fundação da Liga de Combate ao Câncer",
    body: "Em parceria com o Hospital de Amor (antigo Hospital de Câncer de Barretos), foi concebida a Liga de Combate ao Câncer — uma iniciativa de impacto social estruturada a partir da aplicação integrada de tecnologia, design de experiência e estratégia comportamental.\n\nO projeto foi desenhado para atuar na base da cadeia de conscientização, transformando crianças do ensino fundamental em agentes multiplicadores de informação em suas comunidades. Por meio de uma jornada interativa, imersiva e gamificada, a iniciativa promove engajamento ativo e incentiva a realização de exames preventivos de câncer de mama e colo do útero.\n\nReconhecida internacionalmente, a iniciativa recebeu certificação do American College of Surgeons como uma das melhores práticas globais em prevenção do câncer. Esse projeto estabelece as bases conceituais que hoje orientam a atuação do grupo: operações concebidas como sistemas completos, com foco em impacto real, engajamento e controle.",
    caseLabel: "Assistir case",
    caseHref: "#",
  },
  {
    year: "2012",
    title: "Fundação da DigToten",
    body: "A DigToten foi pioneira no desenvolvimento de tecnologias interativas para marketing promocional, criando soluções que ampliam o engajamento do público em eventos e ativações de marca. A empresa também atuou na gestão de credenciamento e controle de acesso, sendo uma das primeiras a implementar sistemas de autoatendimento em feiras e congressos.\n\nSua atuação integrou tecnologia, experiência do usuário e eficiência operacional em projetos para grandes marcas nacionais e internacionais, como Embraer, Ambev, Coca-Cola, Elvis Presley Enterprises e CVC. A DigToten antecipou tendências que hoje se consolidaram no mercado, posicionando a tecnologia como elemento central na experiência de eventos.",
    caseLabel: "Assistir case",
    caseHref: "#",
  },
  {
    year: "2005",
    title: "Fundação da GPN",
    body: "A GPN foi criada com o objetivo de estruturar um modelo inovador para gestão de reprodução de documentos acadêmicos com controle de direitos autorais. Em parceria com o Ministério da Cultura, Biblioteca Nacional, Agência Internacional do ISBN e Banco do Brasil, desenvolveu um sistema capaz de registrar e viabilizar o repasse de direitos autorais a cada página copiada de obras técnicas e literárias.\n\nA operação permitiu conciliar acesso democrático ao conhecimento com remuneração justa aos autores, criando um modelo sustentável e juridicamente estruturado. Instalada na Universidade Católica de Brasília e no UniCEUB, a empresa chegou a atender mais de 40 mil alunos diariamente, consolidando uma solução de grande escala dentro do ambiente acadêmico.",
    caseLabel: "Assistir case",
    caseHref: "#",
  },
  {
    year: "2003",
    title: "Produção de Festival Internacional de Música",
    body: "Em parceria com a Rede Globo e com patrocínio de grandes grupos como Banco do Brasil, Claro, Vale e Petrobras, foi realizado o maior festival de música da América Latina naquele ano, reunindo mais de 40 bandas nacionais e internacionais.\n\nO projeto teve desdobramento em um especial televisivo exibido após o programa Fantástico, alcançando mais de 50% dos televisores ligados no país. A operação envolveu coordenação de múltiplos stakeholders, produção em larga escala e integração entre evento físico e mídia de massa.",
    caseLabel: "Assistir case",
    caseHref: "#",
  },
  {
    year: "1998",
    title: "Fundação da Suporte de Produção",
    body: "A Suporte de Produção foi criada com foco em conteúdo audiovisual institucional, desenvolvendo vídeos publicitários e documentários para organizações públicas e privadas. Atendeu clientes como Sebrae, TV Escola e Caixa Econômica Federal.\n\nA empresa consolidou experiência na construção de narrativas audiovisuais estratégicas, conectando comunicação, conteúdo e objetivos institucionais de forma clara e eficiente.",
  },
  {
    year: "1994",
    title: 'Produção do Programa "YourFace" (Canadá)',
    body: 'Produziu, em Estevan, Canadá, o programa semanal "YourFace", voltado à cobertura de eventos esportivos e culturais, além da discussão de temas relevantes para o público jovem.\n\nA experiência internacional contribuiu para o desenvolvimento de uma visão ampliada sobre comunicação, audiência e construção de conteúdo, antecipando conceitos que hoje são centrais na economia da atenção.',
  },
  {
    year: "1991",
    title: "Fundação da Oficina de Imagens",
    body: "Aos 14 anos, fundou a Oficina de Imagens, primeira produtora audiovisual de sua cidade natal, Barretos/SP, em sociedade com seu professor de fotografia e vídeo, Paulo Marques.\n\nAos 15 anos, realizou seu primeiro contrato de grande porte, produzindo a campanha política do então candidato a prefeito Dr. Hélio Navarro. O projeto marcou o início de uma trajetória empreendedora baseada em execução, responsabilidade e capacidade de entrega em contextos reais.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Estrutura antes da escala",
    subtitle: "Construir bases sólidas antes de buscar volume.",
  },
  {
    n: "02",
    title: "Controle antes do crescimento",
    subtitle: "Crescer com governança, métricas e previsibilidade.",
  },
  {
    n: "03",
    title: "Sistema antes da execução",
    subtitle: "Pensar o todo como mecanismo integrado, não como tarefas isoladas.",
  },
];

const STATS = [
  { value: "1991", label: "Primeiro empreendimento" },
  { value: "35+", label: "Anos de trajetória" },
  { value: "4", label: "Empresas ativas no grupo" },
  { value: "3", label: "Setores de atuação" },
];

const LiderancaEstrategica = () => {
  const navigate = useNavigate();

  const scrollToTrajectory = () => {
    document.getElementById("trajetoria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="container mx-auto max-w-full px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 space-y-6 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-neon">Liderança Estratégica</p>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">Guilherme Camargo</h1>
              <p className="text-lg text-neon md:text-xl">Fundador & CEO da Totus Asset</p>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Empreendedor com atuação multissetorial, responsável pela estruturação de operações escaláveis nos setores de
                cenografia, mobilidade e tecnologia, com foco em eficiência operacional, controle e geração de valor
                sustentável.
              </p>
              <Button
                size="lg"
                className="rounded-lg bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
                onClick={scrollToTrajectory}
              >
                Ver trajetória completa
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl ring-1 ring-neon/20">
                <img
                  src={HERO_IMAGE}
                  alt="Guilherme Camargo"
                  className="h-auto w-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Visão */}
        <section className="container mx-auto mt-24 max-w-full px-6">
          <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Visão e abordagem</h2>
          <div className="grid max-w-4xl gap-6 text-muted-foreground md:text-lg">
            <p className="leading-relaxed">
              A atuação de Guilherme é orientada pela construção de operações estruturadas, onde estratégia, execução e
              controle caminham de forma integrada. Ao longo de sua trajetória, desenvolveu modelos capazes de transformar
              atividades operacionais em ativos organizados, com previsibilidade, escala e governança.
            </p>
            <p className="leading-relaxed">
              Seu trabalho conecta diferentes disciplinas — tecnologia, cenografia, experiência do usuário, gestão financeira
              e estruturação jurídica — com o objetivo de criar sistemas completos, capazes de sustentar crescimento
              consistente e geração de valor no longo prazo.
            </p>
          </div>
        </section>

        {/* Trajetória */}
        <section id="trajetoria" className="container mx-auto mt-24 max-w-full scroll-mt-28 px-6">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Trajetória</h2>
          <p className="mb-14 max-w-2xl text-muted-foreground">
            Linha do tempo dos marcos que estruturam o ecossistema Totus e empresas associadas.
          </p>
          <div className="relative max-w-4xl border-l-2 border-neon/40 pl-8 md:pl-12">
            {TRAJECTORY.map((item) => (
              <div key={item.year + item.title} className="relative pb-16 last:pb-0">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-neon bg-background md:-left-[13px]" />
                <p className="mb-2 text-sm font-bold text-neon">{item.year}</p>
                <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">{item.title}</h3>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {item.caseLabel ? (
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="border-neon text-neon hover:bg-neon/10"
                      asChild
                    >
                      <a href={item.caseHref ?? "#"} target="_blank" rel="noopener noreferrer">
                        {item.caseLabel}
                      </a>
                    </Button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Princípios */}
        <section className="container mx-auto mt-24 max-w-full px-6">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Princípios de construção</h2>
          <p className="mb-12 max-w-3xl text-muted-foreground md:text-lg">
            Os projetos liderados por Guilherme seguem uma lógica comum: são concebidos como sistemas integrados, onde cada
            elemento — operacional, financeiro, tecnológico e jurídico — é estruturado desde a origem.
            <br />
            <br />
            Essa abordagem aumenta controle, reduz risco e permite escalar operações com consistência e previsibilidade.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.n}
                className="rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-neon/50"
              >
                <p className="mb-4 text-4xl font-bold text-neon/80">{p.n}</p>
                <h3 className="mb-3 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Plataforma + stats */}
        <section className="container mx-auto mt-24 max-w-full px-6">
          <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">A Totus como plataforma</h2>
          <p className="mb-2 text-xl font-semibold text-neon">Onde cada operação se torna um ativo</p>
          <p className="mb-12 max-w-3xl text-muted-foreground md:text-lg">
            A Totus Asset consolida essa visão ao atuar como uma plataforma de gestão, organização e expansão das operações
            do grupo, estruturando capital, processos e governança. Mais do que centralizar operações, cria as condições para
            que cada iniciativa evolua como um ativo estruturado e escalável.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-6 text-center md:text-left"
              >
                <p className="text-3xl font-bold text-neon md:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Parcerias */}
        <section className="container mx-auto mt-24 max-w-full px-6">
          <div className="rounded-2xl border border-neon/30 bg-gradient-to-br from-card to-background p-10 md:p-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neon">Parcerias Estratégicas</p>
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Para parcerias, investimentos ou oportunidades estratégicas
            </h2>
            <p className="mb-8 max-w-2xl text-muted-foreground">
              Vamos conversar sobre como a Totus Asset pode estruturar sua próxima operação.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-lg bg-neon font-semibold text-black glow-neon hover:bg-neon/90"
                onClick={() => window.open(WHATSAPP, "_blank")}
              >
                Falar com a Totus
              </Button>
              <Button size="lg" variant="outline" className="border-border" onClick={() => navigate("/portfolio")}>
                Ver portfólio TOTUS Cenografia
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LiderancaEstrategica;
