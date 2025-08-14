import React from 'react';
import { FaBriefcase, FaHome, FaUsers, FaGavel, FaBalanceScale, FaLandmark } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaBriefcase />, title: "Direito Empresarial", description: "Assessoria jurídica completa para empresas, desde constituição até questões contratuais, societárias e recuperação judicial." },
    { icon: <FaHome />, title: "Direito Imobiliário", description: "Atuação em compra e venda, locação, regularização de imóveis, usucapião e questões condominiais." },
    { icon: <FaUsers />, title: "Direito de Família", description: "Divórcios, inventários, pensão alimentícia, guarda de menores e demais questões familiares com sensibilidade e discrição." },
    { icon: <FaGavel />, title: "Direito Civil", description: "Atuação em ações indenizatórias, responsabilidade civil, contratos em geral e obrigações." },
    { icon: <FaBalanceScale />, title: "Direito do Consumidor", description: "Defesa dos direitos do consumidor em relações de consumo, vícios de produtos e serviços." },
    { icon: <FaLandmark />, title: "Direito Tributário", description: "Consultoria e planejamento tributário, defesa em execuções fiscais e recuperação de créditos." }
  ];

  return (
    <section id="services" className="section-services">
      <div className="container">
        <div className="section-title">
          <h2>Áreas de Atuação</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;