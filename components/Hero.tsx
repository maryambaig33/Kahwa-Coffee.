import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-coffee-900 h-[600px] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/1600/900?grayscale&blur=2" 
          alt="Coffee Shop Ambiance" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl font-serif text-coffee-50 font-bold leading-tight mb-6 drop-shadow-lg">
          Brewed for <br />
          <span className="text-coffee-400 italic">Perfection</span>
        </h1>
        <p className="text-lg md:text-xl text-coffee-200 mb-10 max-w-xl leading-relaxed font-sans font-light">
          Experience the art of coffee at Kahwa. From ethically sourced beans to the final pour, 
          every cup tells a story of tradition and passion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#menu" className="group bg-coffee-500 text-white px-8 py-4 flex items-center justify-center hover:bg-coffee-400 transition-all duration-300 uppercase tracking-widest text-sm">
            Explore Menu
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#barista" className="px-8 py-4 border border-coffee-400 text-coffee-100 hover:bg-coffee-800 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center">
            Ask AI Barista
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;