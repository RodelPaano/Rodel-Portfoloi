import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Air Quality Monitoring Device with Alert System",
      description:
        "An IoT-enabled system that tracks air quality metrics in real time and sends alerts when pollution levels exceed safe thresholds. Includes a dashboard for data visualization and device management.",
      tech: [
        "React",
        "Node.js",
        "Firebase",
        "Express.js",
        "PlatformIO",
        "c++",
        "Esp32",
      ],
      category: "Full Stack",
      // github: "https://github.com/RodelPaano/",
      // demo: "#",
    },
    {
      id: 2,
      title: "Online Store Platform",
      description:
        "A full-featured e-commerce platform with product listings, user authentication, inventory management, and secure checkout. Built for scalability and easy admin control.",
      tech: ["React.js", "ASP.NET", "C#", "MySQL"],
      category: "Web App",
      // github: "https://github.com/RodelPaano/",
      // demo: "#",
    },
    {
      id: 3,
      title: "Eastern Samar Weather Simulator",
      description:
        "A location-based weather simulation dashboard that visualizes forecast data using interactive charts. Tailored for Eastern Samar with real-time updates via OpenWeather API.",
      tech: ["HTML", "CSS", "Chart.js", "OpenWeather API", "JavaScript"],
      category: "Frontend",
      // github: "https://github.com/RodelPaano/",
      // demo: "#",
    },
    {
      id: 4,
      title: "Online Booking Resort",
      description:
        "A booking result system that allows users to view and manage reservations. Includes admin tools for updating schedules and generating reports, with a clean UI and responsive design.",
      tech: ["PHP", "XAMPP", "CSS", "Bootstrap"],
      category: "Full Stack",
      // github: "https://github.com/RodelPaano/",
      // demo: "https://github.com/RodelPaano/",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A personal portfolio site showcasing projects, skills, and contact information. Features smooth animations, responsive layout, and clean design for professional presentation.",
      tech: ["React", "TypeScript", "Framer Motion", "Netlify"],
      category: "Frontend",
      // github: "https://github.com/RodelPaano/",
      // demo: "https://github.com/RodelPaano/",
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "A real-time messaging app with support for private chats, group conversations, and file sharing. Built with scalable architecture and socket-based communication.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "Full Stack",
      // github: "https://github.com/RodelPaano/",
      // demo: "https://github.com/RodelPaano/",
    },
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
              Here are some of the projects I've worked on. Each one represents
              a learning experience and showcases different aspects of my
              development skills.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300"
              >
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
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
            <h2 className="text-2xl font-bold mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to working on interesting projects and learning
              from other developers. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <a href="mailto:rodel09paano@gmail.com">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/RodelPaano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
