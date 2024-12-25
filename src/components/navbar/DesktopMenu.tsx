import CustomNavLink from './CustomNavLink';
import DropdownMenu from './DropdownMenu';
import { navigationData } from './navigationData';

interface DesktopMenuProps {
  onChatOpen: () => void;
}

export default function DesktopMenu({ onChatOpen }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <DropdownMenu 
        label="Soluções em Digital"
        items={navigationData.digitalSolutions}
      />
      
      <DropdownMenu 
        label="Economia e Finanças"
        items={navigationData.economyAndFinance}
        width="w-72"
      />
      
      <DropdownMenu 
        label="Hub de Conteúdo"
        items={navigationData.contentHub}
      />

      <DropdownMenu 
        label="Ciência de Dados"
        items={navigationData.dataScience}
      />

      <CustomNavLink to="/sobre">Bio</CustomNavLink>

      <button
        onClick={onChatOpen}
        className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Fale Conosco
      </button>
    </div>
  );
}