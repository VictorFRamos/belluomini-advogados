
import React, { useState, useRef, useEffect } from 'react';
import { getLegalInsight } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'Seja bem-vindo ao portal informativo da Belluomini Advocacia. Sou um assistente virtual. Em que posso auxiliá-lo?'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await getLegalInsight(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse || 'No momento não foi possível processar sua dúvida. Por favor, tente o WhatsApp.' }]);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-white" id="ai-assistant">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif text-slate-900 mb-6">Atendimento Virtual <br/><span className="text-blue-600">Belluomini</span></h2>
              <p className="text-slate-600 font-light mb-6 text-sm leading-relaxed">
                Canal exclusivo para esclarecimentos preliminares sobre nossos serviços e áreas de atuação. Atendimento rápido e transparente para todo o Brasil.
              </p>
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 text-[10px] text-blue-800 leading-relaxed uppercase tracking-wider font-semibold">
                IMPORTANTE: Este chat não substitui a consulta jurídica formal. Não fazemos promessas de ganhos ou prazos processuais aqui.
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-blue-950 rounded-sm shadow-2xl overflow-hidden flex flex-col h-[500px]">
                <div className="bg-blue-900 p-5 text-white flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="font-serif text-sm tracking-widest uppercase text-blue-200">Consultoria Digital</span>
                  </div>
                </div>

                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div 
                        className={`max-w-[90%] p-4 rounded-sm text-sm leading-relaxed ${
                          m.role === 'user' 
                          ? 'bg-blue-600 text-white shadow-md' 
                          : 'bg-blue-900 border border-white/10 text-blue-100'
                        }`}
                        dangerouslySetInnerHTML={{ __html: m.text }}
                      />
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-blue-900 border border-white/10 p-4 rounded-sm flex space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-blue-900 border-t border-white/5">
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Ex: Como funciona o inventário?"
                      className="flex-1 bg-blue-950 border border-white/10 text-white rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-blue-400 outline-none placeholder-blue-300/30"
                    />
                    <button 
                      onClick={handleSend}
                      className="bg-blue-600 text-white px-5 rounded-sm hover:bg-blue-500 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
