import TypewriterText from "@/components/TypewriterText";
import TiltCard from "@/components/TiltCard";
import { Button } from "@/components/ui/button";
import useScrollReveal from "@/hooks/useScrollReveal";
import type { MouseEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  Code2,
  Database,
  Download,
  Facebook,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Rocket,
  Server,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import unnamed from "@/assets/unnamed (1).jpg";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { Card } from "@/components/ui/card";

const techStack = [
  { name: "JavaScript", icon: Braces, description: "Interactive web logic" },
  { name: "React", icon: Code2, description: "Modern UI experiences" },
  { name: "Node.js", icon: Server, description: "Backend APIs" },
  { name: "ASP.NET/C#", icon: Terminal, description: "Structured services" },
  { name: "TypeScript", icon: BadgeCheck, description: "Safer code" },
  { name: "Git", icon: GitBranch, description: "Version control" },
  { name: "Swagger", icon: Database, description: "API documentation" },
  { name: "Postman", icon: Wrench, description: "Endpoint testing" },
];

const highlights = [
  { value: "8+", label: "Core technologies" },
  { value: "6", label: "Featured projects" },
  { value: "24h", label: "Response goal" },
];

const workflow = [
  "Plan the user flow",
  "Build clean interfaces",
  "Connect secure APIs",
  "Test and improve",
];

const HomePage = () => {
  const scrollToSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);

    if (target) {
      const y = window.scrollY + target.getBoundingClientRect().top - 96;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState({}, "", `#${id}`);
    }
  };

  const heroRef = useScrollReveal({ once: true });
  const skillsRef = useScrollReveal({ once: true });
  const ctaRef = useScrollReveal({ once: true });

  return (
    <div id="home" className="min-h-screen pt-nav-height">
      {/* Hero Section */}
      <section className="relative px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="home-grid-bg absolute inset-0 opacity-70" />
          <div className="home-sweep absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full blur-3xl" />
          <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute left-0 bottom-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="max-w-content mx-auto">
          <div ref={heroRef.ref} className={`grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] ${heroRef.isVisible ? 'active' : ''}`}>
            {/* Text Content */}
            <div className={`space-y-8 ${heroRef.isVisible ? 'reveal' : ''}`}>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition-all duration-500 hover:shadow-md">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <TypewriterText text="Hi I'm Rodel" startDelay={500} />
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-5xl xl:text-6xl text-balance">
                  Software Developer building useful digital experiences.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Passionate about creating innovative solutions and building
                  user-friendly applications with modern technologies, clean
                  interfaces, and reliable backend logic.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group transition-all duration-300 hover:scale-105">
                  <a href="#projects" onClick={scrollToSection("projects")}>
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="transition-all duration-300 hover:scale-105">
                  <a href="#contact" onClick={scrollToSection("contact")}>
                    Get in Touch
                  </a>
                </Button>
                <a
                  href={`${import.meta.env.BASE_URL}files/rodelpaano.resume.Final.pdf`}
                  download="Rodel_M_Paano_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="lg" className="transition-all duration-300 hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>

              <div className={`grid max-w-xl grid-cols-3 gap-3 stagger-children ${heroRef.isVisible ? 'active' : ''}`}>
                {highlights.map((item) => (
                  <TiltCard
                    key={item.label}
                    maxTilt={6}
                    className="card-3d card-3d-shine rounded-lg border border-border bg-background/75 p-4 shadow-sm backdrop-blur transition-colors duration-300"
                  >
                    <p className="text-2xl font-bold animate-counter">{item.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {item.label}
                    </p>
                  </TiltCard>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-1">
                {[
                  { icon: Github, href: "https://github.com/RodelPaano/", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
                  { icon: Mail, href: "https://mail.google.com/mail/u/0/#inbox", label: "Email" },
                  { icon: Facebook, href: "https://web.facebook.com/rodelmacawile.paano", label: "Facebook" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-11 w-11 rounded-full border border-border bg-background/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="home-orbit absolute inset-8 rounded-full border border-dashed border-primary/30" />
                <div className="home-profile-glow absolute inset-12 rounded-full blur-2xl" />
                <div className="perspective-container">
                  <div className="profile-3d relative mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-background shadow-2xl ring-1 ring-border sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem] xl:h-96 xl:w-96 transition-all duration-500 hover:shadow-primary/20">
                    <img
                      src={unnamed}
                      alt="Rodel - Software Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card className="home-float-card card-3d card-3d-shine p-4 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Rocket className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          Currently building
                        </p>
                        <p className="text-xs text-muted-foreground">
                          React apps and APIs
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="home-code-card floating-3d-delay card-3d card-3d-shine p-4 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-2xl">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-2 font-mono text-xs">
                      <p className="text-muted-foreground">const goal =</p>
                      <p>
                        <span className="text-primary">build</span>
                        <span className="text-muted-foreground">
                          ("better UX");
                        </span>
                      </p>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="home-progress h-full rounded-full bg-primary" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section ref={skillsRef.ref} className={`relative bg-muted/40 px-4 py-20 sm:px-6 lg:px-8 section-3d ${skillsRef.isVisible ? 'active' : ''}`}>
        <div className="max-w-content mx-auto relative z-10">
          <div className={`text-center mb-12 ${skillsRef.isVisible ? 'reveal' : ''}`}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Toolbox
            </p>
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-balance">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I enjoy working with modern technologies to build scalable and
              efficient applications.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children ${skillsRef.isVisible ? 'active' : ''}`}>
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <TiltCard
                  key={tech.name}
                  maxTilt={10}
                  className="card-3d card-3d-shine rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{tech.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.ref} className={`px-4 py-20 sm:px-6 lg:px-8 section-3d ${ctaRef.isVisible ? 'active' : ''}`}>
        <div className="max-w-content mx-auto relative z-10">
          <div ref={ctaRef.ref} className={`grid gap-10 rounded-lg border border-border bg-card p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10 card-3d card-3d-shine ${ctaRef.isVisible ? 'reveal-scale' : ''}`}>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Workflow
              </p>
              <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-balance">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
              <Button asChild size="lg" className="group transition-all duration-300 hover:scale-105">
                <a href="#contact" onClick={scrollToSection("contact")}>
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workflow.map((step, index) => (
                <TiltCard
                  key={step}
                  maxTilt={6}
                  className="card-3d card-3d-shine group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Page */}
      <section id="about" className="scroll-mt-24 py-section">
        <AboutPage />
      </section>

      {/* Projects Page */}
      <section id="projects" className="scroll-mt-24 py-section bg-muted/50">
        <ProjectsPage />
      </section>

      <section id="contact" className="scroll-mt-24 py-section">
        <ContactPage />
      </section>
    </div>
  );
};

export default HomePage;
