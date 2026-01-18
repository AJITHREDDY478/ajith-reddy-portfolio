import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import portfolioData from '../mock';
import { useEffect, useState } from 'react';

const Hero = ({ onDownloadResume }) => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const roles = [
    "Full-stack Ruby on Rails Developer",
    "Automation & Integration Engineer",
    "Frontend & Backend Systems Builder",
    "DevOps-aware Application Engineer"
  ];
  
  
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
  
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, speed);
  
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);
  

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-slate-900 pt-16 md:pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-teal-400 font-mono text-sm md:text-base">Hi, my name is</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 tracking-tight">
            {personal.name}
          </h1>

          {/* Title */}
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            {" "}
            <span className="text-teal-400 font-mono border-r-2 border-teal-400 pr-1 animate-pulse">
              {text}
            </span>
          </div>



          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 font-light">
            {personal.tagline}
          </p>

          {/* Summary */}
          <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            {personal.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 md:mb-12">
            <Button
              onClick={onDownloadResume}
              size="lg"
              className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-6 text-base md:text-lg font-medium transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-gray-300 hover:text-white hover:bg-slate-800/50 px-8 py-6 text-base md:text-lg font-medium transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 md:w-7 md:h-7" />
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
