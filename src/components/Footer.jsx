import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import portfolioData from '../mock';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personal.github,
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: personal.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: `mailto:${personal.email}`,
      label: 'Email',
      color: 'hover:text-teal-400'
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="font-mono">&lt;AR/&gt;</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Software Engineer specializing in Ruby on Rails and Workato automation. Building scalable, secure, and high-performance web applications.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {footerLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-400 hover:text-teal-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="hover:text-teal-400 transition-colors duration-200"
                  >
                    {personal.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a
                    href={`tel:${personal.phone}`}
                    className="hover:text-teal-400 transition-colors duration-200"
                  >
                    {personal.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p>{personal.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Ruby on Rails
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
