import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Server,
  GitBranch,
  Layers
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS", "Angular"]
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "NestJS", "ASP.NET Core", "Python"]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      skills: ["Flutter", "React Native"]
    },
    {
      category: "Database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      category: "Tools & DevOps",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Linux"]
    },
    {
      category: "Other",
      icon: Layers,
      skills: ["RESTful APIs", "GraphQL", "Microservices", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-hover transition-smooth hover:scale-105 gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:bg-primary/10 hover:text-primary transition-smooth"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
