import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  services: Service[];
  bgColor?: string;
}

export default function ServiceSection({ 
  title, 
  description, 
  services,
  bgColor = 'bg-white'
}: ServiceSectionProps) {
  return (
    <div className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.path}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <service.icon className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-purple-600 font-semibold group-hover:text-orange-500 transition-colors inline-flex items-center gap-2">
                Saiba mais <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}