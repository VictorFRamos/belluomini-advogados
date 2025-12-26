
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-blue-950/95 shadow-2xl py-3 backdrop-blur-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className={`w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-500 ${scrolled ? 'bg-blue-600' : 'bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-blue-600'}`}>
            <span className="font-serif text-xl font-bold text-white">B</span>
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold font-serif tracking-tight text-white">Belluomini</h1>
            <p className="text-[8px] uppercase tracking-[0.3em] font-semibold text-blue-300">Advocacia & Consultoria</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Escritório', id: 'escritório' },
            { name: 'Imobiliário', id: 'imobiliario' },
            { name: 'Tributário', id: 'tributario' },
            { name: 'Diferenciais', id: 'diferenciais' }
          ].map((item) => (
            <button 
              key={item.name} 
              onClick={() => scrollToSection(item.id)}
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300 hover:text-blue-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-blue-500 shadow-lg shadow-blue-900/40 transition-all border border-blue-400/30"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
