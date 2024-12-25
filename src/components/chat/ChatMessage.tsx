
import type { ChatMessage as ChatMessageType } from '../../types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'};`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot
            ? 'bg-gray-100 text-gray-800'
            : 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message.text}</p>
      </div>
    </div>
  );
}
