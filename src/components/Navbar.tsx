
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 dark:bg-portfolio-dark/80 backdrop-blur-md shadow-md py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-portfolio-primary">
          Shreya<span className="text-portfolio-secondary">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="relative px-2 py-1 font-medium text-gray-700 dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-portfolio-primary after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white dark:bg-portfolio-dark absolute w-full left-0 transition-all duration-300 overflow-hidden shadow-md",
        isMenuOpen ? "max-h-screen py-4" : "max-h-0"
      )}>
        <nav className="flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="py-2 font-medium text-gray-700 dark:text-gray-200 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors duration-300 border-b border-gray-100 dark:border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
