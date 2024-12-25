import React from 'react';
import { ArrowRight, Layout, Smartphone, Zap, Search, Code, Globe2, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsitesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sites que <span className="text-orange-300">Vendem</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Websites modernos e otimizados para conversão, com design responsivo e alta performance.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Solicitar Orçamento <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Por que escolher nossos sites?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Layout className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Design Responsivo</h3>
            <p className="text-gray-600">
              Sites que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência para seus clientes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Search className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Otimizado para SEO</h3>
            <p className="text-gray-600">
              Desenvolvido com as melhores práticas de SEO para rankear melhor no Google e atrair mais visitantes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Gauge className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Alta Performance</h3>
            <p className="text-gray-600">
              Carregamento ultra rápido e otimizado para garantir a melhor experiência aos seus visitantes.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tecnologias Modernas
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">React.js</h3>
              <p className="text-gray-600 text-sm">Interfaces modernas e interativas</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Smartphone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Mobile First</h3>
              <p className="text-gray-600 text-sm">Design pensado para dispositivos móveis</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Globe2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">APIs Modernas</h3>
              <p className="text-gray-600 text-sm">Integração com sistemas externos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Otimização</h3>
              <p className="text-gray-600 text-sm">Performance e velocidade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nosso Processo de Desenvolvimento
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layout className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Planejamento</h3>
            <p className="text-gray-600">Análise e definição de requisitos</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Desenvolvimento</h3>
            <p className="text-gray-600">Codificação e implementação</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Testes</h3>
            <p className="text-gray-600">Validação e otimização</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">4. Lançamento</h3>
            <p className="text-gray-600">Publicação e monitoramento</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para ter um site que vende?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Solicitar Orçamento <ArrowRight className="w-5 h-5" />
            </Link>
      
          </div>
        </div>
      </div>
    </div>
  );
}