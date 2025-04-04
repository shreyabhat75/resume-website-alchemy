
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-portfolio-primary">
              Shreya<span className="text-portfolio-secondary">.dev</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Aspiring Computer Science Engineer
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:shreyb2@gmail.com"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors shadow-sm"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors shadow-sm"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Shreya Mohan Bhat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
