import React from 'react';
import { Star, Quote, ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "CEO",
    company: "Fashion Store",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    content: "A parceria com a AgoraConectou transformou completamente nosso e-commerce. Em apenas 3 meses, triplicamos nossas vendas online e reduzimos significativamente o custo de aquisição de clientes.",
    rating: 5,
    metrics: {
      increase: "300%",
      metric: "em vendas"
    }
  },
  {
    id: 2,
    name: "João Santos",
    role: "Diretor de Marketing",
    company: "TechSoft Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    content: "As estratégias de marketing digital implementadas pela equipe são excepcionais. Nossa geração de leads aumentou consideravelmente, e o mais importante: leads muito mais qualificados.",
    rating: 5,
    metrics: {
      increase: "180",
      metric: "leads/mês"
    }
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Proprietária",
    company: "Clínica Sorrir",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    content: "Nunca imaginei que o marketing digital pudesse trazer tantos pacientes para minha clínica. A equipe entendeu perfeitamente nosso público-alvo e desenvolveu campanhas certeiras.",
    rating: 5,
    metrics: {
      increase: "150",
      metric: "novos pacientes/mês"
    }
  }
];

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Empresas Atendidas"
  },
  {
    icon: Users,
    value: "98%",
    label: "Taxa de Satisfação"
  },
  {
    icon: TrendingUp,
    value: "10x",
    label: "ROI Médio"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Depoimentos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Veja o que nossos clientes dizem sobre nossas soluções
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-purple-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-purple-200 absolute -top-4 -left-4" />
                <p className="text-gray-600 relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-purple-600">
                  {testimonial.metrics.increase}
                </p>
                <p className="text-gray-600">{testimonial.metrics.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para transformar seu negócio?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-orange-100 transition-colors gap-2"
          >
            Fale Conosco <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}