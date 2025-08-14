import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre Nós</h2>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Belluomini Advocacia" />
          </div>
          <div className="about-text">
            <h3>Belluomini Advocacia</h3>
            <p>Escritório de advocacia fundado por Mateus e Gustavo Belluomini, com mais de 15 anos de experiência combinada no mercado jurídico.</p>
            <p>Mateus Belluomini, formado pela renomada Faculdade de Direito da Universidade de São Paulo (USP), especialista em Direito Civil e Empresarial. Gustavo Belluomini, formado pela PUC-SP, com especialização em Direito Tributário e Contratual.</p>
            <p>Nosso escritório combina conhecimento jurídico aprofundado com estratégias inovadoras para alcançar os melhores resultados em cada caso, sempre com comprometimento ético e excelência no atendimento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;