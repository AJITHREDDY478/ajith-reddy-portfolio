import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ onDownloadResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-bold text-white hover:text-teal-400 transition-colors duration-200"
          >
            <span className="font-mono">&lt;AR/&gt;</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-md transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={onDownloadResume}
              variant="outline"
              size="sm"
              className="border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:text-teal-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            {/* <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
            <nav className="flex flex-col py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-slate-800 mt-2">
                <Button
                  onClick={onDownloadResume}
                  variant="outline"
                  className="w-full border-teal-500 text-teal-400 hover:bg-teal-500/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
