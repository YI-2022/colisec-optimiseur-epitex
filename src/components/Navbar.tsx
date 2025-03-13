
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Services', path: '/services' },
    { name: 'Tarification', path: '/tarification' },
    { name: 'Ressources', path: '/ressources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8',
        scrolled ? 'glassmorphism shadow-soft' : 'bg-transparent'
      )}
    >
      <nav className="max-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-colisec-purple to-colisec-purple-accent bg-clip-text text-transparent">
            Colisec
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'text-gray-700 hover:text-colisec-purple font-medium transition-colors relative',
                location.pathname === item.path && 'text-colisec-purple font-semibold'
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-gradient-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button
            className="bg-white text-colisec-purple hover:bg-gray-50"
            variant="outline"
            asChild
          >
            <Link to="/login">Connexion</Link>
          </Button>
          <Button
            className="bg-gradient-primary hover:opacity-90 shadow-button"
            asChild
          >
            <Link to="/quote-request">Demande de devis</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glassmorphism mt-2 py-3 px-4 rounded-xl animate-scale-in">
          <div className="flex flex-col space-y-4 pt-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'px-2 py-2 text-base font-medium rounded-lg transition-colors',
                  location.pathname === item.path 
                    ? 'text-colisec-purple bg-colisec-purple/5 font-semibold' 
                    : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                className="w-full bg-white text-colisec-purple hover:bg-gray-50"
                variant="outline"
                asChild
              >
                <Link to="/login">Connexion</Link>
              </Button>
              <Button
                className="w-full bg-gradient-primary hover:opacity-90"
                asChild
              >
                <Link to="/quote-request">Devis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
