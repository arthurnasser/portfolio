import React from 'react';
import { Search, Globe2, BarChart3, CheckCircle } from 'lucide-react';

export default function SeoServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nossos Serviços de SEO
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <Search className="w-12 h-12 text-orange-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Otimização On-Page</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Pesquisa de palavras-chave
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Otimização de meta tags
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Estruturação de conteúdo
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Otimização de imagens
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <Globe2 className="w-12 h-12 text-purple-600 mb-6" />
          <h3 className="text-xl font-bold mb-4">Otimização Off-Page</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Link building estratégico
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Guest posting
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Citações locais
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Redes sociais
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          <BarChart3 className="w-12 h-12 text-orange-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Análise e Relatórios</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Monitoramento de rankings
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Análise de concorrentes
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Relatórios mensais
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              Recomendações técnicas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}