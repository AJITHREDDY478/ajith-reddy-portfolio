import React from 'react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import portfolioData from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Backend Development", skills: skills.backend, color: "teal" },
    { title: "Frontend Development", skills: skills.frontend, color: "blue" },
    { title: "Automation & Integration", skills: skills.automation, color: "purple" },
    { title: "Tools & DevOps", skills: skills.tools, color: "orange" }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive expertise across backend, automation, and full-stack development
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="bg-slate-800/50 border-slate-700 p-6 md:p-8 hover:border-teal-500/30 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium text-sm md:text-base">
                          {skill.name}
                        </span>
                        <Badge
                          variant="outline"
                          className="border-teal-500/50 text-teal-400 text-xs"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-teal-400 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Technical Stack */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                "Ruby on Rails", "Ruby", "JavaScript", "PostgreSQL", "REST APIs",
                "Workato", "Redis", "Sidekiq", "RSpec", "Cucumber",
                "Git", "Jira", "Postman", "Swagger", "JWT",
                "HTML/CSS", "Tailwind CSS", "KendoGrid", "AJAX", "jQuery",
                "Linux", "Shell Scripting", "CI/CD", "Webhooks", "JSON"
              ].map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-slate-800 text-gray-300 border-slate-600 hover:bg-slate-700 hover:border-teal-500/50 transition-all duration-200 px-4 py-2 text-sm md:text-base cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
