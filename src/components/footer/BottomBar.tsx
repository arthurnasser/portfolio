import { Link } from 'react-router-dom';

export default function BottomBar() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-sm">
            © {currentYear} Arthur Nasser. Todos os direitos reservados.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-orange-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-500 transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-orange-500 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}