import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "A full-featured chat app with real-time messaging, user authentication, and group conversations built with React and Socket.io.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Interview Prep Platform",
      description: "An intelligent platform that helps candidates prepare for interviews with AI-generated questions and feedback.",
      tech: ["React", "NestJS", "OpenAI API", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Church Management System",
      description: "A comprehensive web solution for church administration, event management, and member communication.",
      tech: ["Angular", "ASP.NET Core", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform mobile shopping app with product catalog, cart functionality, and secure payments.",
      tech: ["Flutter", "Firebase", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management Dashboard",
      description: "Modern project management tool with kanban boards, team collaboration, and progress tracking.",
      tech: ["React", "Express.js", "MongoDB", "TypeScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system built for developers to easily manage and update their portfolio websites.",
      tech: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-hover transition-smooth hover:scale-105 gradient-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
