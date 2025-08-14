import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-contact">
      <div className="container">
        <div className="section-title">
          <h2>Entre em Contato</h2>
        </div>
        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Endereço</h3>
            <p>Av. Paulista, 1000<br />São Paulo - SP<br />CEP: 01310-100</p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Telefone</h3>
            <p>(11) 9999-9999<br />(11) 8888-8888</p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>contato@belluominiAdvocacia.com.br<br />emergencias@belluominiAdvocacia.com.br</p>
          </div>
        </div>
        <div className="contact-form">
          <form id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;