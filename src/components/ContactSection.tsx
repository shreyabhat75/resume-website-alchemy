
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm currently looking for new opportunities to collaborate on projects and expand my skills.
              Feel free to reach out if you have any questions or just want to say hi!
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:shreyb2@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-portfolio-primary/10 dark:hover:bg-portfolio-primary/10 transition-colors"
              >
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Mail className="text-portfolio-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">shreyb2@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-portfolio-primary/10 dark:hover:bg-portfolio-primary/10 transition-colors"
              >
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Linkedin className="text-portfolio-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-gray-600 dark:text-gray-400">Connect with me on LinkedIn</p>
                </div>
              </a>
              
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-portfolio-primary/10 dark:hover:bg-portfolio-primary/10 transition-colors"
              >
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Github className="text-portfolio-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-gray-600 dark:text-gray-400">Check out my repositories</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-portfolio-primary"
                    placeholder="Your Message"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
