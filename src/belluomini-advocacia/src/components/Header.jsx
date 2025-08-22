import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo"><img src="images/logo.jpg" alt="Belluomini Advocacia" /></div>
        <nav>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Áreas de Atuação</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <FaBars className="mobile-menu-icon" />
        </nav>
      </div>
    </header>
  );
};

export default Header;