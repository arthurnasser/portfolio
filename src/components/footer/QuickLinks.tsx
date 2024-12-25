import { Link } from 'react-router-dom';

export default function QuickLinks() {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/ads" className="text-sm hover:text-orange-500 transition-colors">
            Campanhas ADS
          </Link>
        </li>
        <li>
          <Link to="/crm" className="text-sm hover:text-orange-500 transition-colors">
            Sistema CRM
          </Link>
        </li>
        <li>
          <Link to="/websites" className="text-sm hover:text-orange-500 transition-colors">
            Criação de Sites
          </Link>
        </li>

        <li>
          <Link to="/seo" className="text-sm hover:text-orange-500 transition-colors">
            SEO
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-sm hover:text-orange-500 transition-colors">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}