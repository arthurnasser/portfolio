import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Marketing Digital',
    question: 'Quanto tempo leva para ver resultados com marketing digital?',
    answer: 'O tempo para resultados varia conforme a estratégia. Campanhas de ads podem gerar resultados imediatos, enquanto SEO e marketing de conteúdo geralmente levam de 3 a 6 meses para mostrar resultados significativos. O importante é manter consistência e otimização contínua das estratégias.'
  },
  {
    category: 'Marketing Digital',
    question: 'Qual o investimento mínimo recomendado para marketing digital?',
    answer: 'O investimento varia conforme seus objetivos e mercado. Recomendamos começar com um orçamento mínimo de R$ 1.500 para campanhas de ads, permitindo testes e otimizações. Para uma estratégia completa, incluindo gestão de redes sociais e conteúdo, o investimento médio é a partir de R$ 3.000 mensais.'
  },
  {
    category: 'Campanhas ADS',
    question: 'Quais plataformas de anúncios são mais efetivas?',
    answer: 'A efetividade depende do seu público-alvo e tipo de negócio. Google Ads é excelente para captar pessoas com intenção de compra, enquanto Facebook e Instagram Ads são ótimos para construção de marca e produtos visuais. Recomendamos testar diferentes plataformas e medir os resultados.'
  },
  {
    category: 'Campanhas ADS',
    question: 'Como melhorar o ROI das minhas campanhas?',
    answer: 'Para melhorar o ROI: 1) Defina objetivos claros, 2) Segmente adequadamente seu público, 3) Crie anúncios relevantes e persuasivos, 4) Monitore e otimize constantemente, 5) Teste diferentes formatos e mensagens, 6) Mantenha landing pages otimizadas para conversão.'
  },
  {
    category: 'SEO',
    question: 'Por que meu site não aparece no Google?',
    answer: 'Diversos fatores influenciam o ranqueamento: 1) Conteúdo relevante e original, 2) Otimização técnica do site, 3) Autoridade do domínio, 4) Experiência do usuário, 5) Links de qualidade. É importante realizar uma análise completa de SEO para identificar pontos de melhoria.'
  },
  {
    category: 'SEO',
    question: 'Com que frequência devo publicar conteúdo novo?',
    answer: 'A frequência ideal depende dos seus recursos e mercado. O mais importante é manter consistência e qualidade. Recomendamos no mínimo 4 publicações mensais bem pesquisadas e otimizadas. Mais importante que quantidade é produzir conteúdo relevante e útil para seu público.'
  },
  {
    category: 'Websites',
    question: 'Quanto custa criar um site profissional?',
    answer: 'O custo varia conforme a complexidade. Sites institucionais, e-commerces e plataformas mais complexas podem variar de R$ 15.000 a R$ 50.000 ou mais. Cada projeto é único e orçado conforme suas necessidades específicas. Cobramos MUITO menos'
  },
  {
    category: 'Websites',
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O prazo médio é: Sites institucionais (30-45 dias), E-commerces básicos (45-60 dias), Plataformas complexas (90-120 dias). O prazo pode variar conforme a complexidade do projeto e a agilidade na entrega de conteúdos pelo cliente.Nós fazemos em até 5 dias'
  },
  {
    category: 'Consultoria',
    question: 'Como funciona a consultoria de marketing digital?',
    answer: 'Nossa consultoria inclui: 1) Diagnóstico completo do seu negócio, 2) Definição de estratégias personalizadas, 3) Planejamento de ações, 4) Acompanhamento de resultados, 5) Reuniões periódicas de alinhamento, 6) Relatórios de performance. Trabalhamos de forma próxima para alcançar seus objetivos.'
  },
  {
    category: 'Consultoria',
    question: 'Qual a duração mínima do contrato de consultoria?',
    answer: 'Recomendamos um período mínimo de 3 meses para conseguir implementar estratégias e ver resultados consistentes. No entanto, oferecemos flexibilidade conforme suas necessidades, incluindo consultorias pontuais para projetos específicos.'
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Tire suas dúvidas sobre marketing digital e nossas soluções
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="space-y-4">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f === faq);
                  const isOpen = openItems.includes(globalIndex);

                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      
                      <div
                        className={`bg-gray-50 transition-all duration-200 ease-in-out ${
                          isOpen ? 'max-h-96 p-4' : 'max-h-0'
                        } overflow-hidden`}
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}