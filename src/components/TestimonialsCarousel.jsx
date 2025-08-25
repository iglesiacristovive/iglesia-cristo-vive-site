import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import testimonials from '../data/testimonials';
import colors from '../constants/colors';

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonios" className={`py-16 md:py-24 ${colors.primary} text-white`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Testimonios</h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 flex flex-col items-center px-4">
                <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full mb-4 shadow-lg" />
                <p className="text-xl italic mb-4 max-w-2xl mx-auto">"{t.testimony}"</p>
                <p className="font-bold">- {t.name}</p>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Anterior testimonio"
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente testimonio"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${i === current ? `${colors.accent}` : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
