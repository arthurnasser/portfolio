import React from 'react';
import { ArrowRight, Database, LineChart, BarChart3, PieChart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataToolsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ferramentas de <span className="text-orange-300">Dados</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            As melhores ferramentas de análise de dados para impulsionar seu negócio.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Conhecer Soluções <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossas Ferramentas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Google PageSpeed Insights"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Google PageSpeed Insights</h3>
            <p className="text-gray-600 mb-4">
              Analisa a velocidade e performance do seu site em dispositivos móveis e desktop, fornecendo recomendações técnicas para melhorias.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                First Contentful Paint
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Time to Interactive
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Speed Index
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Core Web Vitals
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="GT Metrix"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold mb-4">GT Metrix</h3>
            <p className="text-gray-600 mb-4">
              Ferramenta completa de análise de performance que avalia a velocidade de carregamento, otimização de recursos e experiência do usuário.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Performance Score
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Structure Score
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Fully Loaded Time
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                Page Size
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="SEMrush"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-bold mb-4">SEMrush</h3>
            <p className="text-gray-600 mb-4">
              Plataforma completa de marketing digital que oferece análise de palavras-chave, posicionamento, concorrentes e oportunidades de SEO.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Ranking de Palavras-chave
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Análise de Concorrentes
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Tráfego Orgânico
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Backlinks
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Análise em Tempo Real</h3>
                    <p className="text-gray-600">Monitore métricas importantes em tempo real.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Relatórios Personalizados</h3>
                    <p className="text-gray-600">Crie relatórios adaptados às suas necessidades.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Integração de Dados</h3>
                    <p className="text-gray-600">Conecte diferentes fontes de dados em um só lugar.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Visualização Avançada</h3>
                    <p className="text-gray-600">Gráficos e dashboards interativos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Exportação Flexível</h3>
                    <p className="text-gray-600">Exporte dados em múltiplos formatos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Segurança Avançada</h3>
                    <p className="text-gray-600">Proteção e controle de acesso aos dados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para potencializar sua análise de dados?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Falar com Especialista <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}