import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  name: string;
  path: string;
}

interface DropdownMenuProps {
  label: string;
  items: MenuItem[];
  width?: string;
}

export default function DropdownMenu({ label, items, width = 'w-48' }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
        {label}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      <div className={`absolute left-0 mt-2 ${width} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
        <div className="py-1">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
