import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Về Laios', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Quy trình', href: '#workflow' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Laios<span className="text-blue-400">Technology</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105"
              >
                Liên hệ
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute w-full border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-blue-400 hover:text-blue-300 block px-3 py-2 rounded-md text-base font-bold"
              >
                Liên hệ ngay
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;