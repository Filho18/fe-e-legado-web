
import React, { useEffect } from "react";
import Button from "./Button";

const MentorshipSection = () => {
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
    <section id="mentorship" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">Mentorias e Parcerias</h2>
          <div className="section-divider"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 reveal transition-all duration-700">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gradient-to-br from-hugo-darkGreen to-hugo-black">
              {/* Placeholder for mentorship image */}
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-xl font-playfair">Imagem de Mentoria</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 reveal transition-all duration-700 delay-300">
            <h3 className="text-2xl font-playfair font-bold text-hugo-gray mb-6">Transforme sua vida e negócios</h3>
            <p className="text-lg text-hugo-gray mb-8">
              Hugo oferece mentorias privadas, masterclasses e parcerias estratégicas com base em fé, ética e visão global. Cada jornada é personalizada e direcionada a resultados reais, unindo princípios espirituais e estratégias comprovadas.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-hugo-green"></div>
                <p className="text-hugo-gray font-medium">Mentorias Individuais</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-hugo-green"></div>
                <p className="text-hugo-gray font-medium">Masterclasses Exclusivas</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-hugo-green"></div>
                <p className="text-hugo-gray font-medium">Parcerias Estratégicas</p>
              </div>
            </div>
            <div className="mt-10">
              <Button>Quero ser mentorado</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
