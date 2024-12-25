import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Menu, X, ChevronDown } from 'lucide-react';
import ChatBot from './chat/ChatBot';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<keyof typeof submenuRefs | null>(null);

  const submenuRefs = {
    solutions: useRef<HTMLDivElement>(null),
    finance: useRef<HTMLDivElement>(null),
    content: useRef<HTMLDivElement>(null),
    crm: useRef<HTMLDivElement>(null),
  };

  const solutions = [
    { name: 'Campanhas ADS', path: '/ads' },
    { name: 'Criação de Sites', path: '/websites' },
    { name: 'Otimização SEO', path: '/seo' },
    { name: 'Gestão de Redes Sociais', path: '/social-media' },
    { name: 'Análise de Dados', path: '/data-analysis' },
  ];

  const crmItems = [
    { name: 'Sistema CRM', path: '/crm' },
    { name: 'E-mail Marketing', path: '/email-marketing' },
    { name: 'Inbound Marketing', path: '/inbound-marketing' },
    { name: 'Gestão de Leads', path: '/lead-management' },
  ];

  const contentHub = [
    { name: 'Conteúdo para Blog', path: '/blog-content' },
    { name: 'E-books e Infográficos', path: '/ebooks-infographics' },
    { name: 'Estruturação de  Cursos', path: '/webinars-courses' },
    { name: 'Artigos e Dissertações', path: '/articles-dissertations' },

    
  ];

  const financeItems = [
    { name: 'Consultoria Financeira', path: '/finance-consulting' },
    { name: 'Análises e Projeções', path: '/analysis-projections' },
    { name: 'Relatórios Gerenciais', path: '/management-reports' },
    { name: 'Dashboards e Planilhas', path: '/automation-optimization' },
    { name: 'Planejamento e Orçamento', path: '/planning-budgeting' },
    { name: 'Estudos Econômicos', path: '/economic-studies' },
  ];

  const toggleSubmenu = (menu: keyof typeof submenuRefs) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  // Handle clicks outside the submenus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openSubmenu &&
        submenuRefs[openSubmenu] &&
        !submenuRefs[openSubmenu]?.current?.contains(event.target as Node)
      ) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openSubmenu]);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Wifi className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
                Arthur Nasser
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={submenuRefs.solutions}>
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('solutions')}
              >
                Digital
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'solutions' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  openSubmenu === 'solutions' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative" ref={submenuRefs.crm}>
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('crm')}
              >
                CRM
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'crm' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  openSubmenu === 'crm' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {crmItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative" ref={submenuRefs.finance}>
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('finance')}
              >
                Finanças
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'finance' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  openSubmenu === 'finance' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {financeItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative" ref={submenuRefs.content}>
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('content')}
              >
                Conteúdo
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'content' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  openSubmenu === 'content' ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {contentHub.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/blog"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>

            <Link
              to="/faqs"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>

            <Link
              to="/sobre"
              className="text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre mim
            </Link>

            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Saiba Mais
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('solutions')}
              >
                Digital
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'solutions' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openSubmenu === 'solutions' && (
                <div
                  ref={submenuRefs.solutions}
                  className="mt-2 w-full bg-white shadow-lg rounded-md py-2"
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('crm')}
              >
                CRM
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'crm' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openSubmenu === 'crm' && (
                <div
                  ref={submenuRefs.crm}
                  className="mt-2 w-full bg-white shadow-lg rounded-md py-2"
                >
                  {crmItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('finance')}
              >
                Finanças
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'finance' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openSubmenu === 'finance' && (
                <div
                  ref={submenuRefs.finance}
                  className="mt-2 w-full bg-white shadow-lg rounded-md py-2"
                >
                  {financeItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                onClick={() => toggleSubmenu('content')}
              >
                Conteúdo
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openSubmenu === 'content' ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openSubmenu === 'content' && (
                <div
                  ref={submenuRefs.content}
                  className="mt-2 w-full bg-white shadow-lg rounded-md py-2"
                >
                  {contentHub.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenSubmenu(null);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/blog"
              className="block text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/faqs"
              className="block text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link
              to="/sobre"
              className="block text-gray-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre mim
            </Link>
            <button
              onClick={() => setIsChatOpen(true)}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg mx-4">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-orange-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <ChatBot embedded />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}