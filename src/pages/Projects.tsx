import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "🛒",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team features, and project tracking.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "📋",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing multiple social media accounts with scheduling and insights.",
    technologies: ["Vue.js", "Express", "MongoDB"],
    image: "📊",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather application with location services, forecasts, and interactive maps.",
    technologies: ["React Native", "OpenWeather API"],
    image: "🌤️",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, comments, and SEO optimization.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "✍️",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Generator",
    description: "Tool for developers to create beautiful portfolio websites with customizable templates.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    image: "🎨",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">My Projects</h1>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and contributions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="animate-fade-in hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-full h-48 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <span className="text-7xl">{project.image}</span>
                </div>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
