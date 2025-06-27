
import React from 'react';

const ProductHighlight = () => {
  const products = [
    {
      name: "HERITAGE 1921",
      subtitle: "40MM ROSE GOLD TIMEPIECE",
      image: "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23f5f5f5' stroke='%23b76e79' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%23c0c0c0' stroke-width='1'/%3E%3Cline x1='100' y1='40' x2='100' y2='60' stroke='%23b76e79' stroke-width='2'/%3E%3Cline x1='100' y1='140' x2='100' y2='160' stroke='%23b76e79' stroke-width='2'/%3E%3C/svg%3E"
    },
    {
      name: "HERITAGE 1863",
      subtitle: "42MM BOUTIQUE TIMEPIECE",
      image: "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23333' stroke='%23b76e79' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%23c0c0c0' stroke-width='1'/%3E%3Ctext x='100' y='105' text-anchor='middle' fill='%23b76e79' font-size='14'%3EXII%3C/text%3E%3C/svg%3E"
    },
    {
      name: "HERITAGE 1959",
      subtitle: "40MM BOUTIQUE TIMEPIECE",
      image: "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='90' fill='%23f5f5f5' stroke='%23c0c0c0' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%23b76e79' stroke-width='1'/%3E%3Cline x1='100' y1='50' x2='100' y2='100' stroke='%23b76e79' stroke-width='2'/%3E%3C/svg%3E"
    }
  ];

  return (
    <section id="collections" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-gray-900/50 to-charcoal/80 border border-ambassador-silver/10 p-8 transition-all duration-500 hover:border-rose-gold/30 hover:shadow-2xl hover:shadow-rose-gold/10 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="font-playfair text-xl font-semibold mb-2 tracking-wide">
                  {product.name}
                </h3>
                <p className="font-inter text-xs text-ambassador-silver/70 tracking-[0.2em] mb-8 uppercase">
                  {product.subtitle}
                </p>
                
                {/* Watch Image */}
                <div className="mb-8 flex justify-center">
                  <div className="relative w-48 h-48 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain filter brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-conic from-rose-gold/20 via-transparent to-rose-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                </div>

                {/* View Details Link */}
                <div className="flex justify-center">
                  <button className="w-8 h-8 border border-ambassador-silver/40 rounded-full flex items-center justify-center group-hover:border-rose-gold/60 transition-colors duration-300">
                    <div className="w-3 h-3 border-t border-r border-ambassador-silver/60 transform rotate-45 group-hover:border-rose-gold/80 transition-colors duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
