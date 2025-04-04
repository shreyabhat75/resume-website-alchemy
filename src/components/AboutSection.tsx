
import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6 text-portfolio-primary">Education & Objective</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Aspiring Computer Science Engineer with a strong foundation in programming, problem-solving, and
              software development. Passionate about learning new technologies and applying them to innovative
              projects. Seeking opportunities to gain hands-on experience and contribute effectively to team-based
              projects in the tech industry.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-lg">
                  <GraduationCap className="text-portfolio-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">RV Institute of Technology and Management</h4>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor of Technology in Information Science and Engineering</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Expected Graduation: July 2027</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-secondary/10 p-3 rounded-lg">
                  <Award className="text-portfolio-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Certifications</h4>
                  <p className="text-gray-600 dark:text-gray-400">Java from Zero to Job</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-accent/10 p-3 rounded-lg">
                  <Briefcase className="text-portfolio-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Leadership Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">Volunteer in an NGO called U&I, soon to be a leader</p>
                  <p className="text-gray-600 dark:text-gray-400">Active member in Aegis, Starfleet, and Chaaya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-portfolio-primary/20 to-portfolio-secondary/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center px-6">
                    <h3 className="text-2xl font-bold mb-4">Personal Interests</h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <p className="font-medium">Singing</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <p className="font-medium">Reading Books</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <p className="font-medium">Mandala Art</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <p className="font-medium">Writing</p>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mt-8 mb-4">Languages</h3>
                    <div className="flex gap-4 justify-center">
                      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                        <p className="font-medium">English</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                        <p className="font-medium">Kannada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
