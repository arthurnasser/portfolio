
import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <Wifi className="h-8 w-8 text-orange-500" />
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
        Arthur Nasser
      </span>
    </Link>
  );
}
