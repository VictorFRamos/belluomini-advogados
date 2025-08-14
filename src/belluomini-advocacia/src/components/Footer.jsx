import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="logo">Belluomini <span>Advocacia</span></div>
        <div className="social-links">
          <a href="https://wa.me/5516992534415" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/belluominiAdvocacia" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@belluominiAdvocacia" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://www.facebook.com/belluominiAdvocacia" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/company/belluominiAdvocacia" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Belluomini Advocacia - Todos os direitos reservados. OAB/SP 123.456
        </div>
      </div>
    </footer>
  );
};

export default Footer;