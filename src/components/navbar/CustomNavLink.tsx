import React from 'react';
import { Link } from 'react-router-dom';

const CustomNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link to={to} className="text-gray-700 hover:text-orange-500 transition-colors">
      {children}
    </Link>
  );
};

export default CustomNavLink;