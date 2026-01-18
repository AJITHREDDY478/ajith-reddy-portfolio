import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import portfolioData from '../mock';

const Certifications = () => {
  const { certifications } = portfolioData;

  const categoryColors = {
    'Automation': 'teal',
    'Cloud': 'blue',
    'Development': 'purple'
  };

  return (
    <section id="certifications" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Professional credentials and continuous learning
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="bg-slate-900/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 group"
              >
                <div className="p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                      <Award className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-gray-400 mb-3 text-sm">
                    {cert.issuer}
                  </p>

                  {/* Date & Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                    <Badge
                      className="bg-slate-800 text-teal-400 border-teal-500/30 text-xs"
                    >
                      {cert.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
