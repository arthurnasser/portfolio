
import { useState } from 'react'; 
import { Menu, X } from 'lucide-react';
import ChatBot from '../chat/ChatBot';
import Logo from './Logo';
import NavLink from './NavLink';
import DropdownMenu from './DropdownMenu';
import MobileMenu from './MobileMenu';
import { navigationData } from './navigationData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Sobre</NavLink>

            <DropdownMenu
              label="Soluções em Digital"
              items={navigationData.digitalSolutions}
            />

            <DropdownMenu
              label="Soluções Financeiras"
              items={navigationData.economyAndFinance}
              width="w-64"
            />

            <DropdownMenu
              label="Hub de Conteúdo"
              items={navigationData.contentHub}
            />

            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Fale Conosco
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
      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onChatOpen={() => setIsChatOpen(true)}
      />

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg mx-4">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-orange-300 transition-colors"
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
