
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-sm shadow-lg shadow-blue-900/20">
                <span className="text-white font-serif text-xl font-bold">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold font-serif tracking-tight">Belluomini Advocacia</h1>
                <p className="text-[8px] uppercase tracking-[0.3em] font-semibold text-blue-400">Excelência & Estratégia</p>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8 italic text-sm">
              "Nosso compromisso é com você — trabalhador, empresário, contribuinte ou investidor — que busca orientação clara, segurança jurídica e resultados definitivos em questões tributárias e imobiliárias."
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-blue-900/40 border border-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-blue-200/50 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-blue-400 text-sm uppercase tracking-widest">Áreas de Foco</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Imissão na Posse (Leilões)</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Defesa em Malha Fina</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Isenção de Imposto de Renda</li>
              <li className="hover:text-blue-300 transition-colors cursor-pointer">Inventários & Sucessão</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-blue-400 text-sm uppercase tracking-widest">Atendimento</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-light">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500">📍</span>
                <span>Atuação em todo o Brasil (Digital e Presencial)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">📞</span>
                <span>(16) 99227-1825</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">✉</span>
                <span>belluominiadvocacia@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">
              © 2024 BELLUOMINI SOCIEDADE INDIVIDUAL DE ADVOCACIA
            </p>
            <p className="text-[9px] text-slate-600 font-medium">
              CNPJ 63.795.392/0001-42 | Todos os direitos reservados | OAB/SP
            </p>
          </div>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Sigilo Profissional</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Ética Jurídica</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
