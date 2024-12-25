import { Mail, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <span className="text-sm">(11) 99145-3336</span>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <a
            href="mailto:contato@agoraconectou.com.br"
            className="text-sm hover:text-orange-500 transition-colors"
          >
            arthurnasser@gmail.com.br
          </a>
        </li>
      </ul>
    </div>
  );
}