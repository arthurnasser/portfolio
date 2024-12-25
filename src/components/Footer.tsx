import SocialLinks from './footer/SocialLinks';
import QuickLinks from './footer/QuickLinks';
import LegalLinks from './footer/LegalLinks';
import ContactInfo from './footer/ContactInfo';
import NewsletterForm from './footer/NewsletterForm';
import BottomBar from './footer/BottomBar';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Arthur Nasser</h3>
            <p className="text-sm mb-4">
              Transformando negócios através do marketing digital com estratégias personalizadas e resultados mensuráveis.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links and Legal Links in a flex container */}
          <div className="flex justify-between gap-8">
            <QuickLinks />
            <LegalLinks />
          </div>

          {/* Contact Info */}
          <ContactInfo />

          {/* Newsletter */}
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </footer>
  );
}