import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail, validatePhone, formatPhone, validateOption } from '../utils/validation';
import type { ChatMessage, ChatStep, UserData } from '../types/chat';

const EMAILJS_SERVICE_ID = 'service_yq8lnxv';
const EMAILJS_TEMPLATE_ID = 'template_9a28z9p';
const EMAILJS_PUBLIC_KEY = 'PCQmzNOAKvTxrs1Ui';

const SERVICE_OPTIONS = `Escolha uma das opções:
1️⃣ Campanhas Ads ou SEO
2️⃣ Construir um site
3️⃣ Conteúdo, CRM, Email Marketing
4️⃣ Análises Financeiras ou Planilhas
5️⃣ Gestão de Mídias Sociais ou Blog
6️⃣ Dashboard e Ciência de Dados
7️⃣ Outro`;

const CONTACT_OPTIONS = `Como prefere receber contato?
1️⃣ WhatsApp
2️⃣ E-mail
3️⃣ Ambos`;

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: 'Olá! Qual o seu nome? 😊', sender: 'bot' }
  ]);
  const [currentStep, setCurrentStep] = useState<ChatStep>('name');
  const [userInput, setUserInput] = useState('');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    service: '',
    timeline: '',
    budget: '',
    contactPreference: '',
    email: '',
    phone: ''
  });
  const [isComplete, setIsComplete] = useState(false);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const sendEmail = async (data: UserData) => {
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: 'Arthur Nasser',
          to_email: 'arthurnasser@gmail.com',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          service: data.service,
          timeline: data.timeline,
          budget: data.budget,
          contact_preference: data.contactPreference,
          message: `Nome: ${data.name}\nServiço: ${data.service}\nPrazo: ${data.timeline}\nOrçamento: ${data.budget}\nPreferência de contato: ${data.contactPreference}\nEmail: ${data.email}\nWhatsApp: ${data.phone}`
        },
        EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage(userInput, 'user');

    switch (currentStep) {
      case 'name':
        setUserData(prev => ({ ...prev, name: userInput }));
        addMessage(`Prazer, ${userInput}! Como posso te ajudar hoje?\n\n${SERVICE_OPTIONS}`, 'bot');
        setCurrentStep('service');
        break;

      case 'service':
        if (!validateOption(userInput, 7)) {
          addMessage('Por favor, escolha uma opção válida (1 a 7).\n\n' + SERVICE_OPTIONS, 'bot');
          return;
        }
        let selectedService = '';
        switch (userInput) {
          case '1': selectedService = 'Campanhas Ads ou SEO'; break;
          case '2': selectedService = 'Construir um site'; break;
          case '3': selectedService = 'Conteúdo, CRM, Email Marketing'; break;
          case '4': selectedService = 'Análises Financeiras ou Planilhas'; break;
          case '5': selectedService = 'Gestão de Mídias Sociais ou Blog'; break;
          case '6': selectedService = 'Dashboard e Ciência de Dados'; break;
          case '7': selectedService = 'Outro'; break;
        }
        setUserData(prev => ({ ...prev, service: selectedService }));
        
        addMessage(`Em quanto tempo você precisa dessa solução? Escolha uma das opções abaixo:\n1️⃣ Preciso para já!\n2️⃣ Dentro de 3 meses.\n3️⃣ Dentro de 6 meses.`, 'bot');
        setCurrentStep('timeline');
        break;

      case 'timeline':
        if (!validateOption(userInput, 3)) {
          addMessage('Por favor, escolha uma opção válida (1 a 3).\n1️⃣ Preciso para já!\n2️⃣ Dentro de 3 meses.\n3️⃣ Dentro de 6 meses.', 'bot');
          return;
        }
        let selectedTimeline = '';
        switch (userInput) {
          case '1': selectedTimeline = 'Imediato'; break;
          case '2': selectedTimeline = '3 meses'; break;
          case '3': selectedTimeline = '6 meses'; break;
        }
        setUserData(prev => ({ ...prev, timeline: selectedTimeline }));


        addMessage(CONTACT_OPTIONS, 'bot');
        setCurrentStep('contact_preference');
        break;

      case 'contact_preference':
        if (!validateOption(userInput, 3)) {
          addMessage('Por favor, escolha uma opção válida (1 a 3).\n' + CONTACT_OPTIONS, 'bot');
          return;
        }
        let contactMethod = '';
        switch (userInput) {
          case '1': 
            contactMethod = 'WhatsApp';
            addMessage('Ótimo! Poderia me passar seu número de WhatsApp? (Ex: 11999999999)', 'bot');
            setCurrentStep('phone');
            break;
          case '2':
            contactMethod = 'E-mail';
            addMessage('Ótimo! Poderia me passar seu e-mail?', 'bot');
            setCurrentStep('email');
            break;
          case '3':
            contactMethod = 'WhatsApp e E-mail';
            addMessage('Ótimo! Primeiro, poderia me passar seu e-mail?', 'bot');
            setCurrentStep('email');
            break;
        }
        setUserData(prev => ({ ...prev, contactPreference: contactMethod }));
        break;

      case 'email':
        if (!validateEmail(userInput)) {
          addMessage('Por favor, insira um e-mail válido.', 'bot');
          return;
        }
        setUserData(prev => ({ ...prev, email: userInput }));
        if (userData.contactPreference === 'WhatsApp e E-mail' || userData.contactPreference === '3') {
          addMessage('Agora, poderia me passar seu WhatsApp? (Ex: 11999999999)', 'bot');
          setCurrentStep('phone');
        } else if (userData.contactPreference === 'E-mail' || userData.contactPreference === '2') {
          finishChat();
        }
        break;

      case 'phone':
        if (!validatePhone(userInput)) {
          addMessage('Por favor, insira um número de WhatsApp válido no formato 11999999999.', 'bot');
          return;
        }
        const formattedPhone = formatPhone(userInput);
        setUserData(prev => ({ ...prev, phone: formattedPhone }));
        finishChat();
        break;
    }

    setUserInput('');
  }, [currentStep, userInput, userData]);

  const finishChat = async () => {
    addMessage('Obrigado pelas informações! Entraremos em contato em breve pelo canal de sua preferência. 😊', 'bot');
    setIsComplete(true);
    await sendEmail(userData);
  };

  const resetChat = () => {
    setMessages([
      { text: 'Olá! Qual o seu nome? 😊', sender: 'bot' }
    ]);
    setCurrentStep('name');
    setUserInput('');
    setUserData({
      name: '',
      service: '',
      timeline: '',
      budget: '',
      contactPreference: '',
      email: '',
      phone: ''
    });
    setIsComplete(false);
  };

  return {
    messages,
    currentStep,
    userInput,
    setUserInput,
    handleSubmit,
    isComplete,
    resetChat
  };
}