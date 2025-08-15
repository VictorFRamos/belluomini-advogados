import React from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="logo">Belluomini <span>Advocacia</span></div>
        <div className="social-links">
          <a href="https://wa.me/5516992271825" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/belluomini.advogados" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@belluomini.advocacia" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Belluomini Advocacia - Todos os direitos reservados. OAB/SP 123.456
        </div>
      </div>
    </footer>
  );
};

export default Footer;