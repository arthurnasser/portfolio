import { ArrowRight, BarChart3, Brain, Target, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BiConsultingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Consultoria em <span className="text-orange-300">BI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Transforme seus dados em decisões estratégicas com nossa consultoria especializada em Business Intelligence.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Agendar Consultoria <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossas Soluções em BI
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Brain className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Estratégia de Dados</h3>
            <p className="text-gray-600">
              Desenvolvimento de roadmap e estratégia de BI alinhada aos objetivos do negócio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <BarChart3 className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-bold mb-4">Implementação de BI</h3>
            <p className="text-gray-600">
              Configuração e implementação de ferramentas de Business Intelligence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <Target className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-xl font-bold mb-4">Otimização de KPIs</h3>
            <p className="text-gray-600">
              Definição e monitoramento de indicadores-chave de performance.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ferramentas e Tecnologias
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img 
                src="https://windsor.ai/wp-content/uploads/2019/12/data-studio-multi-touch-attribution-1-700x365.png.webp"
                alt="Google Data Studio"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Looker Studio</h3>
              <p className="text-gray-600">
                Visualizações interativas e relatórios dinâmicos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img 
                src="https://zoomchartswebstorage.blob.core.windows.net/blog/20221125_145312_mceu-23630351411669387979339.png"
                alt="Power BI"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Power BI</h3>
              <p className="text-gray-600">
                Análises avançadas e dashboards personalizados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img 
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/354703970/original/b28847eb4671eee2401fd99a9db6ecba53ee4a6c/do-interactive-dashboards-for-you-using-tableau.jpg"
                alt="Tableau"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Tableau</h3>
              <p className="text-gray-600">
                Visualizações de dados de alto impacto.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Benefícios da Consultoria em BI
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Decisões Baseadas em Dados</h3>
                  <p className="text-gray-600">Tome decisões estratégicas com base em dados confiáveis.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Eficiência Operacional</h3>
                  <p className="text-gray-600">Otimize processos e reduza custos operacionais.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Insights em Tempo Real</h3>
                  <p className="text-gray-600">Monitore KPIs e métricas importantes em tempo real.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Vantagem Competitiva</h3>
                  <p className="text-gray-600">Identifique oportunidades e antecipe tendências do mercado.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">ROI Mensurável</h3>
                  <p className="text-gray-600">Acompanhe e meça o retorno sobre investimento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Escalabilidade</h3>
                  <p className="text-gray-600">Soluções que crescem junto com seu negócio.</p>
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
            Pronto para transformar seus dados em resultados?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
          >
            Agendar Consultoria <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}