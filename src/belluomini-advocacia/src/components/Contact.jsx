import React, { useRef, useState }  from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


const Contact = () => {

    const form = useRef();
const [status, setStatus] = useState("");
  
const sendEmail = async (e) => {
    e.preventDefault();
    
    // Mostrar estado de carregamento
    setStatus("Enviando mensagem...");
    
    try {
      // Preparar os dados do formulário
      const formData = {
        nome: form.current.nome.value,
        email: form.current.email.value,
        telefone: form.current.telefone.value,
        mensagem: form.current.mensagem.value
      };

      // Fazer a requisição para a API
      const response = await fetch('https://u3hhepw232.execute-api.sa-east-1.amazonaws.com/Prod/api/Email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Verificar se a requisição foi bem-sucedida
      if (response.ok) {
        const data = await response.json();
        setStatus("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        
        // Limpar o formulário após o envio bem-sucedido
        form.current.reset();
      } else {
        // Se a resposta não estiver OK, tentar obter detalhes do erro
        const errorData = await response.text();
        setStatus(`Erro ao enviar mensagem: ${response.status} - ${errorData}`);
      }
    } catch (error) {
      // Capturar erros de rede ou outros problemas
      console.error('Erro ao enviar formulário:', error);
      setStatus("Erro de conexão. Por favor, tente novamente mais tarde.");
    }
  };
  
  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="section-title">
          <h2>Entre em Contato</h2>
        </div>
        <div className="contact-info-section">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Endereço</h3>
            <p>Avenida Orestes Quercia, 1747, Sala B - A<br />São Joaquim da Barra - SP<br />CEP: 14600-000</p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Telefone</h3>
            <p>(16) 99227-1825</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>belluominiadvocacia@gmail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <form id="contactForm" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" name="nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="telefone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="mensagem" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensagem</button>
          </form>
            {status && <p>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;