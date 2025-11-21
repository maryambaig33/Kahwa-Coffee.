import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-950 text-coffee-300 py-16 border-t border-coffee-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-serif font-bold mb-6">Kahwa Coffee</h3>
            <p className="leading-relaxed mb-6 max-w-xs">
              Crafting exceptional coffee experiences since 2010. Sourced responsibly, roasted with passion, served with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between max-w-xs border-b border-coffee-900 pb-2">
                <span>Mon - Fri</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between max-w-xs border-b border-coffee-900 pb-2">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between max-w-xs border-b border-coffee-900 pb-2">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="mb-4 text-sm">Subscribe for seasonal menu updates and exclusive offers.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-coffee-900 border-none text-white p-3 focus:ring-1 focus:ring-coffee-500 outline-none"
              />
              <button className="bg-coffee-600 text-white uppercase font-bold text-xs tracking-widest py-3 hover:bg-coffee-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-coffee-900 text-center text-sm text-coffee-500">
          <p>&copy; {new Date().getFullYear()} Kahwa Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;