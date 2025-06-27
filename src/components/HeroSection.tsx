
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-gray-900 to-charcoal">
        <div className="absolute inset-0 bg-gradient-radial from-rose-gold/10 via-transparent to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Hero Watch Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
          <div className="absolute inset-0 rounded-full bg-gradient-conic from-rose-gold/20 via-transparent to-rose-gold/20 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full bg-charcoal/50 backdrop-blur-sm flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-ambassador-silver/30 to-rose-gold/20 flex items-center justify-center shadow-2xl">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-ivory/10 backdrop-blur-md border border-ambassador-silver/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-2 h-20 bg-ambassador-silver/60 mx-auto mb-2 transform -rotate-12"></div>
                  <div className="w-1 h-16 bg-rose-gold/80 mx-auto transform rotate-45"></div>
                  <div className="text-xs font-playfair text-ambassador-silver/80 mt-4">AMBASSADOR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <p className="font-inter text-sm tracking-[0.3em] text-ambassador-silver/80 mb-4 uppercase">
            Traditional Watchmaker
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wide">
            INCOMPARABLE TIMEPIECES
          </h1>
          <p className="font-inter text-lg md:text-xl text-ivory/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ambassador watches exceed the standard. They are not mediocre, common, or antiquated. But instead are testament to
            exceptional craftsmanship that are instant classics which transcend everyone. Be a part of greatness. Be an ambassador.
          </p>
          <button className="group relative px-8 py-3 border border-ambassador-silver/40 bg-transparent hover:bg-rose-gold/10 transition-all duration-300 font-inter text-sm tracking-wider uppercase">
            <span className="relative z-10">Discover Models</span>
            <div className="absolute inset-0 border border-transparent group-hover:border-rose-gold/50 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-ambassador-silver/50 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
