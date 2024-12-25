import React from 'react';
import { ArrowRight, Users, MessageSquare, BarChart3, Zap, Target, CheckCircle2, Smartphone, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrmPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sistema CRM <span className="text-orange-300">Completo</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Gestão completa do relacionamento com seus clientes para aumentar vendas e fidelização.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
              >
                Solicitar Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                alt="CRM Dashboard"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Tudo que você precisa em um único lugar
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Gestão de Leads</h3>
            <p className="text-gray-600">
              Organize todos os seus leads e oportunidades em um funil de vendas intuitivo e eficiente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Atendimento Integrado</h3>
            <p className="text-gray-600">
              Centralize todas as conversas com clientes em uma única plataforma multicanal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Relatórios Avançados</h3>
            <p className="text-gray-600">
              Análise completa do seu funil de vendas com métricas e KPIs importantes.
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Recursos Principais</h2>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pipeline de Vendas</h3>
                  <p className="text-gray-600">
                    Visualize e gerencie todo seu funil de vendas de forma visual e intuitiva.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automação de Tarefas</h3>
                  <p className="text-gray-600">
                    Automatize tarefas repetitivas e aumente a produtividade da sua equipe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">App Mobile</h3>
                  <p className="text-gray-600">
                    Acesse suas informações de qualquer lugar com nosso aplicativo mobile.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="CRM Features"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Integração com suas ferramentas favoritas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com as principais ferramentas do mercado e centralize suas operações
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Globe2 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Website</h3>
            <p className="text-gray-600 text-sm">Capture leads do seu site automaticamente</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <MessageSquare className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm">Integração com WhatsApp Business</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm">Métricas e análises avançadas</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Automação</h3>
            <p className="text-gray-600 text-sm">Integração com ferramentas de automação</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "O CRM revolucionou nossa gestão de vendas. Aumentamos em 40% nossa taxa de conversão."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Cliente"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">João Silva</p>
                  <p className="text-sm text-gray-500">Diretor Comercial</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "A automação de tarefas nos economiza horas de trabalho manual todos os dias."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Cliente"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Maria Santos</p>
                  <p className="text-sm text-gray-500">Gerente de Vendas</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6">
                "Os relatórios nos ajudam a tomar decisões mais assertivas e estratégicas."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                  alt="Cliente"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">Pedro Costa</p>
                  <p className="text-sm text-gray-500">CEO</p>
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
            Pronto para transformar sua gestão de vendas?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Começar Agora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Agendar Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}