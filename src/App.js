import React from 'react';
import colors from './constants/colors';

// Secciones
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import NewsGrid from './components/NewsGrid';
import LiveStream from './components/LiveStream';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className={`${colors.background} ${colors.text} font-sans`}>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <TestimonialsCarousel />
        <NewsGrid />
        <LiveStream />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
