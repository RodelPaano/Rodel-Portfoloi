import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Coffee, Heart } from "lucide-react";
import unnamed from "@/assets/unnamed (1).jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-nav-height">
      <div className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-border">
                <img
                  src={unnamed}
                  alt="Rodel - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              I'm an aspiring software developer with a deep desire to learn,
              grow, and someday be part of the tech industry. I'm passionate
              about building creative solutions and continuously exploring new
              technologies. Here's a glimpse into my journey and the dreams that
              keep me going.
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6" />
                My Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a student, I began my journey into software development out
                  of pure curiosity—wondering how things really work behind the
                  scenes. What started as a simple interest slowly grew into a
                  passion, especially as I discovered how powerful code can be
                  in solving real-world problems. I'm still learning, still
                  growing, and working hard to someday be part of something
                  meaningful in the tech world.
                </p>
                <p>
                  As a student and aspiring developer, I started my journey by
                  building web-based systems that helped me understand how
                  things work behind the scenes. I naturally gravitated toward
                  backend development, where I enjoy designing secure, scalable
                  logic and solving real-world problems through code. While
                  backend remains my favorite, I'm also exploring mobile
                  development using React Native to expand my skills and create
                  more versatile solutions. Every project I work on is a step
                  forward in learning and growth.
                </p>
                <p>
                  Most of my days are spent coding—it's something I genuinely
                  enjoy and make time for every day. When I'm not deep in code,
                  I’m usually exploring new technologies, experimenting with
                  ideas, or simply taking a break with a good cup of coffee
                  while thinking about my next project. I'm always looking for
                  ways to improve and grow as a developer.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6" />
                Education & Experience
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Bachelor Of Science Information Technology
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Eastern Samar State University GUIUAN E. Samar • 2020-2024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Not all IT-related work is focused on software engineering,
                    algorithms, or data structures — the field includes a wide
                    range of areas like networking, cybersecurity, technical
                    support, cloud infrastructure, and system administration.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Software Developer
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    CURRENTLY • 4th Student in ESSU GUIUAN
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Developing full-stack Web Application and System with
                    Collaboration AI Tolls to Make Fast Development.
                  </p>
                </Card>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "HTML/CSS",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "ASP.NET/C#",
                    "Express",
                    "PHP/LARAVEL",
                    "JAVA",
                    "C++",
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Database</h3>
                <div className="flex flex-wrap gap-2">
                  {["MySql", "MongoDB", "Firebase", "SQLServer"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "VS-Code", "PostMan", "Figma", "NPM"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    )
                  )}
                </div>
              </Card>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <Heart className="mr-3 h-6 w-6" />
              When I'm Not Coding
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <Coffee className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Coffee Enthusiast</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring different brewing methods and coffee origins.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Code className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing to projects and learning from the community.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <GraduationCap className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Always exploring new technologies and best practices.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
