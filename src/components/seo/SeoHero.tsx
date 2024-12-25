import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeoHero() {
  return (
    <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Otimização <span className="text-orange-300">SEO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Aumente sua visibilidade orgânica e alcance as primeiras posições do Google com estratégias avançadas de SEO.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
            >
              Análise Gratuita <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="SEO Analytics Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}