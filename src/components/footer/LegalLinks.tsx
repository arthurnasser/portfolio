import React from 'react';
import { Link } from 'react-router-dom';

export default function LegalLinks() {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/privacy" className="text-sm hover:text-orange-500 transition-colors">
            Política de Privacidade
          </Link>
        </li>
        <li>
          <Link to="/terms" className="text-sm hover:text-orange-500 transition-colors">
            Termos de Uso
          </Link>
        </li>
        <li>
          <Link to="/sitemap" className="text-sm hover:text-orange-500 transition-colors">
            Sitemap
          </Link>
        </li>
      </ul>
    </div>
  );
}