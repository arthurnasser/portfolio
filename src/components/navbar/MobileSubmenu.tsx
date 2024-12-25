
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MobileSubmenuProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  items: Array<{ name: string; path: string; }>;
  onItemClick: () => void;
}

export default function MobileSubmenu({ 
  label, 
  isOpen, 
  onToggle, 
  items, 
  onItemClick 
}: MobileSubmenuProps) {
  const submenuClasses = `${
    isOpen ? 'max-h-screen py-2' : 'max-h-0'
  } overflow-hidden transition-all duration-300 bg-gray-50`;

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
      >
        {label}
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <div className={submenuClasses}>
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-8 py-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
