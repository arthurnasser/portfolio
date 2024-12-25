import React from 'react';
import { BarChart3, Globe2, Search } from 'lucide-react';

export default function SeoTools() {
  const tools = [
    {
      icon: Globe2,
      name: "Google PageSpeed Insights",
      description: "Analisa a velocidade e performance do seu site em dispositivos móveis e desktop, fornecendo recomendações técnicas para melhorias.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      metrics: [
        "First Contentful Paint",
        "Time to Interactive",
        "Speed Index",
        "Core Web Vitals"
      ]
    },
    {
      icon: BarChart3,
      name: "GT Metrix",
      description: "Ferramenta completa de análise de performance que avalia a velocidade de carregamento, otimização de recursos e experiência do usuário.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      metrics: [
        "Performance Score",
        "Structure Score",
        "Fully Loaded Time",
        "Page Size"
      ]
    },
    {
      icon: Search,
      name: "SEMrush",
      description: "Plataforma completa de marketing digital que oferece análise de palavras-chave, posicionamento, concorrentes e oportunidades de SEO.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      metrics: [
        "Ranking de Palavras-chave",
        "Análise de Concorrentes",
        "Tráfego Orgânico",
        "Backlinks"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ferramentas de Análise SEO
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <tool.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600">Principais métricas:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {tool.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}