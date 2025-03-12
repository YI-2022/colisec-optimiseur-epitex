
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-colisec-purple to-colisec-purple-accent bg-clip-text text-transparent">
                Colisec
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              La révolution digitale de la gestion de vos expéditions.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-colisec-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-colisec-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-colisec-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-colisec-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-colisec-purple transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-colisec-purple transition-colors">Nos Services</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-colisec-purple transition-colors">Tarification</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-colisec-purple transition-colors">Ressources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-colisec-purple transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-colisec-purple transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-colisec-purple transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-600 hover:text-colisec-purple transition-colors">CGV</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-colisec-purple mt-0.5" />
                <span className="text-gray-600">123 Boulevard Logistique, 75001 Paris</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-colisec-purple" />
                <a href="tel:+33123456789" className="text-gray-600 hover:text-colisec-purple transition-colors">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-colisec-purple" />
                <a href="mailto:contact@colisec.com" className="text-gray-600 hover:text-colisec-purple transition-colors">contact@colisec.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Colisec. Tous droits réservés.</p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Conçu et développé avec soin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
