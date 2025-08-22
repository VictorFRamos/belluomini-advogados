import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
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