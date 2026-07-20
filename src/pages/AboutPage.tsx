import TiltCard from "@/components/TiltCard";
import useScrollReveal from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Code2,
  Coffee,
  GraduationCap,
  Heart,
  Laptop,
  Rocket,
  Sparkles,
} from "lucide-react";
import unnamed from "@/assets/unnamed (1).jpg";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Laptop,
    items: ["Node.js", "ASP.NET/C#", "Express", "PHP/Laravel", "Java", "C++"],
  },
  {
    title: "Database",
    icon: BookOpen,
    items: ["MySQL", "MongoDB", "Firebase", "SQL Server"],
  },
  {
    title: "Tools",
    icon: Rocket,
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "NPM"],
  },
];

const timeline = [
  {
    title: "Bachelor of Science in Information Technology",
    meta: "Eastern Samar State University, Guiuan - 2020-2024",
    description:
      "Built a broad foundation in software, systems, networking, databases, and technology problem solving.",
  },
  {
    title: "Aspiring Software Developer",
    meta: "Currently growing through projects and daily practice",
    description:
      "Developing full-stack web applications, learning backend architecture, and improving with modern AI-assisted workflows.",
  },
];

const interests = [
  {
    title: "Coffee Enthusiast",
    icon: Coffee,
    description: "Taking breaks, thinking through ideas, and refueling for the next build.",
  },
  {
    title: "Project Builder",
    icon: Code2,
    description: "Turning practice into real systems that sharpen my development skills.",
  },
  {
    title: "Continuous Learning",
    icon: GraduationCap,
    description: "Exploring new tools, better patterns, and stronger ways to solve problems.",
  },
];

const AboutPage = () => {
  const headerRef = useScrollReveal({ once: true });
  const storyRef = useScrollReveal({ once: true });
  const skillsRef = useScrollReveal({ once: true });
  const interestsRef = useScrollReveal({ once: true });

  return (
    <div className="min-h-screen pt-nav-height">
      <div className="relative overflow-hidden px-4 py-section sm:px-6 lg:px-8 section-3d">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="home-grid-bg absolute inset-0 opacity-50" />
          <div className="home-sweep absolute left-1/3 top-20 h-72 w-[34rem] rounded-full blur-3xl" />
        </div>

        <div className="max-w-content mx-auto relative z-10">
          <div ref={headerRef.ref} className={`mb-16 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] ${headerRef.isVisible ? 'active' : ''}`}>
            <div className={`flex justify-center lg:justify-start ${headerRef.isVisible ? 'reveal-left' : ''}`}>
              <div className="perspective-container">
                <div className="profile-3d relative">
                  <div className="home-orbit absolute inset-3 rounded-full border border-dashed border-primary/30" />
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-background shadow-2xl ring-1 ring-border sm:h-56 sm:w-56 transition-all duration-500 hover:shadow-primary/20">
                    <img
                      src={unnamed}
                      alt="Rodel - Software Developer"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`text-center lg:text-left ${headerRef.isVisible ? 'reveal-right' : ''}`}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition-all duration-500 hover:shadow-md">
                <Sparkles className="h-4 w-4" />
                About my journey
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl text-balance">
                Learning, building, and growing as a developer.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground lg:mx-0">
                I am an aspiring software developer with a deep desire to learn,
                grow, and someday be part of the tech industry. I enjoy building
                creative solutions, exploring modern technologies, and improving
                one project at a time.
              </p>
            </div>
          </div>

          <div ref={storyRef.ref} className={`mb-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] ${storyRef.isVisible ? 'active' : ''}`}>
            <Card className={`p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${storyRef.isVisible ? 'reveal' : ''}`}>
              <h2 className="mb-6 flex items-center text-2xl font-bold">
                <Code2 className="mr-3 h-6 w-6" />
                My Story
              </h2>
              <div className="space-y-4 leading-7 text-muted-foreground">
                <p>
                  I started software development from curiosity, wondering how
                  systems work behind the scenes. That curiosity became a real
                  passion when I saw how code can solve practical problems.
                </p>
                <p>
                  I naturally enjoy backend development because it involves
                  logic, structure, security, and real problem solving. At the
                  same time, I keep improving my frontend skills so I can build
                  complete, useful, and polished applications.
                </p>
                <p>
                  Most days, I spend time coding, studying, testing ideas, or
                  improving a project. Every build is another step forward.
                </p>
              </div>
            </Card>

            <div className={`space-y-4 ${storyRef.isVisible ? 'reveal' : ''}`}>
              <h2 className="mb-6 flex items-center text-2xl font-bold">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education & Experience
              </h2>
              {timeline.map((item, index) => (
                <TiltCard
                  key={item.title}
                  maxTilt={5}
                  className="card-3d card-3d-shine group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary/80" />
                  <p className="mb-3 text-sm font-semibold text-muted-foreground">
                    0{index + 1}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {item.meta}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </TiltCard>
              ))}
            </div>
          </div>

          <div ref={skillsRef.ref} className={`mb-16 ${skillsRef.isVisible ? 'active' : ''}`}>
            <div className={`mb-8 text-center ${skillsRef.isVisible ? 'reveal' : ''}`}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Skill Set
              </p>
              <h2 className="text-3xl font-bold text-balance">Technical Skills</h2>
            </div>
            <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 stagger-children ${skillsRef.isVisible ? 'active' : ''}`}>
              {skills.map((group) => {
                const Icon = group.icon;

                return (
                  <TiltCard
                    key={group.title}
                    maxTilt={8}
                    className="card-3d card-3d-shine rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          <div ref={interestsRef.ref} className={`text-center ${interestsRef.isVisible ? 'active' : ''}`}>
            <h2 className={`mb-8 flex items-center justify-center text-2xl font-bold ${interestsRef.isVisible ? 'reveal' : ''}`}>
              <Heart className="mr-3 h-6 w-6" />
              When I am Not Coding
            </h2>
            <div className={`mx-auto grid max-w-5xl gap-6 md:grid-cols-3 stagger-children ${interestsRef.isVisible ? 'active' : ''}`}>
              {interests.map((interest) => {
                const Icon = interest.icon;

                return (
                  <TiltCard
                    key={interest.title}
                    maxTilt={6}
                    className="card-3d card-3d-shine rounded-lg border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <Icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                    <h3 className="mb-2 font-semibold">{interest.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {interest.description}
                    </p>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
