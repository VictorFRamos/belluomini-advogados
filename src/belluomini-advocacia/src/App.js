import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Chatbot from './components/Chatbot';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
        <title>Belluomini Advocacia</title>
        <meta name="description" content="Escritório de advocacia fundado por Mateus Fernando Belluomini dos Santos e Luis Gustavo de Oliveira Belluomini, com sólida experiência e atuação nas principais áreas do Direito." />
        <meta property="og:title" content="Belluomini Advocacia" />
        <meta property="og:description" content="Escritório de advocacia fundado por Mateus Fernando Belluomini dos Santos e Luis Gustavo de Oliveira Belluomini, com sólida experiência e atuação nas principais áreas do Direito." />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
      </div>
      </>
  );
}

export default App;