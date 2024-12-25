import React from 'react';
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Gauge, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InteractiveDashboardsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Dashboards <span className="text-orange-300">Interativos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Visualize seus dados em tempo real com dashboards dinâmicos e interativos.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Ver Demonstração <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recursos Principais
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Gauge className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Atualização em Tempo Real</h3>
            <p className="text-gray-600">
              Monitore seus KPIs com dados atualizados automaticamente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Share2 className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Compartilhamento Fácil</h3>
            <p className="text-gray-600">
              Compartilhe insights com sua equipe em tempo real.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <TrendingUp className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Análise de Tendências</h3>
            <p className="text-gray-600">
              Identifique padrões e tendências importantes nos dados.
            </p>
          </div>
        </div>
      </div>

      {/* Dashboard Examples */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Exemplos de Dashboards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img 
                src="https://cdn.prod.website-files.com/5efb0b7816032fd33ce6059c/62d5bbc98f1e1333116cd204_Screen%20Shot%202021-10-07%20at%2012.36.png"
                alt="Dashboard Vendas"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Dashboard de Vendas</h3>
              <p className="text-gray-600">
                Acompanhe métricas de vendas, conversão e performance de produtos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img 
                src="https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F3V7axLNnk7iDQzyVFmIudf%2F9944bfaca4262b4b47e86dd05ddd8021%2FDigital-Marketing-Reporting-Software-AgencyAnalytics.png&w=3840&q=75"
                alt="Dashboard Marketing"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Dashboard de Marketing</h3>
              <p className="text-gray-600">
                Visualize ROI de campanhas, engajamento e métricas de conversão.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para visualizar seus dados de forma eficiente?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Solicitar Demonstração <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}