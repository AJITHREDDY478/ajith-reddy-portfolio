import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import portfolioData from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey building scalable applications and enterprise solutions
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-700"></div>

            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative mb-12 md:mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                            
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-800 z-10"></div>

                <Card
                  className={`bg-slate-900/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-teal-400 font-semibold text-lg mb-3">
                        <span>{job.company}</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-300 text-sm md:text-base"
                          >
                            <span className="text-teal-400 mt-1 flex-shrink-0">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-slate-800 text-gray-300 border-slate-600 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
