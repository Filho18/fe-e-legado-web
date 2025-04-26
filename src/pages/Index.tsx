
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import InvestmentSection from "@/components/InvestmentSection";
import MentorshipSection from "@/components/MentorshipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpiritualSection from "@/components/SpiritualSection";
import Footer from "@/components/Footer";

const Index = () => {
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
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <InvestmentSection />
      <MentorshipSection />
      <TestimonialsSection />
      <SpiritualSection />
      <Footer />
    </div>
  );
};

export default Index;
