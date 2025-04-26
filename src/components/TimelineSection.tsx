
import React, { useEffect } from "react";

const timelineData = [
  {
    year: "1987",
    title: "Início da Jornada",
    description: "Nascimento e primeiros passos de uma vida destinada a impactar gerações."
  },
  {
    year: "2020",
    title: "Encontro com a Fé",
    description: "Um momento decisivo que transformou sua visão de negócios e propósito de vida."
  },
  {
    year: "2020-2022",
    title: "Transformação Familiar",
    description: "Período de reconstrução e fortalecimento dos laços familiares através da fé e valores."
  },
  {
    year: "2024",
    title: "Mentorias e Impacto Global",
    description: "Expansão da visão para alcançar e transformar vidas ao redor do mundo."
  },
  {
    year: "2025",
    title: "Investimento 5.0",
    description: "O novo capítulo de uma jornada de impacto e transformação através de investimentos com propósito."
  }
];

const TimelineSection = () => {
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
    <section id="timeline" className="py-20 bg-hugo-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">Uma Vida com Propósito</h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-3xl mx-auto pl-6 border-l-2 border-hugo-green">
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item pl-10 pb-14 reveal transition-all duration-700 delay-${index * 100}`}
            >
              <div className="flex flex-col">
                <span className="text-hugo-green font-bold text-lg">{item.year}</span>
                <h3 className="text-2xl font-playfair font-bold text-hugo-gray mt-1 mb-3">{item.title}</h3>
                <p className="text-hugo-gray">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
