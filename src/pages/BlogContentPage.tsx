import React from 'react';
import { ArrowRight, PenTool, Target, TrendingUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogContentPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Conteúdo que <span className="text-orange-300">Engaja</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Conteúdo estratégico e otimizado para SEO que atrai e engaja seu público-alvo.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Ver Estratégias <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <PenTool className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Produção de Conteúdo</h3>
            <p className="text-gray-600">
              Artigos, e-books e materiais ricos produzidos por especialistas em sua área.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Search className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Otimização SEO</h3>
            <p className="text-gray-600">
              Conteúdo otimizado para palavras-chave estratégicas e melhores práticas de SEO.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Estratégia Editorial</h3>
            <p className="text-gray-600">
              Planejamento completo de conteúdo alinhado aos objetivos do seu negócio.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Análise de Resultados</h3>
            <p className="text-gray-600">
              Monitoramento constante e otimização baseada em dados.
            </p>
          </div>
        </div>
      </div>

      {/* Example Posts */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Últimos Artigos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://studiovisual.com.br/wp-content/uploads/2024/09/Como-criar-um-Site-Profissional-Passo-a-Passo-1-1.jpg"
                alt="Marketing Digital"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">10 Estratégias de Marketing Digital</h3>
                <p className="text-gray-600 mb-4">Aprenda as melhores práticas para alavancar seu negócio online.</p>
                <Link to="/blog" className="text-purple-600 font-semibold hover:text-orange-500 transition-colors">
                  Ler mais →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="SEO"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Guia Completo de SEO</h3>
                <p className="text-gray-600 mb-4">Descubra como rankear seu site no topo do Google.</p>
                <Link to="/blog" className="text-purple-600 font-semibold hover:text-orange-500 transition-colors">
                  Ler mais →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Redes Sociais"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Redes Sociais para Negócios</h3>
                <p className="text-gray-600 mb-4">Como criar uma presença digital forte e engajada.</p>
                <Link to="/blog" className="text-purple-600 font-semibold hover:text-orange-500 transition-colors">
                  Ler mais →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para Criar Conteúdo que Converte?
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