import React from 'react';
import { Search, Settings, TrendingUp, BarChart3 } from 'lucide-react';

export default function SeoProcess() {
  const steps = [
    {
      icon: Search,
      title: "1. Análise",
      description: "Auditoria técnica e análise de palavras-chave",
      color: "orange"
    },
    {
      icon: Settings,
      title: "2. Otimização",
      description: "Implementação das melhorias identificadas",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "3. Monitoramento",
      description: "Acompanhamento de métricas e rankings",
      color: "orange"
    },
    {
      icon: BarChart3,
      title: "4. Ajustes",
      description: "Otimização contínua baseada em dados",
      color: "purple"
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossa Metodologia
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <step.icon className={`w-8 h-8 text-${step.color}-500`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}