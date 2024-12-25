import React from 'react';
import { TrendingUp, Users, Target, Clock } from 'lucide-react';

export default function SeoBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Tráfego Qualificado",
      description: "Atraia visitantes que realmente procuram seus produtos ou serviços"
    },
    {
      icon: Users,
      title: "Autoridade da Marca",
      description: "Construa credibilidade e confiança com seu público-alvo"
    },
    {
      icon: Target,
      title: "ROI Sustentável",
      description: "Resultados duradouros e crescimento orgânico consistente"
    },
    {
      icon: Clock,
      title: "24/7 Visibilidade",
      description: "Sua empresa sempre visível para potenciais clientes"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Benefícios do SEO
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <benefit.icon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}