import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BannerProps {
  title: string;
  highlight: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export default function Banner({ 
  title, 
  highlight, 
  description, 
  image, 
  buttonText, 
  buttonLink 
}: BannerProps) {
  return (
    <div className="relative bg-gradient-to-br from-purple-600 to-orange-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title} <span className="text-orange-300">{highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {description}
            </p>
            <Link
              to={buttonLink}
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors gap-2"
            >
              {buttonText} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="hidden md:block">
            <img 
              src={image}
              alt={title}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}