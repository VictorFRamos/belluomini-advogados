import React from 'react';
import { FaBriefcase, FaGavel, FaBalanceScale, FaLandmark, FaPiggyBank } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaBalanceScale />, title: "Direito do Consumidor", description: "Defesa dos direitos do consumidor em relações de consumo, vícios de produtos e serviços." },
    { icon: <FaBriefcase />, title: "Direito Empresarial", description: "Assessoria jurídica completa para empresas, desde constituição até questões contratuais, societárias e recuperação judicial." },
    { icon: <FaGavel />, title: "Direito Civil", description: "Atuação em ações indenizatórias, responsabilidade civil, contratos em geral e obrigações." },
    { icon: <FaPiggyBank />, title: "Direito Previdenciário", description: "Atuação na concessão e revisão de aposentadorias, pensões, auxílios e benefícios assistenciais, incluindo demandas contra o INSS e orientações para assegurar direitos previdenciários." },
    { icon: <FaLandmark />, title: "Direito Tributário", description: "Atuação em planejamento fiscal, defesas administrativas e judiciais, recuperação de tributos, contestações de autuações e orientação para cumprimento das obrigações tributárias." }
  ].sort((a, b) => a.title.localeCompare(b.title)); // Ordenação alfabética

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