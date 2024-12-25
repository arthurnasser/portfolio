export type ChatStep = 'name' | 'service' | 'timeline' | 'budget' | 'contact_preference' | 'contact_info' | 'email' | 'phone';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export interface UserData {
  name: string;
  service: string;
  timeline: string;
  budget: string;
  contactPreference: string;
  email?: string;
  phone?: string;
}