
import React from 'react';

const SocialEngagement = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-gray-900 to-charcoal">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23b76e79\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3Ccircle cx=\"15\" cy=\"15\" r=\"1\"/%3E%3Ccircle cx=\"45\" cy=\"45\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            JOIN THE ADVENTURE
          </h2>
          
          <div className="w-px h-16 bg-gradient-to-b from-rose-gold via-ambassador-silver to-transparent mx-auto mb-8"></div>
          
          <p className="font-inter text-lg md:text-xl text-ivory/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Here at Ambassador, we value all of our customers from all over the world. In an effort to connect with all of you, we
            challenge everyone to participate in our <span className="text-rose-gold font-medium">#ambassadorwatches</span> journal! After purchasing your watch, take a picture
            of it and tag us. Show us your world, and we'll share it with the world.
          </p>

          {/* User Submitted Photos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-gray-800 to-charcoal border border-ambassador-silver/10 hover:border-rose-gold/30 transition-all duration-300 group">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 border border-ambassador-silver/30 rounded-full flex items-center justify-center group-hover:border-rose-gold/60 transition-colors duration-300">
                    <div className="w-3 h-3 bg-rose-gold/40 rounded-full group-hover:bg-rose-gold/80 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-3 border border-ambassador-silver/40 bg-transparent hover:bg-rose-gold/10 transition-all duration-300 font-inter text-sm tracking-wider uppercase">
              <span className="relative z-10">Share Your Story</span>
              <div className="absolute inset-0 border border-transparent group-hover:border-rose-gold/50 transition-all duration-300"></div>
            </button>
            
            <span className="font-inter text-ambassador-silver/60 text-sm">or</span>
            
            <button className="group font-inter text-sm text-rose-gold hover:text-rose-gold/80 transition-colors duration-300 flex items-center gap-2">
              <span>Follow @ambassador_timepieces</span>
              <div className="w-4 h-4 border-t border-r border-rose-gold/60 transform rotate-45 group-hover:transform group-hover:rotate-45 group-hover:translate-x-1 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEngagement;
