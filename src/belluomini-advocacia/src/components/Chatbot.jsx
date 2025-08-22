import  { useState } from 'react';
import { 
  FaComments, 
  FaTimes, 
  FaPaperPlane,
  FaScroll,
  FaChartLine,
  FaShieldAlt,
  FaBalanceScale,
  FaBuilding
} from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { FaLandmark } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Sou o assistente virtual da Belluomini Advocacia. Como posso ajudar você hoje?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

    const services = [
    { icon: <FaShieldAlt />, title: "Direito do Consumidor", description: "Defesa de consumidores e fornecedores em casos de práticas abusivas, vícios de produtos ou serviços e descumprimento contratual." },
    { icon: <FaChartLine />, title: "Direito Empresarial", description: "Assessoria jurídica a empresas, estruturação societária, contratos comerciais e prevenção de litígios." },
    { icon: <FaScroll />, title: "Direito Civil", description: "Contratos, indenizações, responsabilidade civil, cobranças e demais relações jurídicas entre pessoas físicas ou jurídicas." },
    { icon: <FaLandmark />, title: "Direito Previdenciário", description: "Concessão e revisão de aposentadorias, pensões, auxílios e benefícios junto ao INSS." },
    { icon: <GiMoneyStack />, title: "Direito Tributário", description: "Planejamento fiscal, defesas administrativas e judiciais, revisão de malha fiscal, recuperação de tributos e orientação tributária." },
    { icon: <FaBalanceScale />, title: "Direito Trabalhista", description: "Atuação para empresas e trabalhadores em reclamações, rescisões, acordos e consultoria preventiva." },
    { icon: <FaBuilding />, title: "Holding Familiar", description: "Estruturação e gestão de holdings para proteção patrimonial, planejamento sucessório e otimização tributária." }
  ].sort((a, b) => a.title.localeCompare(b.title));
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Adiciona mensagem do usuário
    setMessages([...messages, { text: inputValue, isBot: false }]);
    setInputValue('');
    
    // Simula resposta do bot
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Agradecemos seu contato. Nossa equipe entrará em contato em breve para melhor atendê-lo.", 
        isBot: true 
      }]);
    }, 1000);
  };

  const formatServiceMessage = () => {
    return (
      <div className="services-list">
        <div className="service-item">
          <span className="service-text"><FaScroll className="service-icon-2" /><strong>Direito Civil</strong> - Contratos, indenizações, responsabilidade civil, cobranças e demais relações jurídicas entre pessoas físicas ou jurídicas.</span>
        </div>
        
        <div className="service-item">
          <span className="service-text"><FaShieldAlt className="service-icon-2" /><strong>Direito do Consumidor</strong> - Defesa de consumidores e fornecedores em casos de práticas abusivas, vícios de produtos ou serviços e descumprimento contratual.</span>
        </div>
        
        <div className="service-item">
          <span className="service-text"> <FaChartLine className="service-icon-2" /> <strong>Direito Empresarial</strong> - Assessoria jurídica a empresas, estruturação societária, contratos comerciais e prevenção de litígios.</span>
        </div>
        
        <div className="service-item">
          <span className="service-text"><FaLandmark className="service-icon-2" /> <strong>Direito Previdenciário</strong> - Concessão e revisão de aposentadorias, pensões, auxílios e benefícios junto ao INSS.</span>
        </div>
        
        <div className="service-item">
          <span className="service-text"><GiMoneyStack className="service-icon-2" /><strong>Direito Tributário</strong> - Planejamento fiscal, defesas administrativas e judiciais, revisão de malha fiscal, recuperação de tributos e orientação tributária.</span>
        </div>
        
        <div className="service-item">
          <span className="service-text"> <FaBalanceScale className="service-icon-2" /><strong>Direito Trabalhista</strong> - Atuação para empresas e trabalhadores em reclamações, rescisões, acordos e consultoria preventiva.</span>
        </div>
        
        <div className="service-item">
          <span className="service-text">  <FaBuilding className="service-icon-2" /><strong>Holding Familiar</strong> - Estruturação e gestão de holdings para proteção patrimonial, planejamento sucessório e otimização tributária.</span>
        </div>
      </div>
    );
  };

  const handleQuickQuestion = (question) => {
    setMessages([...messages, { text: question, isBot: false }]);
    
    // Simula resposta do bot
    setTimeout(() => {
      let answer;
      switch(question) {
        case "Quem é Mateus Belluomini?":
          answer = "Mateus Fernando Belluomini dos Santos, formado pela Faculdade Doutor Francisco Maeda (FAFRAM), além de contador, perito e administrador, é advogado com especialização em Direito Tributário, Previdenciário, Trabalhista, Empresarial e do Consumidor. Sua formação multidisciplinar oferece uma visão estratégica e integrada das demandas jurídicas e corporativas, aliando conhecimento técnico e experiência prática para a construção de soluções eficientes e seguras.";
          break;
        case "Quem é Gustavo Belluomini?":
          answer = "Luis Gustavo de Oliveira Belluomini, graduado pela Faculdade de Direito de Franca (FDF), é especialista em Direito Trabalhista, Previdenciário, Civil, Empresarial e do Consumidor, com ampla experiência na defesa de interesses de clientes e na prevenção de litígios, sempre com foco na segurança jurídica e na obtenção dos melhores resultados.";
          break;
        case "Quais são os horários de atendimento?":
          answer = "Atendemos de segunda a sexta, das 9h às 18h, e sábados das 9h às 13h.";
          break;
        case "Como marcar uma consulta?":
          answer = "Você pode marcar uma consulta pelo telefone (16) 99227-1825, WhatsApp ou através do formulário de contato em nosso site.";
          break;
        case "Quais serviços fornecidos?":
          return setMessages(prev => [...prev, { 
            text: "Nossos principais serviços:", 
            isBot: true,
            customComponent: formatServiceMessage()
          }]);
        default:
          answer = "Agradecemos seu contato. Nossa equipe entrará em contato em breve para melhor atendê-lo.";
      }
      setMessages(prev => [...prev, { text: answer, isBot: true }]);
    }, 1000);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={handleToggle}>
        <FaComments />
      </button>
      <div className="chatbot-box">
        <div className="chatbot-header">
          <h3>Assistente Virtual</h3>
          <button onClick={handleClose}><FaTimes /></button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}>
              {msg.customComponent || msg.text}
            </div>
          ))}
          <div className="quick-questions">
            <button className="quick-question" onClick={() => handleQuickQuestion("Quem é Mateus Belluomini?")}>Quem é Mateus Belluomini?</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Quem é Gustavo Belluomini?")}>Quem é Gustavo Belluomini?</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Quais são os horários de atendimento?")}>Horários de atendimento</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Como marcar uma consulta?")}>Como marcar uma consulta?</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Quais serviços fornecidos?")}>Quais serviços fornecidos?</button>
          </div>
        </div>
        <div className="chatbot-input">
          <form onSubmit={handleSendMessage}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..." 
            />
            <button type="submit"><FaPaperPlane /></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;