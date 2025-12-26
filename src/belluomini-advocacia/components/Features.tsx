
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-blue-950 text-white overflow-hidden relative" id="diferenciais">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-8 leading-tight">Por que confiar sua questão à Belluomini Advocacia?</h2>
            
            <div className="space-y-8">
              {[
                { title: "Agilidade Resolutiva", desc: "Processos jurídicos não precisam ser eternos. Atuamos com foco na celeridade e eficiência de prazos." },
                { title: "Transparência Absoluta", desc: "Você sempre saberá exatamente em que pé está o seu caso com relatórios claros e acesso direto ao especialista." },
                { title: "Foco em Preservação", desc: "Antes de tudo, nossa missão é evitar que você perca tempo ou dinheiro com aventuras jurídicas incertas." }
              ].map((f, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-blue-300 font-bold">{i+1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{f.title}</h4>
                    <p className="text-slate-400 font-light leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-serif mb-6 text-blue-300">Recupere sua tranquilidade</h3>
              <p className="text-slate-300 mb-8 leading-relaxed italic">
                "Nossa equipe não entrega apenas petições judiciais; entregamos noites de sono tranquilas para quem teve seu direito de moradia ou patrimônio ameaçado."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-900 rounded-full border-2 border-blue-400 flex items-center justify-center font-serif text-2xl font-bold text-white">
                  B
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider">Belluomini Advocacia</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Excelência Jurídica em Todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
