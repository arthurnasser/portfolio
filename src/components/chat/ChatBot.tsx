import React from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import { useChat } from '../../hooks/useChat';
import ChatMessage from './ChatMessage';

interface ChatBotProps {
  embedded?: boolean;
}

export default function ChatBot({ embedded = false }: ChatBotProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { 
    messages, 
    currentStep, 
    userInput, 
    setUserInput, 
    handleSubmit,
    isComplete,
    resetChat
  } = useChat();

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      resetChat();
    }
  };

  // If embedded, render only the chat content
  if (embedded) {
    return (
      <div className="w-full bg-white rounded-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-4">
          <h3 className="text-white font-semibold">Quero te conhecer melhor</h3>
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        {/* Input Area */}
        {!isComplete && (
          <form 
            onSubmit={handleSubmit} 
            className="border-t p-4 flex gap-2"
          >
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={`Digite ${
                currentStep === 'name' ? 'seu nome' :
                currentStep === 'email' ? 'seu email' :
                currentStep === 'phone' ? 'seu telefone' :
                currentStep === 'service' ? 'o serviço desejado' :
                currentStep === 'timeline' ? 'o prazo desejado' :
                currentStep === 'budget' ? 'seu orçamento' :
                '...'
              };`}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    );
  }

  // Floating chat button and window
  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-orange-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Chat"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageSquare className="w-8 h-8" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">Fale Conosco</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          {/* Input Area */}
          {!isComplete && currentStep === 'service' && (
            <div className="border-t p-4">
              <p>Escolha uma das opções:</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <button
                    onClick={() => setUserInput('CRM - Sistema de Gestão')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    1️⃣ CRM - Sistema de Gestão
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setUserInput('Campanhas ADS')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    2️⃣ Campanhas ADS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setUserInput('Otimização SEO')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    3️⃣ Otimização SEO
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setUserInput('Site Novo')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    4️⃣ Site Novo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setUserInput('Social Media')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    5️⃣ Social Media
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setUserInput('Blog Profissional')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    6️⃣ Blog Profissional
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setUserInput('Consultoria Digital')}
                    className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                  >
                    7️⃣ Consultoria Digital
                  </button>
                </li>
              </ul>
            </div>
          )}

          {!isComplete && currentStep !== 'service' && (
            <form 
              onSubmit={handleSubmit} 
              className="border-t p-4 flex gap-2"
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={`Digite ${
                  currentStep === 'name' ? 'seu nome' :
                  currentStep === 'email' ? 'seu email' :
                  currentStep === 'phone' ? 'seu telefone' :
                  currentStep === 'timeline' ? 'o prazo desejado' :
                  currentStep === 'budget' ? 'seu orçamento' :
                  '...'
                }`}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}