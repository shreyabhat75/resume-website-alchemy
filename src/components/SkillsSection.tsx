
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "JAVA", level: 85 },
    { name: "C", level: 75 },
    { name: "Python", level: 70 },
  ];
  
  const otherSkills = [
    { name: "Leadership", level: 90 },
    { name: "Management", level: 85 },
  ];
  
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-portfolio-secondary">
              Programming Languages
            </h3>
            
            <div className="space-y-8">
              {programmingSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2.5 bg-gray-200 dark:bg-gray-700" 
                  />
                </div>
              ))}
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm border border-gray-200 dark:border-gray-600">
                  Data Structures
                </span>
                <span className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm border border-gray-200 dark:border-gray-600">
                  Operating Systems
                </span>
                <span className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm shadow-sm border border-gray-200 dark:border-gray-600">
                  DBMS
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:mt-12 space-y-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-portfolio-accent">
              Other Skills
            </h3>
            
            <div className="space-y-8">
              {otherSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2.5 bg-gray-200 dark:bg-gray-700" 
                  />
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-portfolio-primary/10 dark:bg-portfolio-primary/5 p-6 rounded-xl transform transition-transform hover:scale-105">
                  <h4 className="text-xl font-semibold mb-4 text-portfolio-primary">Software Tools</h4>
                  <p className="text-gray-600 dark:text-gray-400">Proficient in various software development tools and environments.</p>
                </div>
                <div className="bg-portfolio-secondary/10 dark:bg-portfolio-secondary/5 p-6 rounded-xl transform transition-transform hover:scale-105">
                  <h4 className="text-xl font-semibold mb-4 text-portfolio-secondary">Problem Solving</h4>
                  <p className="text-gray-600 dark:text-gray-400">Strong analytical and algorithmic thinking abilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
