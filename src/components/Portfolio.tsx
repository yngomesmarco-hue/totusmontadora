const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-neon">Projetos</span>
          </h2>
        </div>

        {/* White Banner with Text */}
        <div className="bg-white py-16 rounded-lg">
          <div className="container mx-auto px-6 max-w-5xl">
            <p className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed">
              explore nossos projetos de sucesso e veja como transformamos visões em realidade. Cada stand para eventos que criamos é uma prova do nosso compromisso com a qualidade, inovação e personalização.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
