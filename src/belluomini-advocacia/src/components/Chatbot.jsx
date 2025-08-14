import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Sou o assistente virtual da Belluomini Advocacia. Como posso ajudar você hoje?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  
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

  const handleQuickQuestion = (question) => {
    setMessages([...messages, { text: question, isBot: false }]);
    
    // Simula resposta do bot
    setTimeout(() => {
      let answer = "";
      switch(question) {
        case "Quem é Mateus Belluomini?":
          answer = "Mateus Belluomini é formado pela USP, especialista em Direito Civil e Empresarial, com mais de 10 anos de experiência.";
          break;
        case "Quem é Gustavo Belluomini?":
          answer = "Gustavo Belluomini é formado pela PUC-SP, especializado em Direito Tributário e Contratual, com ampla experiência no mercado.";
          break;
        case "Quais são os horários de atendimento?":
          answer = "Atendemos de segunda a sexta, das 9h às 18h, e sábados das 9h às 13h.";
          break;
        case "Como marcar uma consulta?":
          answer = "Você pode marcar uma consulta pelo telefone (11) 9999-9999, WhatsApp ou através do formulário de contato em nosso site.";
          break;
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
              {msg.text}
            </div>
          ))}
          <div className="quick-questions">
            <button className="quick-question" onClick={() => handleQuickQuestion("Quem é Mateus Belluomini?")}>Quem é Mateus Belluomini?</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Quem é Gustavo Belluomini?")}>Quem é Gustavo Belluomini?</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Quais são os horários de atendimento?")}>Horários de atendimento</button>
            <button className="quick-question" onClick={() => handleQuickQuestion("Como marcar uma consulta?")}>Como marcar uma consulta?</button>
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