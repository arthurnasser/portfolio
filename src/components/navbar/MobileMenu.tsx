import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from './navigationData';
import MobileSubmenu from './MobileSubmenu';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onChatOpen: () => void;
}

export default function MobileMenu({ isOpen, onClose, onChatOpen }: MobileMenuProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenSubmenu(null);
  };

  const menuClasses = `md:hidden transition-all duration-300 ease-in-out ${
    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  }`;

  return (
    <div className={menuClasses}>
      <div className="bg-white shadow-lg">
        <Link
          to="/"
          className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-500 transition-colors border-b border-gray-100"
          onClick={handleLinkClick}
        >
          Início
        </Link>

        <MobileSubmenu
          label="Soluções em Digital"
          isOpen={openSubmenu === 'digital'}
          onToggle={() => toggleSubmenu('digital')}
          items={navigationData.digitalSolutions}
          onItemClick={handleLinkClick}
        />

        <MobileSubmenu
          label="Economia e Finanças"
          isOpen={openSubmenu === 'finance'}
          onToggle={() => toggleSubmenu('finance')}
          items={navigationData.economyAndFinance}
          onItemClick={handleLinkClick}
        />

        <MobileSubmenu
          label="Hub de Conteúdo"
          isOpen={openSubmenu === 'content'}
          onToggle={() => toggleSubmenu('content')}
          items={navigationData.contentHub}
          onItemClick={handleLinkClick}
        />

        <div className="p-4">
          <button
            onClick={() => {
              onClose();
              onChatOpen();
            }}
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-3 rounded-full hover:opacity-90 transition-opacity text-center font-medium"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </div>
  );
}
