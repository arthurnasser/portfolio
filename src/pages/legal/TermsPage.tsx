import React from 'react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Última atualização: 27/11/2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site e os serviços da AgoraConectou, você declara que leu, compreendeu e concorda em cumprir estes Termos de Uso. Caso não concorde com os termos aqui descritos, solicitamos que não utilize nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Serviços Oferecidos</h2>
            <p className="mb-4">A AgoraConectou é especializada em soluções de marketing digital e tecnologia, oferecendo:</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Gestão de Campanhas Ads</h3>
            <p className="mb-4">
              Criação, configuração e otimização de anúncios em plataformas como Google Ads e Facebook Ads para maximizar o retorno sobre o investimento (ROI).
            </p>

            <h3 className="text-xl font-semibold mb-2">Sistemas de CRM</h3>
            <p className="mb-4">
              Configuração e implementação de sistemas de gestão de relacionamento com clientes (CRM), otimizando a organização e o acompanhamento de leads e clientes.
            </p>

            <h3 className="text-xl font-semibold mb-2">Criação e Manutenção de Websites</h3>
            <p className="mb-4">
              Desenvolvimento de sites modernos e responsivos, incluindo atualizações regulares e suporte técnico.
            </p>

            <h3 className="text-xl font-semibold mb-2">Gestão e Manutenção de Blogs</h3>
            <p>
              Planejamento, criação e publicação de conteúdos estratégicos para atrair e engajar públicos, utilizando técnicas de SEO para aumentar a visibilidade online.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todos os materiais e conteúdos disponíveis em nosso site, como textos, imagens, logotipos, vídeos e softwares, são de propriedade exclusiva da AgoraConectou ou licenciados por parceiros. Estes materiais são protegidos por leis de direitos autorais e outras legislações aplicáveis.
            </p>
            <p className="mt-4">
              Você não está autorizado a copiar, reproduzir, distribuir ou modificar qualquer conteúdo sem nossa permissão expressa por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Responsabilidades do Usuário</h2>
            <p className="mb-4">Ao contratar ou utilizar nossos serviços, você se compromete a:</p>
            <ul className="list-disc pl-6">
              <li>Fornecer informações verdadeiras, completas e atualizadas para a execução dos serviços;</li>
              <li>Garantir a segurança e confidencialidade das credenciais de acesso fornecidas;</li>
              <li>Não utilizar os serviços para práticas ilegais ou antiéticas;</li>
              <li>Respeitar a propriedade intelectual da AgoraConectou e de terceiros;</li>
              <li>Cooperar para a implementação das estratégias e soluções contratadas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="mb-4">A AgoraConectou não se responsabiliza por:</p>
            <ul className="list-disc pl-6">
              <li>Resultados esperados com campanhas ou estratégias que dependam de fatores externos, como mudanças em algoritmos de plataformas;</li>
              <li>Danos diretos, indiretos ou consequentes causados por falhas técnicas de terceiros ou indisponibilidade de serviços das plataformas de anúncios;</li>
              <li>Perdas de dados, lucros cessantes ou interrupções causadas por ações fora de nosso controle.</li>
            </ul>
            <p className="mt-4">
              O uso de nossos serviços é feito por sua conta e risco, e os resultados podem variar conforme o setor, o público-alvo e as condições do mercado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de atualizar ou modificar estes Termos de Uso a qualquer momento. Quaisquer mudanças serão publicadas em nosso site e entrarão em vigor imediatamente após a publicação. É responsabilidade do usuário revisar periodicamente os Termos para estar ciente de possíveis atualizações.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p>
              Se tiver dúvidas ou precisar de mais informações sobre estes Termos de Uso, entre em contato conosco pelo e-mail:{' '}
              <a href="mailto:legal@agoraconectou.com.br" className="text-orange-500 hover:text-purple-600">
                legal@agoraconectou.com.br
              </a>
            </p>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Nota Final: A continuidade do uso dos serviços após alterações nos Termos será considerada como aceitação automática das mudanças.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}