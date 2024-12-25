import React from 'react';
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, Brain, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomAnalysisPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Análises <span className="text-orange-300">Customizadas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Transforme seus dados em insights acionáveis com análises personalizadas para seu negócio.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Solicitar Análise <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossas Soluções de Análise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <LineChart className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Análise Preditiva</h3>
            <p className="text-gray-600">
              Preveja tendências e comportamentos futuros com base em dados históricos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <PieChart className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Segmentação de Dados</h3>
            <p className="text-gray-600">
              Identifique padrões e grupos relevantes em seus dados.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Brain className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
            <p className="text-gray-600">
              Algoritmos avançados para análises complexas e automação.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios das Análises Customizadas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Decisões Baseadas em Dados</h3>
                    <p className="text-gray-600">Tome decisões estratégicas com confiança usando insights precisos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Otimização de Processos</h3>
                    <p className="text-gray-600">Identifique gargalos e oportunidades de melhoria.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">ROI Mensurável</h3>
                    <p className="text-gray-600">Acompanhe o retorno sobre investimento de forma clara.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Insights Acionáveis</h3>
                    <p className="text-gray-600">Recomendações práticas baseadas em análises profundas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Vantagem Competitiva</h3>
                    <p className="text-gray-600">Mantenha-se à frente da concorrência com insights únicos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Escalabilidade</h3>
                    <p className="text-gray-600">Soluções que crescem com seu negócio.</p>
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
            Pronto para transformar seus dados em resultados?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Começar Agora <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}