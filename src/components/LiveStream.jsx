import React, { useState } from 'react';
import { Facebook, Youtube, Tiktok } from 'lucide-react';
import streamUrls from '../constants/streamUrls';
import colors from '../constants/colors';

const LiveStream = () => {
  const [source, setSource] = useState('youtube');

  return (
    <section id="en-vivo" className={`py-16 md:py-24 ${colors.secondary} text-white text-center`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Transmisión en Vivo</h2>
        <p className="mb-6">Únete a nuestros servicios en vivo en línea. Selecciona tu plataforma favorita:</p>

        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => setSource('youtube')}
            className={`${source === 'youtube' ? colors.accent : 'bg-gray-700'} p-3 rounded-full transition-colors`}
            aria-label="YouTube"
            title="YouTube"
          >
            <Youtube size={32} />
          </button>
          <button
            onClick={() => setSource('facebook')}
            className={`${source === 'facebook' ? colors.accent : 'bg-gray-700'} p-3 rounded-full transition-colors`}
            aria-label="Facebook"
            title="Facebook"
          >
            <Facebook size={32} />
          </button>
          <button
            onClick={() => setSource('tiktok')}
            className={`${source === 'tiktok' ? colors.accent : 'bg-gray-700'} p-3 rounded-full transition-colors`}
            aria-label="TikTok"
            title="TikTok"
          >
            <Tiktok size={32} />
          </button>
        </div>

        <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-2xl">
          <iframe
            src={streamUrls[source]}
            title="Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
