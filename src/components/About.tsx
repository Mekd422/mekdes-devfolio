import { Card } from "@/components/ui/card";
import { Code2, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "Building web and mobile applications with modern technologies"
    },
    {
      icon: Heart,
      title: "Community-Focused",
      description: "Creating solutions that make a real difference"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            About Me
          </h2>
          
          <Card className="p-8 shadow-card hover:shadow-hover transition-smooth mb-12 gradient-card animate-scale-in">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I am a passionate software developer dedicated to building impactful and innovative solutions. My work is driven 
              by curiosity and a commitment to creating applications that deliver meaningful experiences and solve real-world problems.

            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With expertise in React, Express.js, NestJS, Node.js, and Flutter, I specialize in developing scalable web and mobile 
              applications with clean, maintainable code and intuitive user interfaces. I thrive on tackling challenging projects, learning emerging technologies, 
              and transforming ideas into practical, high-quality software solutions.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center shadow-soft hover:shadow-card transition-smooth hover:scale-105 gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
