import { 
  FaScroll,
  FaChartLine,
  FaShieldAlt,
  FaBalanceScale,
  FaBuilding
} from 'react-icons/fa';
  import { GiMoneyStack } from 'react-icons/gi';
import { FaLandmark } from 'react-icons/fa';

const Services = () => {
  const services = [
    { icon: <FaShieldAlt />, title: "Direito do Consumidor", description: "Defesa de consumidores e fornecedores em casos de práticas abusivas, vícios de produtos ou serviços e descumprimento contratual." },
    { icon: <FaChartLine />, title: "Direito Empresarial", description: "Assessoria jurídica a empresas, estruturação societária, contratos comerciais e prevenção de litígios." },
    { icon: <FaScroll />, title: "Direito Civil", description: "Contratos, indenizações, responsabilidade civil, cobranças e demais relações jurídicas entre pessoas físicas ou jurídicas." },
    { icon: <FaLandmark />, title: "Direito Previdenciário", description: "Concessão e revisão de aposentadorias, pensões, auxílios e benefícios junto ao INSS." },
    { icon: <GiMoneyStack />, title: "Direito Tributário", description: "Planejamento fiscal, defesas administrativas e judiciais, revisão de malha fiscal, recuperação de tributos e orientação tributária." },
    { icon: <FaBalanceScale />, title: "Direito Trabalhista", description: "Atuação para empresas e trabalhadores em reclamações, rescisões, acordos e consultoria preventiva." },
    { icon: <FaBuilding />, title: "Holding Familiar", description: "Estruturação e gestão de holdings para proteção patrimonial, planejamento sucessório e otimização tributária." }
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