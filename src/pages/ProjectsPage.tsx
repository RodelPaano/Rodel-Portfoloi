import TiltCard from "@/components/TiltCard";
import useScrollReveal from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Layers3, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  images?: string[];
  github?: string;
  demo?: string;
}

const getImageUrl = (path: string) => {
  if (path.startsWith("data:") || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const projects: Project[] = [
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
    images: [
      "Images/air-quality-1.png",
      "Images/air-quality-2.png",
    ],
  },
  {
    id: 2,
    title: "Online Store Platform",
    description:
      "A full-featured e-commerce platform with product listings, user authentication, inventory management, and secure checkout. Built for scalability and easy admin control.",
    tech: ["React.js", "ASP.NET", "C#", "MySQL"],
    category: "Web App",
    images: [
      "Images/online-store-1.png",
      "Images/online-store-2.png",
    ],
  },
  {
    id: 3,
    title: "Eastern Samar Weather Simulator",
    description:
      "A location-based weather simulation dashboard that visualizes forecast data using interactive charts. Tailored for Eastern Samar with real-time updates via OpenWeather API.",
    tech: ["HTML", "CSS", "Chart.js", "OpenWeather API", "JavaScript"],
    category: "Frontend",
    images: [
      "Images/weather-simulator-1.svg",
      "Images/weather-simulator-2.svg",
    ],
  },
  {
    id: 4,
    title: "Online Booking Resort",
    description:
      "A booking result system that allows users to view and manage reservations. Includes admin tools for updating schedules and generating reports, with a clean UI and responsive design.",
    tech: ["PHP", "XAMPP", "CSS", "Bootstrap"],
    category: "Full Stack",
    images: [
      "Images/booking-resort-1.png",
      "Images/booking-resort-2.png",
    ],
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio site showcasing projects, skills, and contact information. Features smooth animations, responsive layout, and clean design for professional presentation.",
    tech: ["React", "TypeScript", "Framer Motion", "Netlify"],
    category: "Frontend",
    images: [
      "Images/Portfolio1.png",
      "Images/Portfolio2.png",
    ],
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "A real-time messaging app with support for private chats, group conversations, and file sharing. Built with scalable architecture and socket-based communication.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    images: [
      "Images/chat-app-1.svg",
      "Images/chat-app-2.svg",
    ],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % project.images!.length);
    }, 20000);

    return () => clearInterval(interval);
  }, [activeIndex, project.images]);

  const nextImage = () => {
    if (!project.images) return;
    setActiveIndex((prev) => (prev + 1) % project.images!.length);
  };

  const prevImage = () => {
    if (!project.images) return;
    setActiveIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !project.images || project.images.length <= 1) return;
    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };

    const diffX = touchStart.x - touchEnd.x;
    const diffY = touchStart.y - touchEnd.y;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    setTouchStart(null);
  };

  return (
    <TiltCard
      maxTilt={8}
      className="card-3d card-3d-shine rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div
        className="relative h-48 overflow-hidden bg-muted cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {project.images && project.images.length > 0 && (
          <img
            src={getImageUrl(project.images[activeIndex])}
            alt={`${project.title} preview ${activeIndex + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            draggable="false"
          />
        )}

        {project.images && project.images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 text-foreground shadow-sm hover:bg-background transition-all duration-300 ease-out hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 text-foreground shadow-sm hover:bg-background transition-all duration-300 ease-out hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>

            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex space-x-1.5 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${i === activeIndex ? "bg-white w-3" : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
        <Badge className="absolute left-4 top-4" variant="secondary">
          {project.category}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">Project 0{index + 1}</Badge>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 hover:scale-110"
              asChild
            >
              <a
                href={project.github ?? "https://github.com/RodelPaano/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 hover:scale-110"
              asChild
            >
              <a
                href={project.demo ?? "#projects"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="leading-6">
          {project.description}
        </CardDescription>
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
    </TiltCard>
  );
};

const ProjectsPage = () => {
  const headerRef = useScrollReveal({ once: true });
  const gridRef = useScrollReveal({ once: true });

  return (
    <div className="min-h-screen pt-nav-height">
      <div className="relative overflow-hidden px-4 py-section sm:px-6 lg:px-8 section-3d">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="home-grid-bg absolute inset-0 opacity-40" />
          <div className="home-sweep absolute right-0 top-16 h-72 w-[34rem] rounded-full blur-3xl" />
        </div>

        <div className="max-w-content mx-auto relative z-10">
          <div ref={headerRef.ref} className={`mx-auto mb-16 max-w-3xl text-center ${headerRef.isVisible ? 'active' : ''}`}>
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition-all duration-500 hover:shadow-md ${headerRef.isVisible ? 'reveal' : ''}`}>
              <Sparkles className="h-4 w-4" />
              Featured builds
            </div>
            <h1 className={`mb-6 flex items-center justify-center text-4xl font-bold leading-tight sm:text-5xl text-balance ${headerRef.isVisible ? 'reveal' : ''}`}>
              <Layers3 className="mr-4 h-10 w-10" />
              My Projects
            </h1>
            <p className={`text-lg leading-8 text-muted-foreground sm:text-xl ${headerRef.isVisible ? 'reveal' : ''}`}>
              Here are some of the projects I've worked on. Each one represents
              a learning experience and showcases different aspects of my
              development skills.
            </p>
          </div>

          <div ref={gridRef.ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-children ${gridRef.isVisible ? 'active' : ''}`}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="card-3d card-3d-shine rounded-lg border border-border bg-card p-8 shadow-sm md:p-12 transition-all duration-300 hover:shadow-xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-balance">
                Interested in Collaborating?
              </h2>
              <p className="mb-8 text-muted-foreground">
                I'm always open to working on interesting projects and learning
                from other developers. Let's build something amazing together!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="group transition-all duration-300 hover:scale-105">
                <a href="mailto:rodel09paano@gmail.com">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105">
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
