import React from 'react';
import Banner from './Banner';

export default function MarketingBanner() {
  return (
    <Banner
      title="Marketing Digital e"
      highlight="Tecnologia"
      description="Transforme sua presença digital com estratégias personalizadas e resultados mensuráveis."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
      buttonText="Começar Agora"
      buttonLink="/contact"
    />
  );
}