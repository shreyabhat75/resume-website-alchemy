
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  
  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive system to manage hospital operations",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop",
      skills: ["Java", "Database Design"],
      fullDescription: "A comprehensive system designed to streamline hospital operations, including patient management, appointment scheduling, billing, and inventory control. The system helps healthcare providers efficiently manage their resources and improve patient care."
    },
    {
      id: 2,
      title: "University Management System",
      description: "A platform for managing university resources and students",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop",
      skills: ["UI Design", "Database Systems"],
      fullDescription: "An integrated platform for managing various aspects of university operations including student registration, course management, faculty assignments, and campus resources. The system provides administrators, faculty, and students with tailored interfaces to efficiently handle their respective tasks."
    },
    {
      id: 3,
      title: "Website for U&I",
      description: "Developed a website for the NGO U&I",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop",
      skills: ["Web Development", "UI/UX Design"],
      fullDescription: "Created a user-friendly website for U&I NGO to increase their online presence and enable easier volunteer registration and donation processes. The website effectively communicates the organization's mission and showcases their impact through compelling visuals and interactive elements."
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <Card 
                className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-portfolio-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <Dialog 
          open={selectedProject !== null} 
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {projects.find(p => p.id === selectedProject)?.title}
                </DialogTitle>
                <DialogDescription>
                  {projects.find(p => p.id === selectedProject)?.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <div className="mb-6 rounded-md overflow-hidden">
                  <img
                    src={projects.find(p => p.id === selectedProject)?.image}
                    alt={projects.find(p => p.id === selectedProject)?.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {projects.find(p => p.id === selectedProject)?.fullDescription}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === selectedProject)?.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
