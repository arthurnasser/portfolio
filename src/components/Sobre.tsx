const Sobre = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      {/* Seção Principal */}
      <div className="relative mb-16 flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
            Soluções Estratégicas
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
         Tecnologia, Economia e Marketing Digital
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-justify mt-16">
            Sou especialista em tecnologia, marketing digital e ciência de dados, com mais de 10 anos de experiência. Ao longo da minha carreira, desenvolvi soluções que geram impacto real e criam valor para empresas e clientes, ajudando-os a enfrentar desafios financeiros e estratégicos de maneira inovadora.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative ml-10">
          <div className="relative">
            <img
              src="https://i.ibb.co/0GJ9ZkR/f716777f-ed94-422c-a069-a6e3dde6980f-1.jpg"
              alt="Banner"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"
              style={{ opacity: 0.5 }}
            ></div>
          </div>
        </div>
      </div>

      {/* Seção Projetos */}
      <div className="my-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-64">
            <img
              src="https://audiologydesign.com/wp-content/uploads/2023/03/3.27.23-SEO_jargon.png"
              alt="SEO"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Estratégias de SEO
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                }}
              >
                Aumentamos o tráfego orgânico em 32% e o Authority Score de 0
                para 24 em 5 meses com estratégias de SEO local e backlinks de
                alta qualidade.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-64">
            <img
              src="https://www.agenciakaizen.com.br/wp-content/uploads/2024/01/google-ads-e-meta-ads-1-1024x682.png"
              alt="Campanhas Ads"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Campanhas Ads
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                }}
              >
                CPC de R$ 0,35 e CPM de R$ 2,83, alcançando 1,6 milhão de
                pessoas com campanhas otimizadas e estratégias eficazes.
              </p>
            </div>
          </div>

          {/* Card 3: Sites de Alta Performance */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-64">
            <img
              src="https://www.hostgator.com.br/blog/wp-content/uploads/2020/09/tudo-sobre-como-criar-sites-incriveis.jpeg"
              alt="Sites de Alta Performance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Sites de Alta Performance
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                }}
              >
                Desenvolvimento de sites responsivos, rápidos e otimizados para
                conversões, garantindo alta performance e excelente experiência
                do usuário.
              </p>
            </div>
          </div>

          {/* Card 4: Conteúdo e Artigos Acadêmicos */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-64">
            <img
              src="https://i0.wp.com/www.aaronsw.com/weblog/imgs/writing.jpg"
              alt="Conteúdo e Artigos Acadêmicos"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Conteúdo e Artigos Acadêmicos
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                }}
              >
                Criação de conteúdos técnicos e artigos acadêmicos com base em
                dados, pesquisas e estratégias de comunicação eficazes.
              </p>
            </div>
          </div>

          {/* Card 5: Análises Financeiras */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-64">
            <img
              src="https://image.shutterstock.com/image-illustration/financial-analysis-charts-calculations-multiple-260nw-1885426659.jpg"
              alt="Análises Financeiras"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Análises Financeiras
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                }}
              >
                Consultoria e análises financeiras detalhadas, auxiliando na
                tomada de decisões estratégicas e no planejamento de negócios.
              </p>
            </div>
          </div>

          {/* Card 6: Sistema de CRM */}
          <div className="relative rounded-lg shadow-lg overflow-hidden h-64">
            <img
              src="https://www.salesforce.com/content/dam/web/en_us/www/images/home/ts-promo/CRM-thumbnail.png"
              alt="Sistema de CRM"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
              <h3
                className="text-3xl font-bold text-white mb-2"
                style={{
                  textShadow: "3px 3px 6px rgba(0, 0, 0, 1)",
                }}
              >
                Sistema de CRM
              </h3>
              <p
                className="text-white text-sm"
                style={{
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 1)",
                }}
              >
                Desenvolvimento de sistemas de CRM personalizados para melhorar
                o relacionamento com clientes e impulsionar vendas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Experiência Profissional */}
      <h2 className="text-3xl font-bold mb-6 text-center">Experiência Profissional</h2>
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

      {/* Seção Formação */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Formação</h2>
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