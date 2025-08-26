import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import colors from '../constants/colors';

const Footer = () => {
  return (
    <footer className={`${colors.primary} text-white py-12`}>
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Iglesia Cristo Vive</h3>
          <p className="text-sm">Un lugar de amor, esperanza y comunidad.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-6">
          <p className="flex items-center space-x-2 mb-2 md:mb-0">
            <Mail size={18} />
            <span>iglesia2025cristovive@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 mb-2 md:mb-0">
            <MapPin size={18} />
            <span>Dirección,  Bolivar, Buenos Aires, Argentina</span>
          </p>
        </div>
        <div className="text-sm border-t border-white/30 pt-6">
          &copy; {new Date().getFullYear()} Iglesia Cristo Vive. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
