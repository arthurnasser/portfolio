import React from 'react';
import { ArrowRight, BarChart3, Target, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Campanhas ADS que <span className="text-orange-300">Convertem</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Campanhas otimizadas para Facebook e Google Ads que geram resultados reais para seu negócio.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Fale com Especialista <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Platform Examples */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Facebook Ads Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Facebook & Instagram Ads</h2>
            <div className="space-y-8">
              {/* Feed Ad Example */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Gerenciamento Profissional</h3>
                <img 
                  src="https://measureschool.com/wp-content/uploads/2021/09/Checking-the-number-of-ads-present-in-a-Facebook-ad-campaign-from-Facebook-Business-Manager-1024x478.jpg"
                  alt="Facebook Campaign Management"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">Gestão completa de campanhas com monitoramento em tempo real e otimização contínua.</p>
              </div>
              
              {/* Stories Ad Example */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Escala Inteligente</h3>
                <img 
                  src="https://grecos.com.br/wp-content/uploads/2023/12/Escala-no-facebook-ads-com-simplificacao-de-conta-e-1-campanha-2.png.webp"
                  alt="Facebook Ads Scaling"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">Estratégias avançadas de escala para maximizar resultados mantendo o ROI.</p>
              </div>

              {/* Performance Example */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Análise de Performance</h3>
                <img 
                  src="https://grecos.com.br/wp-content/uploads/2023/12/6.png.webp"
                  alt="Campaign Performance Analysis"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">Relatórios detalhados e insights para tomada de decisões estratégicas.</p>
              </div>
            </div>
          </div>

          {/* Google Ads Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Google Ads</h2>
            <div className="space-y-8">
              {/* Search Ad Example */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Anúncios de Pesquisa</h3>
                <img 
                  src="https://www.oleoshop.com/imagenes/poridentidad?identidad=c38003d8-237a-43fb-af7a-0fc221f06b9b&ancho=850&alto="
                  alt="Google Search Ads Example"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">Apareça no topo das pesquisas relevantes para seu negócio com anúncios otimizados.</p>
              </div>

              {/* Display Ad Example */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Display & Remarketing</h3>
                <img 
                  src="https://www.oleoshop.com/imagenes/poridentidad?identidad=a648c761-c1b3-40cf-82e6-5463c7489d8c&ancho=850&alto="
                  alt="Google Display Ads Example"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">Alcance seu público-alvo em toda a rede de display do Google com anúncios visuais impactantes.</p>
              </div>

              {/* Analytics Example */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Análise Avançada</h3>
                <img 
                  src="https://d1ih8jugeo2m5m.cloudfront.net/2021/12/relatorios-google-ads-campanhas.jpg"
                  alt="Google Ads Analytics"
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-600">Relatórios detalhados e métricas avançadas para otimização contínua das campanhas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados Reais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="E-commerce Case Study"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">E-commerce</h3>
              <p className="text-4xl font-bold text-orange-500 text-center mb-2">300%</p>
              <p className="text-gray-600 text-center">Aumento em vendas online</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="SaaS Case Study"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">SaaS</h3>
              <p className="text-4xl font-bold text-purple-600 text-center mb-2">-40%</p>
              <p className="text-gray-600 text-center">Redução no custo por lead</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Local Business Case Study"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Negócio Local</h3>
              <p className="text-4xl font-bold text-orange-500 text-center mb-2">10x</p>
              <p className="text-gray-600 text-center">ROI em campanhas locais</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nosso Processo</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Análise</h3>
            <p className="text-gray-600">Estudo profundo do seu negócio e público-alvo</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Estratégia</h3>
            <p className="text-gray-600">Planejamento detalhado das campanhas</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Execução</h3>
            <p className="text-gray-600">Implementação e monitoramento contínuo</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Otimização</h3>
            <p className="text-gray-600">Ajustes baseados em dados para maximizar resultados</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para Impulsionar seu Negócio?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Agende uma Consultoria Gratuita <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}