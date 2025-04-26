
import React, { useEffect, useRef } from "react";
import Button from "./Button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="min-h-screen relative flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-white space-y-6 reveal transition-all duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              "Não fui eu que te ordenei? Sê forte e corajoso!"
            </h1>
            <p className="font-light italic text-xl md:text-2xl">– Josué 1:9</p>
            <p className="text-xl md:text-2xl mt-6 font-raleway font-light">
              A história de um homem que ousou obedecer a Deus e investir com propósito.
            </p>
            <div className="pt-4">
              <Button variant="outline" size="lg">
                Descobre a Jornada de Hugo Noy Bugalho
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 reveal transition-all duration-700 delay-300">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-hugo-green">
              {/* Placeholder for Hugo's image */}
              <div className="absolute inset-0 bg-gradient-to-br from-hugo-darkGreen to-hugo-black flex items-center justify-center">
                <span className="text-white font-playfair text-xl">Hugo Noy Bugalho</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
