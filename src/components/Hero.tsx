import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-subtle opacity-95" />
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Code2 className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/20 animate-float" />
        <Rocket className="absolute bottom-1/3 right-1/4 w-10 h-10 text-accent/20 animate-float" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute top-1/3 right-1/3 w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-6 animate-fade-in flex justify-center">
            <Badge className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for Opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Mekdes Assefa
          </h1>

          {/* Subtitle with Typing Effect Style */}
          <div className="mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-4xl font-semibold text-foreground mb-2">
              Software Engineering Student
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground">
              & Web Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Passionate about crafting innovative solutions that make a real impact. 
            Specializing in full-stack development with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="group text-lg"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg border-2 hover:bg-primary/5"
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-smooth hover:scale-110 shadow-soft hover:shadow-card group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent/10 transition-smooth hover:scale-110 shadow-soft hover:shadow-card group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-smooth" />
            </a>
            <a
              href="mailto:mekdes@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary/10 transition-smooth hover:scale-110 shadow-soft hover:shadow-card group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
