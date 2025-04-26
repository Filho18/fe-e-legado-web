
import React, { useEffect } from "react";

const AboutSection = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Sobre Hugo Noy Bugalho</h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 reveal transition-all duration-700">
            <div className="quote-box">
              <p className="text-xl md:text-2xl font-playfair italic text-hugo-gray">
                Investidor internacional. Mentor. Pai. Provedor de destinos.
                <br /><br />
                Com base em Dubai e o coração alinhado ao céu, Hugo constrói pontes entre fé, estratégia e legado.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 reveal transition-all duration-700 delay-300">
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-hugo-gray text-lg">
                  <span className="font-semibold">+20 anos</span> de experiência em negócios e investimentos
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-hugo-gray text-lg">
                  Ex-líder do projeto <span className="font-semibold">Angosat</span> (programa espacial)
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-hugo-gray text-lg">
                  Investimentos em <span className="font-semibold">Angola, EUA, Europa e Dubai</span>
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-hugo-gray text-lg">
                  <span className="font-semibold">Liberdade financeira</span> alcançada em 2020
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-hugo-green mr-3"></div>
                <p className="text-hugo-gray text-lg">
                  <span className="font-semibold">Missão:</span> ensinar, libertar e expandir através da sabedoria e obediência
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
