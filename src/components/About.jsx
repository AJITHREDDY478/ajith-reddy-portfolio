import React from 'react';
import { Code2, Database, Zap, Shield } from 'lucide-react';
import { Card } from './ui/card';
import portfolioData from '../mock';

const About = () => {
  const { personal, experience } = portfolioData;

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in Ruby on Rails with 3.6+ years building scalable MVC applications"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Proven track record of 40-60% performance improvements through query optimization"
    },
    {
      icon: Database,
      title: "Enterprise Integration",
      description: "Specialized in Workato automation and API integrations across multiple platforms"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Focus on data security, compliance, and building maintainable codebases"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Backend specialist with expertise in building high-performance web applications
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Left: Professional Background */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Professional Background
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                I'm a Software Engineer specializing in <span className="text-teal-400 font-semibold">Ruby on Rails</span> and <span className="text-teal-400 font-semibold">automation</span>, with a proven track record of delivering scalable web applications and enterprise integrations.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Throughout my career, I've worked across diverse domains including <span className="font-semibold text-white">Retail, Healthcare, HR, and Finance</span>, consistently delivering solutions that improve performance, reduce errors, and enhance user experience.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                My expertise spans the full application lifecycle—from development and optimization to testing and deployment. I'm passionate about writing clean, maintainable code and implementing best practices like TDD, BDD, and Domain-Driven Design.
              </p>
              <div className="pt-4">
                <p className="text-gray-400 italic">
                  "Focus on performance tuning, secure APIs, and building systems that scale."
                </p>
              </div>
            </div>

            {/* Right: Key Stats */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 rounded-lg p-6 md:p-8 border border-slate-700">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">3.6+</div>
                    <div className="text-gray-300 text-base md:text-lg">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{experience.length}</div>
                    <div className="text-gray-300 text-base md:text-lg">Companies Worked With</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">40-60%</div>
                    <div className="text-gray-300 text-base md:text-lg">Performance Improvements</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">4+</div>
                    <div className="text-gray-300 text-base md:text-lg">Domains Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 group"
              >
                <div className="mb-4">
                  <highlight.icon className="w-10 h-10 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
