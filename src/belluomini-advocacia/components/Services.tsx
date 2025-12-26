
import React from 'react';

const services = [
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    desc: "Especialidade absoluta em Imissão na Posse. Atuamos em casos críticos de aquisição de imóveis em leilão onde o arrematante encontra o bem ocupado. Nossa missão é garantir que quem adquiriu legalmente o imóvel tome sua posse de fato, superando resistências de ocupantes que não possuem mais título jurídico sobre o bem.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    tags: ["Imissão na Posse", "Imóveis de Leilão", "Recuperação de Posse"],
    highlight: true
  },
  {
    id: "tributario",
    title: "Direito Tributário",
    desc: "Assessoria técnica para contribuintes retidos em Malha Fiscal (Malha Fina) e defesas para garantir a Isenção de Imposto de Renda. É comum que a Receita Federal retenha em malha pessoas com direito legítimo à isenção (como em casos de doenças graves ou aposentadoria), exigindo intervenção jurídica especializada para liberar valores indevidamente bloqueados.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    tags: ["Malha Fina", "Isenção de IR", "Defesa Fiscal"],
    isLion: true
  },
  {
    id: "sucessao",
    title: "Direito de Sucessão",
    desc: "Inventários judiciais e extrajudiciais, partilha de bens e proteção de herança. Atuamos em litígios sucessórios com foco na preservação do patrimônio familiar e agilidade processual.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    tags: ["Inventários", "Herança", "Sucessão"],
    isNew: true
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    desc: "Defesa técnica rigorosa focada em contratos de trabalho, prevenção de riscos e representação em juízo tanto para empregados quanto para empregadores.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    tags: ["Contratos", "Riscos", "Rescisão"]
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário",
    desc: "Análise técnica de benefícios do INSS, aposentadorias e auxílios com foco em revisão de cálculos e concessão administrativa ou judicial.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
    tags: ["Aposentadoria", "INSS", "Cálculos"],
    isINSS: true
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    desc: "Proteção contra práticas abusivas, danos morais e equilíbrio nas relações de consumo, garantindo a dignidade do consumidor frente a grandes corporações.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    tags: ["Dano Moral", "Consumo", "Garantias"]
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900" id="serviços">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-blue-800/30 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Especialidades e Atuação</h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Soluções jurídicas estratégicas para proteção de patrimônio, regularização imobiliária e segurança fiscal.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Excelência Belluomini</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} id={s.id} className="group bg-blue-950 rounded-sm shadow-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors"></div>
                {s.isLion && (
                  <div className="absolute top-4 right-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg border border-orange-400/30">
                    Defesa do Contribuinte
                  </div>
                )}
                {s.highlight && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg border border-blue-400/30">
                    Especialista em Leilão
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-100 mb-4 font-serif group-hover:text-blue-400 transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-blue-300 bg-blue-900/50 border border-blue-500/20 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
