import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeoHero from '../components/seo/SeoHero';
import SeoServices from '../components/seo/SeoServices';
import SeoProcess from '../components/seo/SeoProcess';
import SeoBenefits from '../components/seo/SeoBenefits';
import SeoTools from '../components/seo/SeoTools';

export default function SeoPage() {
  return (
    <div className="min-h-screen pt-16">
      <SeoHero />
      <SeoServices />
      <SeoProcess />
      <SeoBenefits />
      <SeoTools />

      {/* Results Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Resultados Reais
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-orange-500 mb-2">85%</p>
              <p className="text-gray-600">Aumento em tráfego orgânico</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">Top 3</p>
              <p className="text-gray-600">Posições no Google</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <p className="text-4xl font-bold text-orange-500 mb-2">300%</p>
              <p className="text-gray-600">Mais conversões</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para alcançar o topo do Google?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Solicitar Proposta <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}