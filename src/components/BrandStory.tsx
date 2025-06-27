
import React from 'react';

const BrandStory = () => {
  return (
    <section id="story" className="py-24 bg-gradient-to-b from-charcoal to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Portrait */}
          <div className="relative group">
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-charcoal">
              <div className="aspect-[4/5] bg-gradient-to-br from-ambassador-silver/10 to-rose-gold/5 flex items-center justify-center">
                {/* Placeholder portrait */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-800 to-charcoal relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                  <div className="absolute bottom-20 left-10 right-10">
                    <div className="w-full h-32 bg-gradient-to-r from-ambassador-silver/20 to-rose-gold/20 rounded"></div>
                  </div>
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 bg-gradient-to-br from-ambassador-silver/30 to-rose-gold/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right: Story Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 tracking-wide">
                I. THE ORIGINAL
              </h2>
              
              <div className="w-px h-16 bg-gradient-to-b from-rose-gold via-ambassador-silver to-transparent mb-8"></div>
            </div>

            <div className="space-y-6 text-ivory/80 font-inter leading-relaxed">
              <p className="text-lg">
                <span className="font-playfair text-2xl text-rose-gold float-left mr-2 leading-none">T</span>
                his tale begins with our namesake's profession, the ambassador. 
                Like all envoys, the original ambassador's job was to be the 
                manifestation of his homeland on foreign soils. But, he was always 
                different. Regardless of where his work took him, he stood out and 
                became renowned for his dapper looks. Everything vintage.
              </p>

              <p>
                His suits were tailored to fit his mid 20th century style, his hair reflected 
                a comb-over that many thought had been lost to another era, and his 
                demeanor was class itself. He captivated crowds and demanded crisp 
                perfection. The ambassador was timeless.
              </p>
            </div>

            <div className="pt-8">
              <button className="group relative px-6 py-3 border border-ambassador-silver/40 bg-transparent hover:bg-rose-gold/10 transition-all duration-300 font-inter text-sm tracking-wider uppercase">
                <span className="relative z-10">Continue Reading</span>
                <div className="absolute inset-0 border border-transparent group-hover:border-rose-gold/50 transition-all duration-300"></div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-4 h-4 border-t border-r border-rose-gold/60 transform rotate-45"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
