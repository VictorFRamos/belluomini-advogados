
import React from 'react';

const AboutFounders: React.FC = () => {
  return (
    <section className="py-24 bg-blue-950 border-t border-blue-900" id="escritório">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Corpo Jurídico</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Nossos Sócios Fundadores</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Perfil Mateus */}
          <div className="group bg-blue-900/30 border border-blue-800/50 p-10 rounded-sm hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-serif text-white">M</span>
            </div>
            <h3 className="text-2xl font-serif text-blue-200 mb-2">Mateus Fernando Belluomini dos Santos</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1">Advogado</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-800/80 text-white px-3 py-1">Contador</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-900 text-white px-3 py-1">Perito Judicial</span>
            </div>
            
            <div className="space-y-6 text-slate-300 leading-relaxed font-light text-sm flex-1">
              <p>
                Graduado pela <b>Faculdade Doutor Francisco Maeda (FAFRAM)</b>, Mateus é a autoridade técnica do escritório para questões que exigem precisão numérica e conformidade fiscal. Como <b>Contador e Perito</b>, ele domina a linguagem da Receita Federal, atuando cirurgicamente em casos de <b>Malha Fina</b> e defesas de pessoas físicas que possuem direito à <b>isenção de imposto de renda</b> mas são retidas indevidamente por falhas sistêmicas do fisco.
              </p>
              <p>
                Sua atuação é focada em <b>Direito Tributário e Previdenciário</b>, onde a conferência minuciosa de cálculos e a estratégia contábil definem o sucesso da demanda.
              </p>
              <p className="italic border-l-2 border-blue-500 pl-4 py-2 text-blue-200 bg-blue-800/20">
                "A intersecção entre o Direito e aos problemas fiscais contábeis é onde encontramos as soluções mais definitivas para nossos clientes."
              </p>
            </div>
          </div>

          {/* Perfil Luis Gustavo */}
          <div className="group bg-blue-900/30 border border-blue-800/50 p-10 rounded-sm hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-8xl font-serif text-white">L</span>
            </div>
            <h3 className="text-2xl font-serif text-blue-200 mb-2">Luis Gustavo de Oliveira Belluomini</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-3 py-1">Advogado</span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-800/80 text-white px-3 py-1">Especialista Imobiliário</span>
            </div>
            
            <div className="space-y-6 text-slate-300 leading-relaxed font-light text-sm flex-1">
              <p>
                Formado pela <b>Faculdade de Direito de Franca (FDF)</b>, Luis Gustavo consolidou-se como especialista em <b>Direito Imobiliário</b> de alta complexidade. Sua expertise é fundamental em processos de <b>Imissão na Posse</b>: casos onde investidores adquirem imóveis em leilões, mas se veem impedidos de ocupar o bem devido à presença de ocupantes sem direito legal à posse.
              </p>
              <p>
                Além do foco imobiliário, lidera as demandas de <b>Direito de Sucessão</b>, garantindo agilidade e segurança jurídica em inventários e partilhas litigiosas em todo o território nacional, com foco na preservação célere do patrimônio.
              </p>
              <p className="italic border-l-2 border-blue-500 pl-4 py-2 text-blue-200 bg-blue-800/20">
                "Nosso papel é garantir que a propriedade legítima seja respeitada, removendo obstáculos ocupacionais e burocráticos com rigor jurídico."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;
