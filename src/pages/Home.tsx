import React from 'react';
import { 
  Target, Users, Zap, Search, PenTool, Calculator,
  BarChart3, FileText, BookOpen, TrendingUp, DollarSign, 
  PieChart 
} from 'lucide-react';
import BannerSlider from '../components/banners/BannerSlider';
import ServiceSection from '../components/services/ServiceSection';
import ChatBot from '../components/chat/ChatBot';

export default function Home() {
  const digitalServices = [
    {
      icon: Target,
      title: "Campanhas ADS",
      description: "Campanhas otimizadas para Facebook e Google Ads que geram resultados reais.",
      path: "/ads"
    },
    {
      icon: Users,
      title: "Sistema CRM",
      description: "Gestão completa do relacionamento com seus clientes para aumentar vendas.",
      path: "/crm"
    },
    {
      icon: Zap,
      title: "Criação de Sites",
      description: "Websites modernos e otimizados para conversão, com design responsivo.",
      path: "/websites"
    }
  ];

  const financialServices = [
    {
      icon: Calculator,
      title: "Gestão Financeira",
      description: "Otimize seus processos financeiros e tome decisões baseadas em dados.",
      path: "/financial-management"
    },
    {
      icon: DollarSign,
      title: "Planejamento Tributário",
      description: "Estratégias inteligentes para otimização fiscal do seu negócio.",
      path: "/tax-planning"
    },
    {
      icon: TrendingUp,
      title: "Análise de Investimentos",
      description: "Avaliação detalhada de oportunidades e riscos para seu portfólio.",
      path: "/investment-analysis"
    }
  ];

  const contentServices = [
    {
      icon: PenTool,
      title: "Redação Profissional",
      description: "Conteúdo estratégico que engaja seu público e fortalece sua marca.",
      path: "/blog-content"
    },
    {
      icon: FileText,
      title: "Blog Corporativo",
      description: "Gestão completa do seu blog com conteúdo otimizado para SEO.",
      path: "/blog"
    },
    {
      icon: BookOpen,
      title: "E-books e Materiais",
      description: "Materiais ricos para nutrição de leads e autoridade.",
      path: "/ebooks"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <BannerSlider />
      
      <ServiceSection
        title="Marketing Digital e Tecnologia"
        description="Soluções completas para transformar sua presença digital e impulsionar seus resultados."
        services={digitalServices}
      />
      
      <ServiceSection
        title="Soluções Financeiras Inteligentes"
        description="Otimize seus processos financeiros e tome decisões mais assertivas com nossas soluções."
        services={financialServices}
        bgColor="bg-gray-50"
      />
      
      <ServiceSection
        title="Redação Profissional e Conteúdo"
        description="Conteúdo estratégico que engaja seu público e fortalece sua marca no mercado."
        services={contentServices}
      />
      
      <ChatBot />
    </div>
  );
}