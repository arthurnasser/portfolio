import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

const EMAILJS_SERVICE_ID = 'service_yq8lnxv';
const EMAILJS_TEMPLATE_ID = 'template_9a28z9p';
const EMAILJS_PUBLIC_KEY = 'PCQmzNOAKvTxrs1Ui';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        toast.success('Mensagem enviada com sucesso!');
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale Conosco</h2>
          <p className="text-gray-600">
            Estamos prontos para impulsionar seu negócio digital. Preencha o formulário abaixo e entraremos em contato.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo *
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail *
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefone *
            </label>
            <input
              type="tel"
              id="user_phone"
              name="user_phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label htmlFor="user_company" className="block text-sm font-medium text-gray-700 mb-1">
              Empresa
            </label>
            <input
              type="text"
              id="user_company"
              name="user_company"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Nome da sua empresa"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              placeholder="Como podemos ajudar?"
            />
          </div>

          {/* Hidden fields for EmailJS template */}
          <input type="hidden" name="to_name" value="Arthur Nasser" />
          <input type="hidden" name="to_email" value="arthurnasser@gmail.com" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <Send className="animate-pulse" />
                Enviando...
              </>
            ) : (
              <>
                <Send />
                Enviar Mensagem
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-600 justify-center">
              <CheckCircle className="w-5 h-5" />
              <span>Mensagem enviada com sucesso!</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 justify-center">
              <XCircle className="w-5 h-5" />
              <span>Erro ao enviar mensagem. Tente novamente.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}