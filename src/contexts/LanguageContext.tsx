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
    'hero.title': 'Transformamos espaços em experiências',
    'hero.subtitle': 'Stands e cenografias que conectam marcas a pessoas',
    'hero.cta': 'Solicite um orçamento',
    'hero.secondary': 'Ver projetos',
    
    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções completas para seus eventos',
    'services.stands.title': 'Stands para Feiras',
    'services.stands.description': 'Projetos exclusivos que destacam sua marca em feiras e exposições',
    'services.scenography.title': 'Cenografia',
    'services.scenography.description': 'Ambientes imersivos que contam histórias e encantam visitantes',
    'services.events.title': 'Eventos Corporativos',
    'services.events.description': 'Espaços personalizados para congressos, convenções e lançamentos',
    'services.retail.title': 'Ativações de Marca',
    'services.retail.description': 'Experiências memoráveis que conectam sua marca ao público',
    
    // About
    'about.title': 'Sobre a TOTUS',
    'about.subtitle': 'Excelência em cenografia desde 2019',
    'about.description': 'Somos especialistas em criar experiências visuais que transformam eventos em momentos inesquecíveis.',
    'about.cta': 'Saiba mais',
    
    // Testimonials
    'testimonials.title': 'O que nossos clientes dizem',
    'testimonials.subtitle': 'Depoimentos de quem confia em nosso trabalho',
    
    // Footer
    'footer.description': 'Transformamos espaços em experiências memoráveis através de cenografia e stands de alta qualidade.',
    'footer.quicklinks': 'Links Rápidos',
    'footer.contact': 'Contato',
    'footer.followus': 'Siga-nos',
    'footer.rights': 'Todos os direitos reservados.',
    
    // About Page
    'about.hero.title': 'Sobre a TOTUS Cenografia',
    'about.hero.subtitle': 'Conheça nossa história e nossos valores',
    'about.hero.cta': 'Fale conosco',
    'about.services.title': 'Nossos Serviços',
    'about.differentials.title': 'Nossos Diferenciais',
    'about.commitments.title': 'Nossos Compromissos',
    'about.commitments.cta': 'Solicite um orçamento',
    
    // Portfolio
    'portfolio.title': 'Nosso Portfólio',
    'portfolio.subtitle': 'Conheça alguns dos nossos projetos',
    'portfolio.viewmore': 'VER MAIS PROJETOS!',
    'portfolio.back': 'Voltar ao Portfólio',
    
    // Contact Form
    'contact.title': 'Entre em Contato',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.phone': 'Telefone',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    'contact.sending': 'Enviando...',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.quote': 'Request a quote',
    
    // Hero
    'hero.title': 'We transform spaces into experiences',
    'hero.subtitle': 'Stands and scenography that connect brands to people',
    'hero.cta': 'Request a quote',
    'hero.secondary': 'View projects',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete solutions for your events',
    'services.stands.title': 'Trade Show Stands',
    'services.stands.description': 'Exclusive designs that highlight your brand at fairs and exhibitions',
    'services.scenography.title': 'Scenography',
    'services.scenography.description': 'Immersive environments that tell stories and enchant visitors',
    'services.events.title': 'Corporate Events',
    'services.events.description': 'Customized spaces for congresses, conventions and launches',
    'services.retail.title': 'Brand Activations',
    'services.retail.description': 'Memorable experiences that connect your brand to the audience',
    
    // About
    'about.title': 'About TOTUS',
    'about.subtitle': 'Excellence in scenography since 2019',
    'about.description': 'We are specialists in creating visual experiences that transform events into unforgettable moments.',
    'about.cta': 'Learn more',
    
    // Testimonials
    'testimonials.title': 'What our clients say',
    'testimonials.subtitle': 'Testimonials from those who trust our work',
    
    // Footer
    'footer.description': 'We transform spaces into memorable experiences through high-quality scenography and stands.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followus': 'Follow us',
    'footer.rights': 'All rights reserved.',
    
    // About Page
    'about.hero.title': 'About TOTUS Cenografia',
    'about.hero.subtitle': 'Learn about our history and values',
    'about.hero.cta': 'Contact us',
    'about.services.title': 'Our Services',
    'about.differentials.title': 'Our Differentials',
    'about.commitments.title': 'Our Commitments',
    'about.commitments.cta': 'Request a quote',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover some of our projects',
    'portfolio.viewmore': 'VIEW MORE PROJECTS!',
    'portfolio.back': 'Back to Portfolio',
    
    // Contact Form
    'contact.title': 'Get in Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Nosotros',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.quote': 'Solicitar presupuesto',
    
    // Hero
    'hero.title': 'Transformamos espacios en experiencias',
    'hero.subtitle': 'Stands y escenografías que conectan marcas con personas',
    'hero.cta': 'Solicitar presupuesto',
    'hero.secondary': 'Ver proyectos',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones completas para sus eventos',
    'services.stands.title': 'Stands para Ferias',
    'services.stands.description': 'Proyectos exclusivos que destacan su marca en ferias y exposiciones',
    'services.scenography.title': 'Escenografía',
    'services.scenography.description': 'Ambientes inmersivos que cuentan historias y encantan visitantes',
    'services.events.title': 'Eventos Corporativos',
    'services.events.description': 'Espacios personalizados para congresos, convenciones y lanzamientos',
    'services.retail.title': 'Activaciones de Marca',
    'services.retail.description': 'Experiencias memorables que conectan su marca con el público',
    
    // About
    'about.title': 'Sobre TOTUS',
    'about.subtitle': 'Excelencia en escenografía desde 2019',
    'about.description': 'Somos especialistas en crear experiencias visuales que transforman eventos en momentos inolvidables.',
    'about.cta': 'Saber más',
    
    // Testimonials
    'testimonials.title': 'Lo que dicen nuestros clientes',
    'testimonials.subtitle': 'Testimonios de quienes confían en nuestro trabajo',
    
    // Footer
    'footer.description': 'Transformamos espacios en experiencias memorables a través de escenografía y stands de alta calidad.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.followus': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    
    // About Page
    'about.hero.title': 'Sobre TOTUS Cenografia',
    'about.hero.subtitle': 'Conozca nuestra historia y valores',
    'about.hero.cta': 'Contáctenos',
    'about.services.title': 'Nuestros Servicios',
    'about.differentials.title': 'Nuestros Diferenciales',
    'about.commitments.title': 'Nuestros Compromisos',
    'about.commitments.cta': 'Solicitar presupuesto',
    
    // Portfolio
    'portfolio.title': 'Nuestro Portafolio',
    'portfolio.subtitle': 'Conozca algunos de nuestros proyectos',
    'portfolio.viewmore': '¡VER MÁS PROYECTOS!',
    'portfolio.back': 'Volver al Portafolio',
    
    // Contact Form
    'contact.title': 'Contáctenos',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
  },
};

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
