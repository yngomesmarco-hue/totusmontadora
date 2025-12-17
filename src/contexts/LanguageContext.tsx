import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

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
    
    // Hero
    'hero.title1': 'Criamos experiências únicas ',
    'hero.title2': 'que inspiram, conectam e engajam',
    'hero.subtitle': 'Soluções completas em stands para eventos, da concepção à execução, cuidamos de cada passo para o sucesso do seu evento',
    'hero.cta': 'Solicite um orçamento',
    
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
    'comparison.viewMore': 'VER MAIS PROJETOS!',
    'comparison.stand': 'Stand',
    'comparison.project3d': 'Projeto 3D',
    
    // Testimonials
    'testimonials.title': 'Experiências reais de quem confiou na',
    'testimonials.titleHighlight': 'TOTUS Cenografia',
    
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
    
    // Portfolio
    'portfolio.title': 'PORTFÓLIO',
    'portfolio.subtitle': 'Explore nossos projetos de sucesso e veja como transformamos visões em realidade',
    'portfolio.banner': 'Cada stand para eventos que criamos é uma prova do nosso compromisso com a qualidade, inovação e personalização.',
    'portfolio.back': 'Voltar ao Portfólio',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.quote': 'Request a quote',
    
    // Hero
    'hero.title1': 'We create unique experiences ',
    'hero.title2': 'that inspire, connect and engage',
    'hero.subtitle': 'Complete solutions in event stands, from conception to execution, we take care of every step for the success of your event',
    'hero.cta': 'Request a quote',
    
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
    'comparison.viewMore': 'VIEW MORE PROJECTS!',
    'comparison.stand': 'Stand',
    'comparison.project3d': '3D Project',
    
    // Testimonials
    'testimonials.title': 'Real experiences from those who trusted',
    'testimonials.titleHighlight': 'TOTUS Cenografia',
    
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
    'aboutCommitments.description': 'At TOTUS Cenografia, our principles are the foundation that guides all our actions and decisions. Our mission, vision and values reflect our commitment to excellence, innovation and personalization, ensuring that each project not only meets, but exceeds our clients expectations.',
    'aboutCommitments.mission': 'Mission',
    'aboutCommitments.mission.text': 'Our mission is to transform ideas into unique and memorable experiences, creating high-quality stands that inspire and engage our clients audiences. We seek to offer complete and personalized solutions, combining innovation, creativity and excellence in each project.',
    'aboutCommitments.vision': 'Vision',
    'aboutCommitments.vision.text': 'To be recognized as the leading stand assembly company in the market, known for our capacity for innovation, attention to detail and commitment to customer satisfaction. We want to establish lasting partnerships, positively impacting each event we carry out and highlighting the importance of well-designed environments.',
    'aboutCommitments.values': 'Values',
    'aboutCommitments.values.excellence': 'Excellence: Commitment to quality and perfection in all aspects of our work.',
    'aboutCommitments.values.innovation': 'Innovation: Constant search for new ideas and creative solutions that differentiate our projects.',
    'aboutCommitments.values.personalization': 'Personalization: Exclusive service and adaptation of our services to the specific needs and objectives of each client.',
    'aboutCommitments.values.professionalism': 'Professionalism: Ethical conduct, transparency and respect in all our interactions and projects.',
    'aboutCommitments.values.passion': 'Passion: Dedication and enthusiasm in transforming ideas into experiences that leave a lasting mark.',
    
    // Portfolio
    'portfolio.title': 'PORTFOLIO',
    'portfolio.subtitle': 'Explore our successful projects and see how we transform visions into reality',
    'portfolio.banner': 'Every event stand we create is proof of our commitment to quality, innovation and personalization.',
    'portfolio.back': 'Back to Portfolio',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.quote': 'Solicitar presupuesto',
    
    // Hero
    'hero.title1': 'Creamos experiencias únicas ',
    'hero.title2': 'que inspiran, conectan y cautivan',
    'hero.subtitle': 'Soluciones completas en stands para eventos, desde la concepción hasta la ejecución, cuidamos cada paso para el éxito de su evento',
    'hero.cta': 'Solicitar presupuesto',
    
    // Services
    'services.project.title': 'Desarrollo del Proyecto',
    'services.project.subtitle': 'Transformamos tus ideas en proyectos concretos',
    'services.project.description': 'Nuestro servicio de desarrollo del proyecto comienza con una comprensión profunda de sus necesidades y objetivos. Trabajamos en estrecha colaboración con usted para crear un concepto de stand que no solo cumpla con sus expectativas, sino que las supere. Desde el diseño inicial hasta los detalles finales, garantizamos que cada aspecto del proyecto sea cuidadosamente planificado para maximizar el impacto y la funcionalidad.',
    'services.3d.title': 'Imágenes en 3D',
    'services.3d.subtitle': 'Visualice su stand antes del montaje',
    'services.3d.description': 'Con nuestro servicio de imágenes 3D, puede visualizar su stand incluso antes del montaje. Utilizamos tecnología de punta para crear representaciones detalladas y realistas de su proyecto. Esto permite ajustes y refinamientos anticipados, garantizando que el resultado sea exactamente como lo imaginó. Nuestras imágenes 3D ayudan a comunicar claramente la visión del proyecto a todas las partes involucradas.',
    'services.labor.title': 'Mano de Obra y Contrataciones',
    'services.labor.subtitle': 'Equipo especializado para cada detalle',
    'services.labor.description': 'Garantizamos que cada aspecto de su stand sea montado por profesionales altamente calificados. Nuestro equipo de mano de obra y contrataciones incluye especialistas en montaje, electricidad, carpintería y otros servicios necesarios para la construcción de su stand. Coordinamos todas las contrataciones extras, asegurando que el trabajo se realice con precisión y eficiencia.',
    'services.assembly.title': 'Montaje del Stand',
    'services.assembly.subtitle': 'Montaje rápido y preciso para el éxito de su evento',
    'services.assembly.description': 'Nuestro equipo de montaje está entrenado para ejecutar el proyecto con rapidez y precisión, garantizando que su stand esté listo a tiempo para el evento. Utilizamos materiales de alta calidad y técnicas de construcción avanzadas para garantizar que cada stand sea robusto, seguro y estéticamente agradable. Estamos comprometidos en proporcionar un montaje impecable, que refleja la excelencia de su marca.',
    'services.activation.title': 'Acciones de Activación',
    'services.activation.subtitle': 'Involucre a su público con acciones interactivas',
    'services.activation.description': 'Además de crear stands para eventos impresionantes, también ofrecemos servicios de activación para involucrar y cautivar a su público. Desarrollamos acciones interactivas y experiencias memorables que capturan la atención de los visitantes y promueven su marca. Ya sea a través de demostraciones en vivo, actividades interactivas o distribución de obsequios, nuestras acciones de activación están diseñadas para maximizar el impacto de su stand.',
    
    // Comparison
    'comparison.title': '¡Prueba de la Excelencia en stands para eventos!',
    'comparison.titleHighlight': '¡stands para eventos!',
    'comparison.subtitle': 'Vea las fotos del antes y después y compruebe cómo nuestros proyectos 3D se transforman en stands para eventos perfectos.',
    'comparison.viewMore': '¡VER MÁS PROYECTOS!',
    'comparison.stand': 'Stand',
    'comparison.project3d': 'Proyecto 3D',
    
    // Testimonials
    'testimonials.title': 'Experiencias reales de quienes confiaron en',
    'testimonials.titleHighlight': 'TOTUS Cenografia',
    
    // Footer
    'footer.description': 'Escenografía especializada en stands para eventos, creando experiencias únicas y memorables.',
    'footer.navigation': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.contactBelow': 'Contáctenos a continuación:',
    'footer.phone': 'WhatsApp: (11) 94004-2546',
    'footer.downloadPortfolio': 'Descargue nuestro Portafolio',
    'footer.name': 'Nombre',
    'footer.company': 'Su Empresa',
    'footer.email': 'Correo electrónico',
    'footer.download': 'Descargar',
    'footer.downloadStarted': '¡Descarga iniciada!',
    'footer.thanks': 'Gracias por su interés.',
    'footer.rights': '© TOTUS Cenografia – Todos los derechos reservados – CNPJ:',
    'footer.privacyPolicy': 'Política de Privacidad',
    
    // About Hero
    'aboutHero.title1': 'Conozca TOTUS ',
    'aboutHero.title2': 'Cenografia:',
    'aboutHero.paragraph1': 'En TOTUS, entendemos que un stand es mucho más que una estructura física. Es el punto de encuentro entre su marca y sus clientes, la materialización de su visión y la principal herramienta para generar negocios y conexiones en ferias y eventos.',
    'aboutHero.paragraph2': 'Con años de experiencia en el mercado, nos especializamos en transformar conceptos en realidad, creando espacios que no solo se destacan visualmente, sino que están diseñados para ser funcionales, acogedores y, sobre todo, efectivos.',
    
    // About Services
    'aboutServices.title': 'Del Papel A La Vida',
    'aboutServices.description': 'A través de una cuidadosa selección de materiales y técnicas constructivas, transformamos cada proyecto en una experiencia única. Desde el concepto hasta la finalización, nuestro equipo de especialistas acompaña de cerca cada etapa, garantizando la integración perfecta entre diseño y funcionalidad.',
    'aboutServices.neuro.title': 'Neuro-Arquitectura:',
    'aboutServices.neuro.description': 'Neuro-Arquitectura aplicada para que los ambientes influyan en el comportamiento y tiempo de permanencia de los visitantes.',
    'aboutServices.engagement.title': 'Estrategia de Compromiso:',
    'aboutServices.engagement.description': 'Cada área está pensada estratégicamente para generar máximo impacto y convertir visitantes en clientes.',
    'aboutServices.delivery.title': 'Entregas a tiempo:',
    'aboutServices.delivery.description': 'Cumplimos plazos rigurosamente, garantizando que su stand esté listo cuando lo necesite.',
    'aboutServices.sustainability.title': 'Sostenibilidad:',
    'aboutServices.sustainability.description': 'Materiales y prácticas sostenibles siempre que sea posible, reduciendo el impacto ambiental.',
    
    // About Differentials
    'aboutDifferentials.title': 'Nuestros diferenciales: innovación y profesionalismo para resultados extraordinarios',
    'aboutDifferentials.quality.title': 'Calidad y Profesionalismo',
    'aboutDifferentials.quality.description': 'Trabajamos en estrecha colaboración con los clientes para garantizar que cada detalle sea cuidadosamente planificado y ejecutado. Nuestro compromiso con la calidad va más allá del diseño visual, resultando en stands para eventos que no solo impresionan, sino que también involucran e inspiran. Cada proyecto es tratado con la máxima seriedad y dedicación, garantizando un resultado que refleja la excelencia de TOTUS Cenografia.',
    'aboutDifferentials.personalization.title': 'Compromiso con la Personalización',
    'aboutDifferentials.personalization.description': 'Cada cliente es único, y tratamos cada proyecto con la atención y cuidado que merece. En TOTUS Cenografia, no recibirá soluciones genéricas. Nuestro servicio es totalmente personalizado, adaptado a sus necesidades y objetivos específicos. Desde el concepto inicial hasta la ejecución final, garantizamos que su stand sea un reflejo perfecto de su visión e identidad.',
    'aboutDifferentials.innovation.title': 'Innovación y Creatividad',
    'aboutDifferentials.innovation.description': 'Siempre estamos buscando nuevas formas de impresionar y sorprender. Con un equipo talentoso y apasionado por la innovación, podemos transformar incluso las ideas más atrevidas en realidad. Nuestros stands están diseñados para destacar y dejar una impresión duradera, combinando creatividad y tecnología de punta para crear experiencias verdaderamente únicas.',
    
    // About Commitments
    'aboutCommitments.title': 'Compromisos que guían nuestro trabajo',
    'aboutCommitments.description': 'En TOTUS Cenografia, nuestros principios son la base que orienta todas nuestras acciones y decisiones. Nuestra misión, visión y valores reflejan nuestro compromiso con la excelencia, innovación y personalización, garantizando que cada proyecto no solo cumpla, sino que supere las expectativas de nuestros clientes.',
    'aboutCommitments.mission': 'Misión',
    'aboutCommitments.mission.text': 'Nuestra misión es transformar ideas en experiencias únicas y memorables, creando stands de alta calidad que inspiren y cautiven a los públicos de nuestros clientes. Buscamos ofrecer soluciones completas y personalizadas, combinando innovación, creatividad y excelencia en cada proyecto.',
    'aboutCommitments.vision': 'Visión',
    'aboutCommitments.vision.text': 'Ser reconocida como la principal empresa de montaje de stands en el mercado, conocida por nuestra capacidad de innovación, atención a los detalles y compromiso con la satisfacción del cliente. Queremos establecer asociaciones duraderas, impactando positivamente cada evento que realizamos y destacando la importancia de ambientes bien diseñados.',
    'aboutCommitments.values': 'Valores',
    'aboutCommitments.values.excellence': 'Excelencia: Compromiso con la calidad y perfección en todos los aspectos de nuestro trabajo.',
    'aboutCommitments.values.innovation': 'Innovación: Búsqueda constante de nuevas ideas y soluciones creativas que diferencien nuestros proyectos.',
    'aboutCommitments.values.personalization': 'Personalización: Atención exclusiva y adaptación de nuestros servicios a las necesidades y objetivos específicos de cada cliente.',
    'aboutCommitments.values.professionalism': 'Profesionalismo: Conducta ética, transparencia y respeto en todas nuestras interacciones y proyectos.',
    'aboutCommitments.values.passion': 'Pasión: Dedicación y entusiasmo en transformar ideas en experiencias que dejen una marca duradera.',
    
    // Portfolio
    'portfolio.title': 'PORTAFOLIO',
    'portfolio.subtitle': 'Explore nuestros proyectos exitosos y vea cómo transformamos visiones en realidad',
    'portfolio.banner': 'Cada stand para eventos que creamos es una prueba de nuestro compromiso con la calidad, innovación y personalización.',
    'portfolio.back': 'Volver al Portafolio',
  },
};

// Language context for internationalization
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
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
