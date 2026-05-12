import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Sobre Nós',
    'nav.portfolio': 'Portfólio',
    'nav.contact': 'Contato',
    'nav.quote': 'Solicite um orçamento',
    'leadership.caseCta': 'Assistir case',

    // Hero
    'hero.title1': 'Criamos experiências únicas ',
    'hero.title2': 'que inspiram, conectam e engajam',
    'hero.subtitle': 'Soluções completas em stands para eventos, da concepção à execução, cuidamos de cada passo para o sucesso do seu evento',
    'hero.cta': 'Nosso Portfólio',
    
    // Services
    'services.project.title': 'Desenvolvimento do Projeto',
    'services.project.subtitle': 'Transformamos suas ideias em projetos concretos',
    'services.project.description': 'Nosso serviço de desenvolvimento do projeto começa com uma compreensão profunda das suas necessidades e objetivos. Trabalhamos em estreita colaboração com você para criar um conceito de stand que não apenas atenda às suas expectativas, mas as supere. Desde o layout inicial até os detalhes finais, garantimos que cada aspecto do projeto seja cuidadosamente planejado para maximizar o impacto e a funcionalidade.',
    'services.3d.title': 'Imagens em 3D',
    'services.3d.subtitle': 'Visualize seu stand antes da montagem',
    'services.3d.description': 'Com nosso serviço de imagens em 3D, você pode visualizar seu stand antes mesmo da montagem. Utilizamos tecnologia de ponta para criar representações detalhadas e realistas do seu projeto. Isso permite ajustes e refinamentos antecipados, garantindo que o resultado seja exatamente como você imaginou. Nossas imagens em 3D ajudam a comunicar claramente a visão do projeto a todas as partes envolvidas.',
    'services.labor.title': 'Mão de Obra e Contratações',
    'services.labor.subtitle': 'Equipe especializada para cada detalhe',
    'services.labor.description': 'Garantimos que cada aspecto do seu stand seja montado por profissionais altamente qualificados. Nossa equipe de mão de obra e contratações inclui especialistas em montagem, eletricidade, carpintaria e outros serviços necessários para a construção do seu stand. Coordenamos todas as contratações extras, assegurando que o trabalho seja realizado com precisão e eficiência.',
    'services.assembly.title': 'Montagem do Stand',
    'services.assembly.subtitle': 'Montagem rápida e precisa para o sucesso do seu evento',
    'services.assembly.description': 'Nossa equipe de montagem é treinada para executar o projeto com rapidez e precisão, garantindo que seu stand esteja pronto a tempo para o evento. Utilizamos materiais de alta qualidade e técnicas avançadas de construção para garantir que cada stand seja robusto, seguro e esteticamente agradável. Estamos comprometidos em fornecer uma montagem impecável, que reflete a excelência da sua marca.',
    'services.activation.title': 'Ações de Ativação',
    'services.activation.subtitle': 'Engaje seu público com ações interativas',
    'services.activation.description': 'Além de criar stands para eventos impressionantes, também oferecemos serviços de ativação para engajar e envolver seu público. Desenvolvemos ações interativas e experiências memoráveis que capturam a atenção dos visitantes e promovem a sua marca. Seja através de demonstrações ao vivo, atividades interativas ou distribuição de brindes, nossas ações de ativação são projetadas para maximizar o impacto do seu stand.',
    
    // Comparison
    'comparison.title': 'Prova da Excelência em stands para eventos!',
    'comparison.titleHighlight': 'stands para eventos!',
    'comparison.subtitle': 'Veja as fotos com o antes e depois e comprove como nossos projetos 3D se transformam em stands para eventos perfeitos.',
    'comparison.viewMore': 'VEJA NOSSO PORTFÓLIO',
    'comparison.stand': 'Stand',
    'comparison.project3d': 'Projeto 3D',
    
    // Testimonials
    'testimonials.title': 'Experiências reais de quem confiou na',
    'testimonials.titleHighlight': 'TOTUS Cenografia',
    'testimonials.1.text': 'Passando aqui para agradecer pelo suporte que vocês me deram com relação ao estande. A execução ficou de acordo com projeto que foi feito, ficamos satisfeitos com o resultado, tivemos muitos elogios. Vamos para os próximos!',
    'testimonials.1.position': 'Financeiro Administrativo',
    'testimonials.2.text': 'A qualidade e experiência dos profissionais envolvidos, desde a fase inicial do projeto até a entrega do nosso stand, foram excepcionais. O time da TOTUS foi presente e solícito em todas as fases: pré, durante e pós-evento, um grande diferencial. O resultado foi ainda melhor, os nossos visitantes adoraram o stand e nós, como empresa, ficamos encantados ao ver nosso conceito e marca sendo transmitidos em cada um dos detalhes.',
    'testimonials.2.position': 'Country Manager Brazil',
    'testimonials.3.text': 'Fizemos parceria com a TOTUS Montagens para nosso evento recente em São Paulo, e ficamos muito satisfeitos com o serviço de construção de estande. O estande que eles projetaram foi visualmente atraente e capturou efetivamente a atenção dos participantes. As luzes adicionais que forneceram agregaram valor ao melhorar a visibilidade. Foi uma experiência satisfatória, e achamos o serviço definitivamente vale o preço. Consideraríamos colaborar com eles novamente no futuro!',
    'testimonials.3.position': 'Gerente de Marketing',
    'testimonials.4.text': 'Pessoal, bom dia. Passando para parabenizá-los pela entrega, pelo resultado final do projeto. Não estou pessoalmente, mas pelas fotos e vídeos que recebi, superou expectativas. Excelente trabalho de toda equipe 👏👏',
    'testimonials.4.position': 'Head de Marketing',
    
    // Contact Form
    'contact.title': 'Vamos transformar suas ideias em',
    'contact.titleHighlight': 'realidade',
    'contact.description': 'Preencha o formulário e nossa equipe entrará em contato para desenvolver o projeto perfeito para o seu evento.',
    'contact.benefit1': 'Atendimento personalizado',
    'contact.benefit2': 'Orçamento sem compromisso',
    'contact.benefit3': 'Resposta em até 24 horas',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Mensagem',
    'contact.submit': 'ENVIAR',
    'contact.success.title': 'Mensagem enviada!',
    'contact.success.description': 'Recebemos seu contato e retornaremos em breve.',
    'contact.error.title': 'Erro ao enviar',
    'contact.error.description': 'Tente novamente em alguns instantes.',
    
    // Footer
    'footer.description': 'Cenografia especializada em stands para eventos, criando experiências únicas e memoráveis.',
    'footer.navigation': 'Navegação',
    'footer.contact': 'Contato',
    'footer.contactBelow': 'Entre em contato abaixo:',
    'footer.phone': 'WhatsApp: (11) 94004-2546',
    'footer.downloadPortfolio': 'Baixe nosso Portfólio',
    'footer.name': 'Nome',
    'footer.company': 'Sua Empresa',
    'footer.email': 'Email',
    'footer.download': 'Baixar',
    'footer.downloadStarted': 'Download iniciado!',
    'footer.thanks': 'Obrigado pelo seu interesse.',
    'footer.rights': '© TOTUS Cenografia – Todos os direitos reservados – CNPJ:',
    'footer.privacyPolicy': 'Política de Privacidade',
    
    // About Hero
    'aboutHero.title1': 'Conheça a TOTUS ',
    'aboutHero.title2': 'Cenografia:',
    'aboutHero.paragraph1': 'Na TOTUS, entendemos que um estande é muito mais do que uma estrutura física. É o ponto de encontro entre sua marca e seus clientes, a materialização da sua visão e a principal ferramenta para gerar negócios e conexões em feiras e eventos.',
    'aboutHero.paragraph2': 'Com anos de experiência no mercado, nos especializamos em transformar conceitos em realidade, criando espaços que não apenas se destacam visualmente, mas que são projetados para serem funcionais, acolhedores e, acima de tudo, eficazes.',
    
    // About Services
    'aboutServices.title': 'Do Papel À Vida',
    'aboutServices.description': 'Através de uma cuidadosa seleção de materiais e técnicas construtivas, transformamos cada projeto em uma experiência única. Do conceito à finalização, nossa equipe de especialistas acompanha de perto cada etapa, garantindo a integração perfeita entre design e funcionalidade.',
    'aboutServices.neuro.title': 'Neuro-Arquitetura:',
    'aboutServices.neuro.description': 'Neuro-Arquitetura aplicada para que ambientes influenciem no comportamento e tempo de permanência dos visitantes.',
    'aboutServices.engagement.title': 'Estratégia de Engajamento:',
    'aboutServices.engagement.description': 'Cada área é pensada estrategicamente para gerar máximo impacto e converter visitantes em clientes.',
    'aboutServices.delivery.title': 'Entregas no prazo:',
    'aboutServices.delivery.description': 'Cumprimos prazos rigorosamente, garantindo que seu estande esteja pronto quando você precisar.',
    'aboutServices.sustainability.title': 'Sustentabilidade:',
    'aboutServices.sustainability.description': 'Materiais e práticas sustentáveis sempre que possível, reduzindo o impacto ambiental.',
    
    // About Differentials
    'aboutDifferentials.title': 'Nossos diferenciais: inovação e profissionalismo para resultados extraordinários',
    'aboutDifferentials.quality.title': 'Qualidade e Profissionalismo',
    'aboutDifferentials.quality.description': 'Trabalhamos em estreita colaboração com os clientes para garantir que cada detalhe seja cuidadosamente planejado e executado. Nosso compromisso com a qualidade vai além do design visual, resultando em stands para eventos que não apenas impressionam, mas também envolvem e inspiram. Cada projeto é tratado com a máxima seriedade e dedicação, garantindo um resultado que reflete a excelência da TOTUS Cenografia.',
    'aboutDifferentials.personalization.title': 'Compromisso com a Personalização',
    'aboutDifferentials.personalization.description': 'Cada cliente é único, e tratamos cada projeto com a atenção e cuidado que ele merece. Na TOTUS Cenografia, você não receberá soluções genéricas. Nosso serviço é totalmente personalizado, adaptado às suas necessidades e objetivos específicos. Desde o conceito inicial até a execução final, garantimos que seu stand seja um reflexo perfeito da sua visão e identidade.',
    'aboutDifferentials.innovation.title': 'Inovação e Criatividade',
    'aboutDifferentials.innovation.description': 'Estamos sempre buscando novas formas de impressionar e surpreender. Com uma equipe talentosa e apaixonada pela inovação, podemos transformar até mesmo as ideias mais ousadas em realidade. Nossos stands são projetados para se destacar e deixar uma impressão duradoura, combinando criatividade e tecnologia de ponta para criar experiências verdadeiramente únicas.',
    
    // About Commitments
    'aboutCommitments.title': 'Compromissos que guiam nosso trabalho',
    'aboutCommitments.description': 'Na TOTUS Cenografia, nossos princípios são a base que orienta todas as nossas ações e decisões. Nossa missão, visão e valores refletem nosso compromisso com a excelência, inovação e personalização, garantindo que cada projeto não só atenda, mas supere as expectativas dos nossos clientes.',
    'aboutCommitments.mission': 'Missão',
    'aboutCommitments.mission.text': 'Nossa missão é transformar ideias em experiências únicas e memoráveis, criando stands de alta qualidade que inspirem e engajem os públicos dos nossos clientes. Buscamos oferecer soluções completas e personalizadas, combinando inovação, criatividade e excelência em cada projeto.',
    'aboutCommitments.vision': 'Visão',
    'aboutCommitments.vision.text': 'Ser reconhecida como a principal empresa de montagem de stands no mercado, conhecida pela nossa capacidade de inovação, atenção aos detalhes e comprometimento com a satisfação do cliente. Queremos estabelecer parcerias duradouras, impactando positivamente cada evento que realizamos e destacando a importância de ambientes bem projetados.',
    'aboutCommitments.values': 'Valores',
    'aboutCommitments.values.excellence': 'Excelência: Compromisso com a qualidade e perfeição em todos os aspectos do nosso trabalho.',
    'aboutCommitments.values.innovation': 'Inovação: Busca constante por novas ideias e soluções criativas que diferenciem nossos projetos.',
    'aboutCommitments.values.personalization': 'Personalização: Atendimento exclusivo e adaptação dos nossos serviços às necessidades e objetivos específicos de cada cliente.',
    'aboutCommitments.values.professionalism': 'Profissionalismo: Conduta ética, transparência e respeito em todas as nossas interações e projetos.',
    'aboutCommitments.values.passion': 'Paixão: Dedicação e entusiasmo em transformar ideias em experiências que deixem uma marca duradoura.',
    'aboutCommitments.cta': 'Solicite um orçamento',
    
    // Portfolio
    'portfolio.title': 'PORTFÓLIO',
    'portfolio.subtitle': 'Explore nossos projetos de sucesso e veja como transformamos visões em realidade',
    'portfolio.banner': 'Cada stand para eventos que criamos é uma prova do nosso compromisso com a qualidade, inovação e personalização.',
    'portfolio.back': 'Voltar ao Portfólio',
    'portfolio.denso': 'Denso',
    'portfolio.bisSigma2026': 'BiS SiGMA 2026',
    'portfolio.sigma2024': 'BIS SIGMA 2024',
    'portfolio.automec': 'AUTOMEC',
    'portfolio.sigma2025': 'BiS SiGMA 2025',
    'portfolio.comingSoon': 'Em breve — fotos serão adicionadas em breve.',
    
    // Video Gallery
    'videoGallery.title': 'Veja nossos projetos em ação',
    'videoGallery.subtitle': 'Assista aos vídeos dos nossos stands e eventos',

    // Testimonials — vídeo
    'testimonials.video.headingBefore': 'Depoimentos em ',
    'testimonials.video.headingHighlight': 'vídeo',
    'testimonials.video.headingAfter': '',
    'testimonials.video.subtitle': 'Depoimentos reais dos nossos clientes em vídeo.',
    'testimonials.videoItem': 'Depoimento em vídeo',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.quote': 'Request a quote',
    'leadership.caseCta': 'Watch case',

    // Hero
    'hero.title1': 'We create unique experiences ',
    'hero.title2': 'that inspire, connect and engage',
    'hero.subtitle': 'Complete solutions in event stands, from conception to execution, we take care of every step for the success of your event',
    'hero.cta': 'See our portfolio',
    
    // Services
    'services.project.title': 'Project Development',
    'services.project.subtitle': 'We transform your ideas into concrete projects',
    'services.project.description': 'Our project development service starts with a deep understanding of your needs and goals. We work closely with you to create a stand concept that not only meets your expectations, but exceeds them. From initial layout to final details, we ensure every aspect of the project is carefully planned to maximize impact and functionality.',
    'services.3d.title': '3D Images',
    'services.3d.subtitle': 'Visualize your stand before assembly',
    'services.3d.description': 'With our 3D imaging service, you can visualize your stand even before assembly. We use cutting-edge technology to create detailed and realistic representations of your project. This allows for early adjustments and refinements, ensuring the result is exactly as you imagined. Our 3D images help clearly communicate the project vision to all parties involved.',
    'services.labor.title': 'Labor and Contracting',
    'services.labor.subtitle': 'Specialized team for every detail',
    'services.labor.description': 'We ensure that every aspect of your stand is assembled by highly qualified professionals. Our labor and contracting team includes specialists in assembly, electricity, carpentry and other services necessary for the construction of your stand. We coordinate all extra contracting, ensuring the work is carried out with precision and efficiency.',
    'services.assembly.title': 'Stand Assembly',
    'services.assembly.subtitle': 'Fast and precise assembly for the success of your event',
    'services.assembly.description': 'Our assembly team is trained to execute the project quickly and precisely, ensuring your stand is ready in time for the event. We use high-quality materials and advanced construction techniques to ensure each stand is robust, safe and aesthetically pleasing. We are committed to providing impeccable assembly that reflects the excellence of your brand.',
    'services.activation.title': 'Activation Actions',
    'services.activation.subtitle': 'Engage your audience with interactive actions',
    'services.activation.description': 'In addition to creating impressive event stands, we also offer activation services to engage and involve your audience. We develop interactive actions and memorable experiences that capture visitors attention and promote your brand. Whether through live demonstrations, interactive activities or giveaways, our activation actions are designed to maximize the impact of your stand.',
    
    // Comparison
    'comparison.title': 'Proof of Excellence in event stands!',
    'comparison.titleHighlight': 'event stands!',
    'comparison.subtitle': 'See the before and after photos and see how our 3D projects turn into perfect event stands.',
    'comparison.viewMore': 'SEE OUR PORTFOLIO',
    'comparison.stand': 'Stand',
    'comparison.project3d': '3D Project',
    
    // Testimonials
    'testimonials.title': 'Real experiences from those who trusted',
    'testimonials.titleHighlight': 'TOTUS Cenografia',
    'testimonials.1.text': 'Stopping by to thank you for the support you gave me regarding the stand. The execution was in accordance with the project that was made, we were satisfied with the result, we had many compliments. On to the next ones!',
    'testimonials.1.position': 'Administrative Financial',
    'testimonials.2.text': 'The quality and experience of the professionals involved, from the initial phase of the project to the delivery of our stand, were exceptional. The TOTUS team was present and helpful in all phases: pre, during and post-event, a great differentiator. The result was even better, our visitors loved the stand and we, as a company, were delighted to see our concept and brand being transmitted in every detail.',
    'testimonials.2.position': 'Country Manager Brazil',
    'testimonials.3.text': 'We partnered with TOTUS Montagens for our recent event in São Paulo, and we were very pleased with their stand construction service. The stand they designed was visually appealing and effectively captured attendees attention. The additional lights they provided added value by enhancing the visibility. It was a satisfactory experience, and we found the service definitely worth the price. We would consider collaborating with them again in the future!',
    'testimonials.3.position': 'Marketing Manager',
    'testimonials.4.text': 'Good morning, team. Just stopping by to congratulate you on the delivery and the final result of the project. I\'m not there in person, but from the photos and videos I received, it exceeded expectations. Excellent work by the entire team 👏👏',
    'testimonials.4.position': 'Head de Marketing',
    
    // Contact Form
    'contact.title': 'Let\'s transform your ideas into',
    'contact.titleHighlight': 'reality',
    'contact.description': 'Fill out the form and our team will contact you to develop the perfect project for your event.',
    'contact.benefit1': 'Personalized service',
    'contact.benefit2': 'No obligation quote',
    'contact.benefit3': 'Response within 24 hours',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.message': 'Message',
    'contact.submit': 'SEND',
    'contact.success.title': 'Message sent!',
    'contact.success.description': 'We received your contact and will respond soon.',
    'contact.error.title': 'Error sending',
    'contact.error.description': 'Please try again in a few moments.',
    
    // Footer
    'footer.description': 'Scenography specialized in event stands, creating unique and memorable experiences.',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.contactBelow': 'Get in touch below:',
    'footer.phone': 'Phone/SMS +5511940042546',
    'footer.downloadPortfolio': 'Download our Portfolio',
    'footer.name': 'Name',
    'footer.company': 'Your Company',
    'footer.email': 'Email',
    'footer.download': 'Download',
    'footer.downloadStarted': 'Download started!',
    'footer.thanks': 'Thank you for your interest.',
    'footer.rights': '© TOTUS Cenografia – All rights reserved – CNPJ:',
    'footer.privacyPolicy': 'Privacy Policy',
    
    // About Hero
    'aboutHero.title1': 'Meet TOTUS ',
    'aboutHero.title2': 'Cenografia:',
    'aboutHero.paragraph1': 'At TOTUS, we understand that a stand is much more than a physical structure. It is the meeting point between your brand and your customers, the materialization of your vision and the main tool for generating business and connections at fairs and events.',
    'aboutHero.paragraph2': 'With years of experience in the market, we specialize in transforming concepts into reality, creating spaces that not only stand out visually, but are designed to be functional, welcoming and, above all, effective.',
    
    // About Services
    'aboutServices.title': 'From Paper To Life',
    'aboutServices.description': 'Through a careful selection of materials and construction techniques, we transform each project into a unique experience. From concept to completion, our team of specialists closely monitors each stage, ensuring perfect integration between design and functionality.',
    'aboutServices.neuro.title': 'Neuro-Architecture:',
    'aboutServices.neuro.description': 'Applied Neuro-Architecture so that environments influence the behavior and length of stay of visitors.',
    'aboutServices.engagement.title': 'Engagement Strategy:',
    'aboutServices.engagement.description': 'Each area is strategically designed to generate maximum impact and convert visitors into customers.',
    'aboutServices.delivery.title': 'On-time Deliveries:',
    'aboutServices.delivery.description': 'We strictly meet deadlines, ensuring your stand is ready when you need it.',
    'aboutServices.sustainability.title': 'Sustainability:',
    'aboutServices.sustainability.description': 'Sustainable materials and practices whenever possible, reducing environmental impact.',
    
    // About Differentials
    'aboutDifferentials.title': 'Our differentials: innovation and professionalism for extraordinary results',
    'aboutDifferentials.quality.title': 'Quality and Professionalism',
    'aboutDifferentials.quality.description': 'We work closely with clients to ensure every detail is carefully planned and executed. Our commitment to quality goes beyond visual design, resulting in event stands that not only impress, but also engage and inspire. Each project is treated with the utmost seriousness and dedication, ensuring a result that reflects the excellence of TOTUS Cenografia.',
    'aboutDifferentials.personalization.title': 'Commitment to Personalization',
    'aboutDifferentials.personalization.description': 'Every customer is unique, and we treat each project with the attention and care it deserves. At TOTUS Cenografia, you will not receive generic solutions. Our service is fully customized, tailored to your specific needs and goals. From the initial concept to the final execution, we ensure that your stand is a perfect reflection of your vision and identity.',
    'aboutDifferentials.innovation.title': 'Innovation and Creativity',
    'aboutDifferentials.innovation.description': 'We are always looking for new ways to impress and surprise. With a talented team passionate about innovation, we can turn even the boldest ideas into reality. Our stands are designed to stand out and leave a lasting impression, combining creativity and cutting-edge technology to create truly unique experiences.',
    
    // About Commitments
    'aboutCommitments.title': 'Commitments that guide our work',
    'aboutCommitments.description': 'At TOTUS Cenografia, our principles are the foundation that guides all our actions and decisions. Our mission, vision and values reflect our commitment to excellence, innovation and personalization, ensuring that each project not only meets, but exceeds our clients\' expectations.',
    'aboutCommitments.mission': 'Mission',
    'aboutCommitments.mission.text': 'Our mission is to transform ideas into unique and memorable experiences, creating high-quality stands that inspire and engage our clients\' audiences. We seek to offer complete and personalized solutions, combining innovation, creativity and excellence in every project.',
    'aboutCommitments.vision': 'Vision',
    'aboutCommitments.vision.text': 'To be recognized as the leading stand assembly company in the market, known for our capacity for innovation, attention to detail and commitment to customer satisfaction. We want to establish lasting partnerships, positively impacting each event we carry out and highlighting the importance of well-designed environments.',
    'aboutCommitments.values': 'Values',
    'aboutCommitments.values.excellence': 'Excellence: Commitment to quality and perfection in all aspects of our work.',
    'aboutCommitments.values.innovation': 'Innovation: Constant search for new ideas and creative solutions that differentiate our projects.',
    'aboutCommitments.values.personalization': 'Personalization: Exclusive service and adaptation of our services to the specific needs and goals of each client.',
    'aboutCommitments.values.professionalism': 'Professionalism: Ethical conduct, transparency and respect in all our interactions and projects.',
    'aboutCommitments.values.passion': 'Passion: Dedication and enthusiasm in transforming ideas into experiences that leave a lasting mark.',
    'aboutCommitments.cta': 'Request a quote',
    
    // Portfolio
    'portfolio.title': 'PORTFOLIO',
    'portfolio.subtitle': 'Explore our successful projects and see how we transform visions into reality',
    'portfolio.banner': 'Every event stand we create is proof of our commitment to quality, innovation and personalization.',
    'portfolio.back': 'Back to Portfolio',
    'portfolio.denso': 'Denso',
    'portfolio.bisSigma2026': 'BiS SiGMA 2026',
    'portfolio.sigma2024': 'BIS SIGMA 2024',
    'portfolio.automec': 'AUTOMEC',
    'portfolio.sigma2025': 'BiS SiGMA 2025',
    'portfolio.comingSoon': 'Coming soon — photos will be added shortly.',
    
    // Video Gallery
    'videoGallery.title': 'See our projects in action',
    'videoGallery.subtitle': 'Watch videos of our stands and events',

    // Testimonials — video
    'testimonials.video.headingBefore': '',
    'testimonials.video.headingHighlight': 'Video',
    'testimonials.video.headingAfter': ' testimonials',
    'testimonials.video.subtitle': 'Real testimonials from our clients on video.',
    'testimonials.videoItem': 'Video testimonial',
  },
};

const GLOBAL_CTX_KEY = "__TOTUS_LANGUAGE_CONTEXT__";

const getGlobal = () => globalThis as unknown as Record<string, unknown>;

const LanguageContext =
  (getGlobal()[GLOBAL_CTX_KEY] as React.Context<LanguageContextType | undefined> | undefined) ??
  createContext<LanguageContextType | undefined>(undefined);

getGlobal()[GLOBAL_CTX_KEY] = LanguageContext;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('language');
      if (raw === 'es') {
        localStorage.setItem('language', 'pt');
        return 'pt';
      }
      if (raw === 'en' || raw === 'pt') return raw;
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const value = translations[language][key];
    return value !== undefined ? value : key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
