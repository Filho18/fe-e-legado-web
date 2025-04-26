
import React from "react";
import Logo from "./Logo";
import { Instagram, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Logo size="lg" className="mb-6 md:mb-0" />
          
          <div className="flex flex-wrap gap-8 justify-center">
            <a href="https://instagram.com/hc_o_investidor" className="flex items-center gap-2 hover:text-hugo-lightGreen transition-colors">
              <Instagram size={20} />
              <span>@hc_o_investidor</span>
            </a>
            <a href="mailto:info@hugonoy.com" className="flex items-center gap-2 hover:text-hugo-lightGreen transition-colors">
              <Mail size={20} />
              <span>info@hugonoy.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Globe size={20} />
              <span>Dubai | Angola | Lisboa</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Hugo Noy Bugalho. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-hugo-lightGreen transition-colors">Termos</a>
            <a href="#" className="hover:text-hugo-lightGreen transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
