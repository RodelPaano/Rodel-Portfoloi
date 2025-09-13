import TypewriterText from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileImage from "@/assets/ProfileImage.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen pt-nav-height">
      {/* Hero Section */}
      <section className="py-section px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg">
                  <TypewriterText text="Hi I'm Rodel" startDelay={500} />
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Software Developer
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Passionate about creating innovative solutions and building
                  user-friendly applications with modern technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <a
                  href="/files/sample.csv" // path to your file
                  download="Report.csv" // optional: rename the file on download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Download CSV
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/RodelPaano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full w-10 h-10"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full w-10 h-10"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full w-10 h-10"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://web.facebook.com/rodelmacawile.paano"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full w-10 h-10"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-border">
                  <img
                    src={ProfileImage}
                    alt="Rodel - Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I enjoy working with modern technologies to build scalable and
              efficient applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "ASP.NET/C#",
              "TypeScript",
              "Git",
              "Swagger",
              "Postman",
            ].map((tech) => (
              <Card
                key={tech}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold">{tech}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-content mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
