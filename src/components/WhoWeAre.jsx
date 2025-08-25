import React from 'react';
import colors from '../constants/colors';

const WhoWeAre = () => {
  return (
    <section id="quienes-somos" className={`py-16 md:py-24 ${colors.background}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${colors.primaryText}`}>Quiénes Somos</h2>
          <p className="mb-4">
            Somos una comunidad de creyentes dedicada a glorificar a Dios a través del amor y el servicio a los demás.
            Creemos en la Biblia como la palabra inspirada de Dios y buscamos vivir de acuerdo a sus enseñanzas.
          </p>
          <p>
            Nuestra misión es llevar el mensaje de esperanza de Jesucristo a cada corazón, construyendo una familia de
            fe donde cada persona se sienta bienvenida y amada.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://placehold.co/600x400/1e40af/ffffff?text=Quiénes+Somos"
            alt="Personas en la iglesia"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
