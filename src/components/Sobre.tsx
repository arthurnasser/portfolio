
const Sobre = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Adicionei um margin-top ao container principal para corrigir o problema de sobreposição */}
      <div className="relative mb-8 flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Transformação Digital: Estratégias de Marketing, Economia e Análise de Dados
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Com mais de 10 anos de experiência em tecnologia, marketing digital e ciência de dados, sou Mestre em
            Economia e especialista em transformar desafios financeiros e estratégicos em soluções inovadoras. Meu foco
            está em criar crescimento sustentável e gerar valor agregado para empresas e clientes.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://i.ibb.co/0GJ9ZkR/f716777f-ed94-422c-a069-a6e3dde6980f-1.jpg"
            alt="Banner"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            style={{
              objectPosition: 'center',
            }}
          />
        </div>
      </div>



        <h2 className="text-3xl font-bold mb-6">Experiência Profissional</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">Supply Labs</h3>
            <p className="text-gray-600 mb-2">Product Owner | Planejamento | Marketing Digital</p>
            <p className="text-gray-500 text-sm">[2023 - Presente]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Foco em otimização de processos, desenvolvimento de estratégias digitais e liderança de equipes multidisciplinares. Entrega: Melhoria na eficiência operacional e aumento no engajamento digital.
            </p>
            <img
              src="https://supplylabs.com.br/wp-content/themes/supplylabs/assets/imgs/logos/logo-blue.png"
              alt="Supply Labs Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">Delta Investor</h3>
            <p className="text-gray-600 mb-2">Data Scientist & Analytics</p>
            <p className="text-gray-500 text-sm">[2022 - 2023]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Implantei um banco de dados e criei indicadores de desempenho utilizando Big Data. Entrega: Implementação de um sistema de dados que otimizou a tomada de decisões.
            </p>
            <img
              src="https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2019%2F05%2F12%2F01%2FLogo-e-Cartao-de-Visita-256599_386583_010454454_737943563.jpg"
              alt="Delta Investor Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">NEWCORE</h3>
            <p className="text-gray-600 mb-2">Co-Founder, Digital, COO</p>
            <p className="text-gray-500 text-sm">[2017 - 2022]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Desenvolvi um aplicativo para corretores imobiliários independentes, aumentando suas vendas. Entrega: R$ 270 milhões em vendas em 2020 com 3 mil corretores licenciados.
            </p>
            <img
              src="https://play-lh.googleusercontent.com/_TnRkNkVmB1HzgEsX794N4DQPA2O5qGgWCnp5KsVDzoLtL6A7-acSb03fNyfU-nl2gvS"
              alt="NEWCORE Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">LPS Brasil Consultoria de Imóveis</h3>
            <p className="text-gray-600 mb-2">
              Trajetória: Head Digital e Growth, Gerente de Operações e CRM, Analista de GPN
            </p>
            <p className="text-gray-500 text-sm">[2008 - 2017]</p>
            <ul className="list-disc pl-5 mt-2 text-sm">
              <li>Gestão de campanhas digitais e SEO, aumentando leads orgânicos em 30%.</li>
              <li>Implementação da rede de franquias e expansão operacional das sócias.</li>
              <li>Desenvolvimento de sistemas para gestão de produtos, vendas e CRM para mais de 10 mil corretores.</li>
              <li>Aumento de 15% nas intermediações através de campanhas de marketing direto.</li>
            </ul>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Logo-Lopes-Consultoria-de-Imoveis-2020.png"
              alt="LPS Brasil Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Formação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">Insper</h3>
            <p className="text-gray-600 mb-2">Mestrado em Economia</p>
            <p className="text-gray-500 text-sm">[2016 - 2017]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Foco em economia aplicada e análises quantitativas. Dissertação: Análise do valor das externalidades urbanas em São Paulo, utilizando modelos de preços hedônicos e de painéis para quantificar o impacto de parques urbanos, transporte por metrô e criminalidade no valor dos imóveis.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEczeZjgOrsqNE5KQAB-Ql92I4HPR2jgh2KA&s"
              alt="Insper Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">FEA USP</h3>
            <p className="text-gray-600 mb-2">Bacharelado em Economia</p>
            <p className="text-gray-500 text-sm">[2004 - 2008]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Fundamentos sólidos em economia com foco em mercados financeiros. Destaque: Projeto de conclusão sobre a influência de políticas monetárias no crescimento econômico.
            </p>
            <img
              src="https://media.licdn.com/dms/image/C4D12AQHX9Dy11u91Bw/article-cover_image-shrink_600_2000/0/1523524386192?e=2147483647&v=beta&t=LzrWxzez-wJYPc5VBELwOkOPSovJIr3PgHg-hHUpM9s"
              alt="USP FEA Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">FGV</h3>
            <p className="text-gray-600 mb-2">MBA em Administração de Empresas</p>
            <p className="text-gray-500 text-sm">[2010 - 2011]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Desenvolvimento de competências em gestão empresarial e liderança. Destaque: Projeto final focado em reestruturação organizacional para empresas de médio porte.
            </p>
            <img
              src="https://framerusercontent.com/images/a2mWYga2vj6S3fCmtk5gNm91zGg.png"
              alt="FGV Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 relative">
            <h3 className="text-xl font-bold mb-2">FGV</h3>
            <p className="text-gray-600 mb-2">MBA em Gestão de Projetos</p>
            <p className="text-gray-500 text-sm">[2012 - 2013]</p>
            <p className="text-gray-700 mt-4 text-sm">
              Foco em metodologia ágil e gestão de equipes multidisciplinares, aplicada em grandes projetos de tecnologia.
            </p>
            <img
              src="https://framerusercontent.com/images/a2mWYga2vj6S3fCmtk5gNm91zGg.png"
              alt="FGV Logo"
              className="absolute top-4 right-4 w-20 h-auto"
            />
          </div>
        </div>
      </div>
  );
};

export default Sobre;
