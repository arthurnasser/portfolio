import { Instagram, Linkedin } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">

      <a
        href="https://www.instagram.com/arthurnasser/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/arthurnasser/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://github.com/arthurnasser"
        target="_blank"
        rel="noopener noreferrer"
        className="h-6 w-6 hover:text-gray-400"
        aria-label="Github"
      >
        <FaGithub className="w-5 h-5" />
        </a>
    </div>
  );
}