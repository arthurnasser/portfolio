import React from 'react';

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
      <p className="text-sm mb-4">
        Receba novidades e conteúdos exclusivos sobre marketing digital.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Inscrever-se
        </button>
      </form>
    </div>
  );
}