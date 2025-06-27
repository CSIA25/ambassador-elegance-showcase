
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductHighlight from '../components/ProductHighlight';
import BrandStory from '../components/BrandStory';
import LifestyleGallery from '../components/LifestyleGallery';
import SocialEngagement from '../components/SocialEngagement';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-charcoal text-ivory overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ProductHighlight />
      <BrandStory />
      <LifestyleGallery />
      <SocialEngagement />
      <Footer />
    </div>
  );
};

export default Index;
