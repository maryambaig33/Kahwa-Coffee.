import React from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-coffee-500 font-sans text-sm font-bold uppercase tracking-[0.2em] mb-3">Selections</h2>
          <h3 className="text-4xl font-serif text-coffee-900 font-bold">Our Craft Menu</h3>
          <div className="w-24 h-1 bg-coffee-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="bg-white group hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-coffee-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-coffee-900 font-bold font-serif text-lg shadow-sm">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-coffee-500 bg-coffee-100 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-serif text-coffee-900 font-bold mb-3">{item.name}</h4>
                <p className="text-coffee-600 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
                <button className="w-full border-t border-coffee-100 pt-4 text-coffee-800 font-bold uppercase text-xs tracking-widest hover:text-coffee-500 transition-colors flex items-center justify-between">
                  Add to Order <span>+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;