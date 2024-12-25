
const LeadManagement = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão de Leads</h1>
      <p className="mb-4">
        A Gestão de Leads é o processo de capturar, organizar, qualificar e acompanhar os leads (potenciais clientes) ao longo do funil de vendas, com o objetivo de convertê-los em clientes reais.
      </p>
      <h2 className="text-xl font-semibold mb-2">Exemplo Prático de Uso em CRM</h2>
      <p className="mb-4">
        <strong>Cenário:</strong> Uma empresa oferece um software de automação para pequenas e médias empresas. O objetivo é captar leads interessados no produto e convertê-los em clientes.
      </p>
      <h3 className="text-lg font-semibold mb-2">Etapas do Processo de Gestão de Leads:</h3>
      <h4 className="text-md font-semibold mb-1">Captura de Leads</h4>
      <p className="mb-2">
        O lead preenche um formulário em uma landing page após acessar um conteúdo gratuito, como um e-book sobre automação empresarial.
      </p>
      <p className="mb-2"><strong>Informações capturadas:</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>Nome</li>
        <li>E-mail</li>
        <li>Empresa</li>
        <li>Cargo</li>
        <li>Necessidades (campo opcional)</li>
      </ul>
      <h4 className="text-md font-semibold mb-1">Armazenamento e Organização</h4>
      <p className="mb-2">
        O CRM armazena automaticamente os dados do lead e organiza-o em uma lista segmentada, como "Interessados em Automação".
      </p>
      <p className="mb-2">O sistema pode categorizar leads por estágio no funil:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Topo: Baixou um e-book.</li>
        <li>Meio: Interagiu com um e-mail ou visitou mais páginas no site.</li>
        <li>Fundo: Solicitou um contato comercial.</li>
      </ul>
      <h4 className="text-md font-semibold mb-1">Qualificação de Leads</h4>
      <p className="mb-2">
        O CRM usa critérios de pontuação (lead scoring) para priorizar os leads mais promissores.
      </p>
      <p className="mb-2"><strong>Exemplo de pontuação:</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>Preencheu o campo "Necessidades": +10 pontos.</li>
        <li>Visitou a página de preços: +15 pontos.</li>
        <li>Respondeu a um e-mail: +5 pontos.</li>
      </ul>
      <h4 className="text-md font-semibold mb-1">Nutrição de Leads</h4>
      <p className="mb-2">
        Um e-mail automático é enviado com materiais educativos, como um artigo sobre os benefícios da automação empresarial.
      </p>
      <p className="mb-2">
        Caso o lead interaja (clique ou responda), o CRM registra essa interação e avança o lead no funil.
      </p>
      <h4 className="text-md font-semibold mb-1">Acompanhamento Comercial</h4>
      <p className="mb-2">
        Quando o lead atinge um nível alto de qualificação, o CRM notifica o time de vendas.
      </p>
      <p className="mb-2">
        O vendedor pode entrar em contato por telefone ou e-mail com base nas informações registradas.
      </p>
      <h4 className="text-md font-semibold mb-1">Conversão em Cliente</h4>
      <p className="mb-2">
        Após uma apresentação personalizada e negociação, o lead fecha o contrato e se torna cliente.
      </p>
      <p className="mb-2">
        O CRM registra essa conversão e move o lead para a lista de clientes.
      </p>
      <h3 className="text-lg font-semibold mb-2">Ferramentas do CRM para Gestão de Leads</h3>
      <h4 className="text-md font-semibold mb-1">Formulários de Captura</h4>
      <p className="mb-2">
        Ferramentas para criar formulários e landing pages integradas ao CRM.
      </p>
      <h4 className="text-md font-semibold mb-1">Lead Scoring</h4>
      <p className="mb-2">
        Algoritmo que atribui pontos aos leads com base em comportamento e perfil.
      </p>
      <h4 className="text-md font-semibold mb-1">Automação de E-mails</h4>
      <p className="mb-2">
        Campanhas automáticas para nutrir leads com base em interações.
      </p>
      <h4 className="text-md font-semibold mb-1">Segmentação de Leads</h4>
      <p className="mb-2">
        Separação de leads em grupos, como "pequenas empresas" ou "grandes corporações".
      </p>
      <h4 className="text-md font-semibold mb-1">Relatórios e Análises</h4>
      <p className="mb-2">
        Métricas como taxa de conversão, tempo médio de fechamento e fontes de leads mais eficazes.
      </p>
    </div>
  );
};

export default LeadManagement;