import React from 'react';
import { ArrowRight, FileSpreadsheet, Clock, Zap, RefreshCw, CheckCircle2, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReportAutomationPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Relatórios <span className="text-orange-300">Automatizados</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Automatize a geração e distribuição de relatórios para maior eficiência e produtividade.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Começar Agora <ArrowRight className="w-5 h-5" />
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
            <Clock className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Agendamento Flexível</h3>
            <p className="text-gray-600">
              Programe relatórios para serem gerados e enviados automaticamente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <FileSpreadsheet className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Múltiplos Formatos</h3>
            <p className="text-gray-600">
              Exporte relatórios em PDF, Excel, CSV e outros formatos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Settings className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Personalização Total</h3>
            <p className="text-gray-600">
              Customize layouts e métricas conforme sua necessidade.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios da Automação
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Economia de Tempo</h3>
                    <p className="text-gray-600">Reduza horas de trabalho manual na geração de relatórios.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Maior Precisão</h3>
                    <p className="text-gray-600">Elimine erros humanos no processamento de dados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Consistência</h3>
                    <p className="text-gray-600">Mantenha um padrão consistente em todos os relatórios.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Distribuição Automática</h3>
                    <p className="text-gray-600">Envie relatórios automaticamente para stakeholders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Escalabilidade</h3>
                    <p className="text-gray-600">Processe grandes volumes de dados sem esforço adicional.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Compliance</h3>
                    <p className="text-gray-600">Mantenha registros consistentes para conformidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Examples Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Exemplos de Automação
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img 
              src="https://dashboarddesign.com.br/wp-content/uploads/2019/05/Planilha-de-Dashboard-Financeiro.png"
              alt="Relatórios Financeiros"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Relatórios Financeiros</h3>
            <p className="text-gray-600">
              Automatize relatórios de vendas, despesas e fluxo de caixa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img 
              src="https://blog.mailbiz.com.br/wp-content/uploads/2020/01/captura-de-tela-2020-01-20-s-17.58.19.png"
              alt="Funil de Vendas"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Funil de Vendas</h3>
            <p className="text-gray-600">
              Visão completa da jornada do cliente: desde o conhecimento até o fechamento.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para automatizar seus relatórios?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Fale com um Especialista <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}