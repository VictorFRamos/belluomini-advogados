
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contato">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Fale Conosco</span>
            <h2 className="text-4xl font-serif text-slate-900 mb-6">Agendar Consulta</h2>
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Escolha o canal de sua preferência para um atendimento imediato e especializado. Atendemos presencialmente em nossa sede ou via videoconferência para todo o Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-2.32 0-4.519.903-6.16 2.544-3.399 3.4-3.399 8.929 0 12.329l-1.03 3.051 3.12-.112c1.332.741 2.822 1.135 4.316 1.135 2.155 0 4.197-.84 5.751-2.365 3.176-3.111 3.176-8.17 0-11.28-1.554-1.524-3.626-2.365-5.998-2.282zm0 1.943c1.789 0 3.475.7 4.746 1.972 2.618 2.619 2.618 6.878 0 9.497-1.271 1.272-2.957 1.971-4.746 1.971-1.233 0-2.464-.336-3.541-1l-.253-.153-1.84.066.609-1.801-.167-.266c-.663-1.055-1.013-2.287-1.013-3.542 0-1.789.7-3.475 1.972-4.746 1.271-1.272 2.957-1.972 4.746-1.972z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-4">WhatsApp Direto</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Ideal para dúvidas rápidas e agendamentos de urgência. Você falará diretamente com nossa equipe de triagem jurídica.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/5516992271825', '_blank')}
                className="w-full bg-green-600 text-white py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-3"
              >
                Chamar no WhatsApp
              </button>
            </div>

            <div className="bg-blue-950 p-10 rounded-sm border border-blue-900 shadow-2xl">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-4">E-mail Profissional</h3>
              <p className="text-blue-200/60 text-sm mb-8 leading-relaxed">
                Para envio de documentos e relatos detalhados de casos complexos. Respondemos em até 24 horas úteis.
              </p>
              <a 
                href="mailto:belluominiadvocacia@gmail.com"
                className="w-full bg-blue-600 text-white py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-3 border border-blue-400/30 text-center"
              >
                Enviar E-mail
              </a>
            </div>
          </div>

          <div className="mt-12 p-8 bg-blue-50 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Atendimento Presencial</p>
                <p className="text-slate-500 text-xs">Sede em Franca/SP com atuação estratégica em todo o Brasil.</p>
              </div>
            </div>
            <div className="h-px w-12 bg-blue-200 hidden md:block"></div>
            <div className="text-center md:text-right">
              <p className="font-bold text-slate-900 text-sm uppercase tracking-wider">Telefone</p>
              <p className="text-slate-500 text-xs">(16) 99227-1825</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
