import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a React project with TypeScript and best practices for type-safe development.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Tutorial",
    tags: ["React", "TypeScript", "Web Development"],
  },
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "Explore architectural patterns and best practices for creating maintainable and scalable backend services.",
    date: "2024-03-10",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "API", "Architecture"],
  },
  {
    title: "The Power of Tailwind CSS",
    excerpt: "Discover how utility-first CSS can speed up your development workflow and create consistent designs.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Design",
    tags: ["CSS", "Tailwind", "UI/UX"],
  },
  {
    title: "Understanding Database Relationships",
    excerpt: "A comprehensive guide to designing database schemas and understanding different types of relationships.",
    date: "2024-02-28",
    readTime: "10 min read",
    category: "Database",
    tags: ["Database", "SQL", "PostgreSQL"],
  },
  {
    title: "Modern State Management in React",
    excerpt: "Compare different state management solutions and learn when to use each approach in your applications.",
    date: "2024-02-20",
    readTime: "15 min read",
    category: "React",
    tags: ["React", "State Management", "Redux"],
  },
  {
    title: "Deploying Full-Stack Applications",
    excerpt: "Step-by-step guide to deploying your applications using modern cloud platforms and CI/CD pipelines.",
    date: "2024-02-15",
    readTime: "11 min read",
    category: "DevOps",
    tags: ["Deployment", "CI/CD", "Cloud"],
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Blog Posts</h1>
          <p className="text-xl text-muted-foreground">Thoughts, tutorials, and insights on web development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Card 
              key={blog.title}
              className="animate-fade-in hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{blog.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {blog.readTime}
                  </span>
                </div>
                <CardTitle className="text-foreground hover:text-accent transition-colors cursor-pointer">
                  {blog.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {blog.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="gap-2 p-0 h-auto text-accent hover:text-accent/80">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
