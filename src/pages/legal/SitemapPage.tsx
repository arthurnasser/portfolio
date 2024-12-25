import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SitemapPage() {
  const sections = [
    {
      title: 'Páginas Principais',
      links: [
        { name: 'Página Inicial', path: '/' },
        { name: 'Campanhas ADS', path: '/ads' },
        { name: 'Sistema CRM', path: '/crm' },
        { name: 'Criação de Sites', path: '/websites' },
        { name: 'Conteúdo para Blog', path: '/blog-content' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contato', path: '/contact' },
      ],
    },
    {
      title: 'Área Administrativa',
      links: [
        { name: 'Login Admin', path: '/admin/login' },
        { name: 'Dashboard do Blog', path: '/admin/blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidade', path: '/privacy' },
        { name: 'Termos de Uso', path: '/terms' },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Mapa do Site</h1>
        
        <div className="grid gap-12">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="grid gap-4">
                {section.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}