import React from 'react';
import Banner from './Banner';

export default function ContentBanner() {
  return (
    <Banner
      title="Redação Profissional e"
      highlight="Conteúdo"
      description="Conteúdo estratégico e otimizado que engaja seu público e fortalece sua marca."
      image="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
      buttonText="Ver Serviços"
      buttonLink="/contact"
    />
  );
}