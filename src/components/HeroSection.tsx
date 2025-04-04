
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [typingText, setTypingText] = useState("Computer Science Engineer");
  const typingPhrases = [
    "Computer Science Engineer",
    "Problem Solver",
    "Java Developer",
    "Python Programmer",
    "UI Designer"
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % typingPhrases.length;
      setTypingText(typingPhrases[currentIndex]);
    }, 3000);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center animated-bg pt-20">
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-portfolio-secondary font-medium mb-4">Hello, I'm</p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shreya Mohan Bhat
          </h1>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="typing-container mb-8">
            <h2 className="typing-text text-xl md:text-2xl font-mono text-portfolio-primary">
              {typingText}
            </h2>
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Aspiring Computer Science Engineer with a passion for building innovative solutions 
            and learning new technologies
          </p>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex gap-4 flex-wrap justify-center">
            <a 
              href="#projects" 
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-6 py-3 rounded-lg transition-all hover:translate-y-[-2px] shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 px-6 py-3 rounded-lg transition-all hover:translate-y-[-2px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="text-gray-500 hover:text-portfolio-primary transition-colors">
          <ArrowDown size={32} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <span className="code-bracket left-4 sm:left-20 top-40">{`{`}</span>
      <span className="code-bracket right-4 sm:right-20 bottom-40">{`}`}</span>
    </section>
  );
};

export default HeroSection;
