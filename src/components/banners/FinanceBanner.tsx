import React from 'react';
import Banner from './Banner';

export default function FinanceBanner() {
  return (
    <Banner
      title="Soluções Financeiras"
      highlight="Inteligentes"
      description="Otimize seus processos financeiros com análise de dados e automação inteligente."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
      buttonText="Conhecer Soluções"
      buttonLink="/contact"
    />
  );
}