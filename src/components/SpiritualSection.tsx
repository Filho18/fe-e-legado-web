
import React, { useEffect } from "react";

const SpiritualSection = () => {
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
    <section id="spiritual" className="py-28 bg-gradient-to-br from-hugo-darkGreen to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal transition-all duration-700">
          <p className="text-2xl md:text-3xl lg:text-4xl font-playfair italic leading-relaxed">
            "Em qualquer lugar do mundo, a qualquer tempo, esteja sempre debaixo da boa vontade do Pai."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpiritualSection;
