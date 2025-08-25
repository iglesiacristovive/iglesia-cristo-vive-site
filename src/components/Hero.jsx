import React from 'react';
import colors from '../constants/colors';

const Hero = () => {
  return (
    <section id="inicio" className={`relative ${colors.primary} text-white text-center py-20 md:py-32 overflow-hidden`}>
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/1e40af/ffffff?text=Iglesia+Cristo+Vive')" }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          Bienvenidos a Iglesia Cristo Vive
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          Un lugar de esperanza, amor y fe. Ven a crecer con nosotros en la palabra de Dios.
        </p>
        <a
          href="#contacto"
          className={`${colors.accent} ${colors.text} font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-300`}
        >
          Visítanos
        </a>
      </div>
    </section>
  );
};

export default Hero;
