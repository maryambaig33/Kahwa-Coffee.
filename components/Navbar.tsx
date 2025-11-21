import React, { useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-coffee-900 text-coffee-50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Coffee className="h-8 w-8 text-coffee-400 mr-2" />
            <span className="font-serif text-2xl font-bold tracking-wider">KAHWA</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#menu" className="text-coffee-100 hover:text-white transition-colors duration-200 uppercase text-sm tracking-widest">Menu</a>
            <a href="#barista" className="text-coffee-100 hover:text-white transition-colors duration-200 uppercase text-sm tracking-widest">AI Barista</a>
            <a href="#about" className="text-coffee-100 hover:text-white transition-colors duration-200 uppercase text-sm tracking-widest">Our Story</a>
            <button className="bg-coffee-500 hover:bg-coffee-400 text-white px-6 py-2 rounded-none transition-colors duration-200 uppercase text-sm tracking-widest">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-coffee-100 hover:text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-coffee-800 pb-4 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-coffee-100 hover:text-white hover:bg-coffee-700">Menu</a>
            <a href="#barista" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-coffee-100 hover:text-white hover:bg-coffee-700">AI Barista</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-coffee-100 hover:text-white hover:bg-coffee-700">Our Story</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;