import React from 'react';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ebooks = [
  {
    id: 1,
    title: "Guia Completo de Marketing Digital 2024",
    description: "Aprenda as principais estratégias e tendências para alavancar seu negócio online.",
    cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    pages: 45,
    downloadLink: "#"
  },
  {
    id: 2,
    title: "SEO: Do Básico ao Avançado",
    description: "Descubra como otimizar seu site e alcançar as primeiras posições no Google.",
    cover: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    pages: 38,
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Facebook & Instagram Ads",
    description: "O guia definitivo para criar campanhas de sucesso nas redes sociais.",
    cover: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    pages: 52,
    downloadLink: "#"
  },
  {
    id: 4,
    title: "Copywriting para Vendas",
    description: "Técnicas avançadas de escrita persuasiva para aumentar suas conversões.",
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    pages: 35,
    downloadLink: "#"
  }
];

export default function EbooksPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            E-books Gratuitos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Conteúdo exclusivo para impulsionar seus resultados no marketing digital
          </p>
        </div>
      </div>

      {/* E-books Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {ebooks.map((ebook) => (
            <div key={ebook.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={ebook.cover}
                  alt={ebook.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{ebook.title}</h3>
                <p className="text-gray-600 mb-4">{ebook.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500">
                    <BookOpen className="w-5 h-5" />
                    <span>{ebook.pages} páginas</span>
                  </div>
                  <Link
                    to={ebook.downloadLink}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-5 h-5" />
                    Download
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Quer conteúdo personalizado para seu negócio?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity gap-2"
          >
            Fale Conosco <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}