import React, { useState } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import portfolioData from '../mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Real-world solutions delivering measurable business impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5"
              >
                <div className="p-6 md:p-8">
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {project.name}
                        </h3>
                        <p className="text-teal-400 font-medium text-base md:text-lg mb-3">
                          {project.tagline}
                        </p>
                      </div>
                      {project.award && (
                        <Award className="w-8 h-8 text-yellow-500 flex-shrink-0 ml-4" />
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>

                    {project.award && (
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                        <p className="text-yellow-400 text-sm font-medium">
                          {project.award}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem-Solution-Impact */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                      <h4 className="text-red-400 font-semibold text-sm uppercase mb-2">
                        Problem
                      </h4>
                      <p className="text-gray-300 text-sm">{project.problem}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                      <h4 className="text-blue-400 font-semibold text-sm uppercase mb-2">
                        Solution
                      </h4>
                      <p className="text-gray-300 text-sm">{project.solution}</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-teal-600">
                      <h4 className="text-teal-400 font-semibold text-sm uppercase mb-2">
                        Impact
                      </h4>
                      <p className="text-white font-medium text-sm">{project.impact}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-slate-900 text-gray-300 border-slate-600 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features - Collapsible */}
                  {project.features && (
                    <div>
                      <Button
                        onClick={() => toggleProject(project.id)}
                        variant="ghost"
                        className="text-teal-400 hover:text-teal-300 hover:bg-slate-900/50 p-0 h-auto font-semibold mb-3"
                      >
                        {expandedProject === project.id ? '▼' : '▶'} Key Features
                      </Button>
                      
                      {expandedProject === project.id && (
                        <ul className="space-y-2 pl-4 animate-in fade-in duration-300">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-300 text-sm md:text-base"
                            >
                              <span className="text-teal-400 mt-1 flex-shrink-0">▹</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
