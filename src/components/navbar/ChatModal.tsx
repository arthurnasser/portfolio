```typescript
import React from 'react';
import { X } from 'lucide-react';
import ChatBot from '../chat/ChatBot';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-orange-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <ChatBot embedded />
        </div>
      </div>
    </div>
  );
}
```