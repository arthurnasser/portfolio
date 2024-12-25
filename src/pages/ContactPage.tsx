import React from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vamos Conversar?
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa a alcançar resultados extraordinários no mundo digital.
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}