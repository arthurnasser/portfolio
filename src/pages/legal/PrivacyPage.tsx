import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Última atualização: 27/11/2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
            <p>
              A AgoraConectou valoriza a sua privacidade e está comprometida em proteger as informações pessoais de todos os usuários. Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos seus dados, garantindo transparência e conformidade com as legislações aplicáveis de proteção de dados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Informações que Coletamos</h2>
            <p className="mb-4">Durante o uso de nossos serviços, podemos coletar as seguintes informações:</p>
            <ul className="list-disc pl-6">
              <li>Dados pessoais: Nome completo, endereço de e-mail e número de telefone.</li>
              <li>Informações empresariais: Nome da empresa, setor de atuação e outros dados relacionados ao serviço contratado.</li>
              <li>Dados de uso: Informações sobre como você interage com nosso site, como páginas acessadas, tempo de navegação e endereço IP.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Como Utilizamos Suas Informações</h2>
            <p className="mb-4">Os dados coletados são utilizados para os seguintes fins:</p>
            <ul className="list-disc pl-6">
              <li>Prestação de serviços: Garantir a entrega eficiente de soluções contratadas, como campanhas de marketing digital, criação de sites e consultorias.</li>
              <li>Comunicações: Enviar atualizações, notificações sobre serviços e materiais promocionais que possam ser do seu interesse.</li>
              <li>Aprimoramento de produtos e serviços: Analisar dados de uso para melhorar nossas soluções e personalizar a experiência do usuário.</li>
              <li>Cumprimento de obrigações legais: Atender a requisitos legais ou regulatórios aplicáveis.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Proteção de Dados</h2>
            <p className="mb-4">Adotamos medidas de segurança técnicas, administrativas e organizacionais para proteger suas informações contra:</p>
            <ul className="list-disc pl-6">
              <li>Acesso não autorizado</li>
              <li>Alteração indevida</li>
              <li>Divulgação acidental ou proposital</li>
              <li>Perda ou destruição de dados</li>
            </ul>
            <p className="mt-4">
              Essas medidas incluem o uso de criptografia, firewalls, controle de acesso e auditorias regulares de segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="mb-4">Você tem total controle sobre seus dados pessoais e pode exercer os seguintes direitos:</p>
            <ul className="list-disc pl-6">
              <li>Acessar seus dados: Solicitar uma cópia das informações que mantemos sobre você.</li>
              <li>Corrigir informações: Atualizar ou corrigir dados imprecisos ou desatualizados.</li>
              <li>Excluir dados: Solicitar a remoção de seus dados de nossos registros, exceto quando necessário para cumprimento de obrigações legais.</li>
              <li>Retirar consentimento: Revogar sua autorização para o uso de dados em atividades específicas, como comunicações de marketing.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Retenção de Dados</h2>
            <p>
              Manteremos suas informações pessoais apenas pelo período necessário para cumprir os fins descritos nesta política ou conforme exigido por lei. Após esse prazo, seus dados serão excluídos ou anonimizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossos processos ou na legislação aplicável. Qualquer alteração será publicada em nosso site, e recomendamos que você revise esta política regularmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
            <p>
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao uso de suas informações pessoais, entre em contato conosco:{' '}
              <a href="mailto:privacidade@agoraconectou.com.br" className="text-orange-500 hover:text-purple-600">
                privacidade@agoraconectou.com.br
              </a>
            </p>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Nota: Ao continuar a utilizar nossos serviços, você confirma que leu e compreendeu esta Política de Privacidade e concorda com seus termos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}