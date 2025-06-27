
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-charcoal py-16 border-t border-ambassador-silver/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-playfair text-3xl font-bold tracking-wider mb-4">
                AMBASSADOR
              </div>
              <p className="font-inter text-ivory/60 text-sm leading-relaxed max-w-md">
                Traditional craftsmanship meets modern legacy. Each Ambassador timepiece represents 
                incomparable quality and timeless elegance.
              </p>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-inter text-sm font-semibold tracking-wider uppercase mb-4 text-ambassador-silver">
                Collections
              </h4>
              <ul className="space-y-2 font-inter text-sm text-ivory/60">
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Heritage 1921</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Heritage 1863</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Heritage 1959</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Limited Editions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-inter text-sm font-semibold tracking-wider uppercase mb-4 text-ambassador-silver">
                Company
              </h4>
              <ul className="space-y-2 font-inter text-sm text-ivory/60">
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Boutique Locator</a></li>
                <li><a href="#" className="hover:text-rose-gold transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Instagram Preview */}
          <div className="mb-12">
            <h4 className="font-inter text-sm font-semibold tracking-wider uppercase mb-6 text-ambassador-silver text-center">
              Follow Our Journey
            </h4>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-2xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-gradient-to-br from-gray-800 to-charcoal border border-ambassador-silver/10 hover:border-rose-gold/30 transition-all duration-300 group cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-4 h-4 border border-ambassador-silver/30 rounded-full flex items-center justify-center group-hover:border-rose-gold/60 transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-rose-gold/40 rounded-full group-hover:bg-rose-gold/80 transition-colors duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-ambassador-silver/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-inter text-xs text-ivory/40">
                © 2024 Ambassador Timepieces. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="font-inter text-xs text-ivory/40 hover:text-rose-gold transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="font-inter text-xs text-ivory/40 hover:text-rose-gold transition-colors duration-300">Terms of Service</a>
                <div className="flex items-center gap-3">
                  {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="w-6 h-6 border border-ambassador-silver/20 rounded-full flex items-center justify-center hover:border-rose-gold/40 transition-colors duration-300 group">
                      <div className="w-2 h-2 bg-ambassador-silver/40 rounded-full group-hover:bg-rose-gold/60 transition-colors duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
