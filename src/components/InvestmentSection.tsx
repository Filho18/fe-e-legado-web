
import React, { useEffect } from "react";
import Button from "./Button";

const InvestmentSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="investment" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">O Movimento Investimento 5.0</h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center reveal transition-all duration-700">
          <div className="quote-box mb-12">
            <p className="text-xl md:text-2xl font-playfair italic">
              "Essa não é apenas mais uma palestra.<br/>
              É um chamado para quem quer viver o novo tempo do investimento com sabedoria, visão e propósito."
            </p>
          </div>

          <div className="mb-12 reveal transition-all duration-700 delay-200">
            <div className="inline-block bg-hugo-green px-6 py-3 rounded-full mb-6">
              <p className="font-bold text-lg">Lisboa será o ponto de partida: 26.04.2025</p>
            </div>
            
            <h3 className="text-2xl font-playfair font-bold mb-6">Este movimento é para quem:</h3>
            
            <ul className="space-y-4 text-left max-w-lg mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-white text-lg">
                  Busca coragem para obedecer à voz de Deus
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-white text-lg">
                  Quer unir estratégia e fé nos investimentos
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-white text-lg">
                  Entende que o dinheiro deve servir à missão
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4 mb-12 reveal transition-all duration-700 delay-300">
            <p className="text-xl font-light italic">Onde fé encontra estratégia.</p>
            <p className="text-xl font-light italic">Onde o investidor se torna provedor de destinos.</p>
            <p className="text-xl font-light italic">O resto... é legado.</p>
          </div>

          <div className="reveal transition-all duration-700 delay-400">
            <Button variant="outline" size="lg">
              Quero Participar do Movimento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
