import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      category: "Web App",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive charts.",
      tech: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      category: "Frontend",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, comment system, and admin dashboard.",
      tech: ["Next.js", "Prisma", "TailwindCSS", "Vercel"],
      category: "Full Stack",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
      tech: ["React", "TypeScript", "Framer Motion", "Netlify"],
      category: "Frontend",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, and file sharing.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "Full Stack",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-nav-height">
      <div className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 flex items-center justify-center">
              <Folder className="mr-4 h-10 w-10" />
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents a learning 
              experience and showcases different aspects of my development skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/50 rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">Interested in Collaborating?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to working on interesting projects and learning from other developers. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a href="mailto:rodel@example.com">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View GitHub
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;