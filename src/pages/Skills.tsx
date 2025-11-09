import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5", "CSS3"],
    color: "text-blue-600"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
    color: "text-green-600"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
    color: "text-purple-600"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
    color: "text-pink-600"
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Linux", "Nginx"],
    color: "text-orange-600"
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go", "Rust"],
    color: "text-red-600"
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-card rounded-lg shadow-sm animate-fade-in">
          <h2 className="text-2xl font-bold mb-4 text-center text-foreground">Proficiency Levels</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { name: "Web Development", level: 95 },
              { name: "Backend Development", level: 88 },
              { name: "Database Design", level: 85 },
              { name: "Mobile Development", level: 78 },
              { name: "DevOps", level: 72 },
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
