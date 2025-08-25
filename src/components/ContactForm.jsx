import React from 'react';
import colors from '../constants/colors';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Pronto nos pondremos en contacto.');
  };

  return (
    <section id="contacto" className={`py-16 md:py-24 ${colors.background}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${colors.primaryText}`}>Contáctanos</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:outline-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:outline-none" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 rounded-lg border focus:border-indigo-500 focus:outline-none" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className={`${colors.primary} text-white font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-shadow`}>
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
