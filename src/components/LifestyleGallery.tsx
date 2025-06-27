
import React from 'react';

const LifestyleGallery = () => {
  const images = [
    {
      alt: "Elegant woman wearing Ambassador timepiece",
      className: "aspect-square bg-gradient-to-br from-rose-gold/20 to-ambassador-silver/10"
    },
    {
      alt: "Businessman checking Ambassador watch",
      className: "aspect-[4/5] bg-gradient-to-br from-ambassador-silver/20 to-charcoal"
    },
    {
      alt: "Distinguished gentleman with Ambassador timepiece",
      className: "aspect-square bg-gradient-to-br from-gray-700 to-rose-gold/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <div className={`${image.className} relative overflow-hidden border border-ambassador-silver/10 group-hover:border-rose-gold/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-rose-gold/10`}>
                {/* Lifestyle Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-ambassador-silver/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-rose-gold/40 rounded-full"></div>
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover content */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-inter text-sm text-ivory/90">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;
