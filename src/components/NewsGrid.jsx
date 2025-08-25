import React from 'react';
import news from '../data/news';
import colors from '../constants/colors';

const NewsGrid = () => {
  return (
    <section id="noticias" className={`py-16 md:py-24 ${colors.background}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${colors.primaryText}`}>Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.date}</p>
                <p>{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
