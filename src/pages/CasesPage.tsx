import React from 'react';
import { ArrowRight, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    id: 1,
    company: "E-commerce de Moda",
    challenge: "Aumentar vendas online e reduzir custo de aquisição",
    solution: "Implementação de campanhas segmentadas no Facebook Ads e Google Shopping",
    results: [
      "300% de aumento em vendas",
      "Redução de 45% no CAC",
      "ROAS de 5.2"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 2,
    company: "SaaS B2B",
    challenge: "Gerar leads qualificados para software empresarial",
    solution: "Estratégia integrada de SEO e LinkedIn Ads",
    results: [
      "180 leads/mês",
      "Custo por lead reduzido em 60%",
      "Taxa de conversão de 12%"
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  },
  {
    id: 3,
    company: "Clínica Odontológica",
    challenge: "Aumentar agendamentos de consultas",
    solution: "Google Ads + Instagram + Remarketing",
    results: [
      "150 novos pacientes/mês",
      "ROI de 380%",
      "Lista de espera criada"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
];

const metrics = [
  {
    label: "Clientes Atendidos",
    value: "500+",
    icon: Users
  },
  {
    label: "ROI Médio",
    value: "350%",
    icon: TrendingUp
  },
  {
    label: "Leads Gerados",
    value: "50k+",
    icon: Target
  },
  {
    label: "Taxa de Conversão",
    value: "12%",
    icon: BarChart3
  }
];

export default function CasesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Casos de Sucesso
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Conheça as histórias de transformação digital dos nossos clientes
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="bg-white py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cases Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {cases.map((case_, index) => (
            <div 
              key={case_.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={case_.image}
                    alt={case_.company}
                    className="w-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{case_.company}</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Desafio</h3>
                    <p className="text-gray-600">{case_.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solução</h3>
                    <p className="text-gray-600">{case_.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Resultados</h3>
                    <ul className="space-y-2">
                      {case_.results.map((result, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para ser nosso próximo caso de sucesso?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-orange-100 transition-colors gap-2"
          >
            Fale Conosco <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}