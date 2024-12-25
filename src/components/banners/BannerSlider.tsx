import React, { useState, useEffect } from 'react';
import MarketingBanner from './MarketingBanner';
import FinanceBanner from './FinanceBanner';
import ContentBanner from './ContentBanner';

export default function BannerSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [MarketingBanner, FinanceBanner, ContentBanner];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const CurrentBannerComponent = banners[currentBanner];

  return (
    <div className="relative">
      <CurrentBannerComponent />
      
      {/* Banner Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentBanner === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}