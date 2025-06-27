
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-charcoal/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="font-playfair text-2xl font-bold tracking-wider">
          AMBASSADOR
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#story" className="font-inter text-sm hover:text-rose-gold transition-colors">Our Story</a>
          <a href="#collections" className="font-inter text-sm hover:text-rose-gold transition-colors">Collections</a>
          <a href="#boutique" className="font-inter text-sm hover:text-rose-gold transition-colors">Online Boutique</a>
        </div>

        <div className="flex items-center space-x-4">
          <select className="bg-transparent border-none text-sm font-inter focus:outline-none">
            <option value="EN" className="bg-charcoal">EN</option>
            <option value="FR" className="bg-charcoal">FR</option>
          </select>
          
          <button className="md:hidden">
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className="h-0.5 bg-ivory"></span>
              <span className="h-0.5 bg-ivory"></span>
              <span className="h-0.5 bg-ivory"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
