import { Award, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">About Me</h1>
          <p className="text-xl text-muted-foreground">Getting to know the person behind the code</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in">
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <p className="text-lg">Your Photo Here</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground">Hi, I'm [Your Name]</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A dedicated full-stack developer with a passion for creating beautiful, 
              functional, and user-friendly applications. With years of experience in 
              modern web technologies, I specialize in transforming ideas into reality 
              through clean code and innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <Card className="animate-fade-in hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mission</h3>
                <p className="text-muted-foreground">
                  To build innovative solutions that make a positive impact on users' lives
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Passion</h3>
                <p className="text-muted-foreground">
                  Creating elegant, scalable, and maintainable code that stands the test of time
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to continuous learning and delivering high-quality work
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
