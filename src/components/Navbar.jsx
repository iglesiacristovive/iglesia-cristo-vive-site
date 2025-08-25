import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import colors from '../constants/colors';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <header className={`${colors.primary} text-white shadow-md sticky top-0 z-50`}>
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Iglesia Cristo Vive</div>

        {/* Menú de Escritorio */}
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="hover:text-yellow-200 transition-colors">Inicio</a>
          <a href="#quienes-somos" className="hover:text-yellow-200 transition-colors">Quiénes Somos</a>
          <a href="#testimonios" className="hover:text-yellow-200 transition-colors">Testimonios</a>
          <a href="#noticias" className="hover:text-yellow-200 transition-colors">Noticias</a>
          <a href="#en-vivo" className="hover:text-yellow-200 transition-colors">En Vivo</a>
          <a href="#contacto" className="hover:text-yellow-200 transition-colors">Contacto</a>
        </div>

        {/* Botón Móvil */}
        <button onClick={toggleMenu} className="md:hidden" aria-label="Abrir menú">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menú Móvil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${colors.primary} text-center transition-all duration-300 ease-in-out`}>
        {[
          ['#inicio', 'Inicio'],
          ['#quienes-somos', 'Quiénes Somos'],
          ['#testimonios', 'Testimonios'],
          ['#noticias', 'Noticias'],
          ['#en-vivo', 'En Vivo'],
          ['#contacto', 'Contacto'],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="block py-3 px-6 hover:bg-indigo-600 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
