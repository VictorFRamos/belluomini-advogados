
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Imagem de Fundo Profissional e Sóbria */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Escritório Belluomini Advocacia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-4xl">
          <span className="inline-block border-l-2 border-blue-400 pl-4 text-blue-200 text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Assessoria Jurídica Especializada
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-2">
            Resolva em definitivo sua questão <br/>
            <span className="text-blue-300">tributária e imobiliária.</span>
          </h1>
          <div className="mb-8">
            <span className="bg-blue-600/30 border border-blue-400/50 px-4 py-1 text-sm font-bold tracking-[0.2em] text-blue-100 uppercase animate-pulse">
              ATENDEMOS EM TODO O BRASIL!
            </span>
          </div>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl">
            Atuação técnica estratégica em todo o território nacional. Proteção patrimonial, defesa tributária e imobiliária com foco em segurança jurídica e resultados definitivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-600 text-white px-10 py-4 rounded-sm font-semibold text-base hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center border border-blue-400/30"
            >
              Agendar Consulta
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <button 
              onClick={() => scrollToSection('escritório')}
              className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-10 py-4 rounded-sm font-semibold text-base hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Conhecer Nossos Sócios
            </button>
          </div>
        </div>
      </div>

      {/* Detalhe de Design Minimalista */}
      <div className="absolute bottom-10 left-6 z-10 hidden md:block">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-px bg-blue-400"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-blue-200/60 font-medium">Excelência, Ética e Empatia</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
