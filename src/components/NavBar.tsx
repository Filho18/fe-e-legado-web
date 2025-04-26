
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Jornada", href: "#timeline" },
    { name: "Investimento 5.0", href: "#investment" },
    { name: "Mentorias", href: "#mentorship" },
    { name: "Testemunhos", href: "#testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo size="sm" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-hugo-lightGreen transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-black/95 mt-4 py-4 px-2 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white hover:text-hugo-lightGreen transition-colors font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
