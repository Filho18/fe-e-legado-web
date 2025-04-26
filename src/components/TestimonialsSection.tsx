
import React, { useEffect } from "react";

const testimonials = [
  {
    quote: "O Hugo ajudou-me a alinhar as finanças com o céu. A minha empresa e o meu casamento nunca mais foram os mesmos.",
    name: "Ana V.",
    position: "Empresária"
  },
  {
    quote: "Com ele, aprendi que investir é mais do que ganhar — é construir destino.",
    name: "Pedro C.",
    position: "Investidor"
  }
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-20 bg-hugo-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text">Testemunhos</h2>
          <div className="section-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-lg reveal transition-all duration-700 delay-${index * 200}`}
            >
              <svg 
                className="w-10 h-10 text-hugo-green opacity-20 mb-4"
                fill="currentColor" 
                viewBox="0 0 32 32" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8v6c0 3.3-2.7 6-6 6H4v4h4c5.5 0 10-4.5 10-10V8h-8zm18 0v6c0 3.3-2.7 6-6 6h-1v4h4c5.5 0 10-4.5 10-10V8h-7z"/>
              </svg>
              <p className="text-hugo-gray text-lg italic mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hugo-green to-hugo-darkGreen flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-hugo-gray">{testimonial.name}</p>
                  <p className="text-sm text-hugo-gray opacity-75">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
