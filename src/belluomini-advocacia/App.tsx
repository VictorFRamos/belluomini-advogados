
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFounders from './components/AboutFounders';
import Services from './components/Services';
import Features from './components/Features';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutFounders />
      <Services />
      
      {/* Mensagem de Compromisso */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-2xl font-serif italic mb-8">
            "Atuamos com ética, empatia e responsabilidade, aliando atendimento humanizado a práticas inovadoras para garantir resultados eficazes e sustentáveis."
          </p>
          <div className="w-16 h-px bg-blue-400 mx-auto"></div>
        </div>
      </section>

      <Features />
      <AIConsultant />
      <Contact />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5516992271825" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm mr-2">
          WhatsApp Direto
        </span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-2.32 0-4.519.903-6.16 2.544-3.399 3.4-3.399 8.929 0 12.329l-1.03 3.051 3.12-.112c1.332.741 2.822 1.135 4.316 1.135 2.155 0 4.197-.84 5.751-2.365 3.176-3.111 3.176-8.17 0-11.28-1.554-1.524-3.626-2.365-5.998-2.282zm0 1.943c1.789 0 3.475.7 4.746 1.972 2.618 2.619 2.618 6.878 0 9.497-1.271 1.272-2.957 1.971-4.746 1.971-1.233 0-2.464-.336-3.541-1l-.253-.153-1.84.066.609-1.801-.167-.266c-.663-1.055-1.013-2.287-1.013-3.542 0-1.789.7-3.475 1.972-4.746 1.271-1.272 2.957-1.972 4.746-1.972z" />
        </svg>
      </a>

      <Footer />
    </div>
  );
};

export default App;
