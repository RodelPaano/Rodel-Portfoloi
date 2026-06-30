// src/pages/ContactPage.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Clock,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const contactItems = [
  {
    label: "Email",
    value: "rodel09paano@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+63 916 114 1713",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Brgy. 02, Mercedes E. Samar",
    icon: MapPin,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RodelPaano/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/rodelmacawile.paano",
    icon: Facebook,
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qg200zp", 
        "service_qg200zp", 
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "HGNNa-LS3vQcN2z7w" 
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-nav-height">
      <div className="relative overflow-hidden px-4 py-section sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="home-grid-bg absolute inset-0 opacity-40" />
          <div className="home-sweep absolute left-0 top-24 h-72 w-[34rem] rounded-full blur-3xl" />
        </div>

        <div className="max-w-content mx-auto">
          <div className="animate-fade-in mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Let us connect
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Get In Touch
            </h1>
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              I'm always interested in hearing about new opportunities,
              projects, or just having a conversation about technology. Feel
              free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="h-1 bg-primary" />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send me a message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or idea..."
                      className="min-h-32"
                    />
                  </div>

                  <Button type="submit" className="group w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Feel free to reach out through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-lg border border-border bg-background p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Connect Online</CardTitle>
                  <CardDescription>
                    Let's connect on social media and professional networks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;

                      return (
                        <Button key={link.label} variant="outline" size="sm" asChild>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="mr-2 h-4 w-4" />
                            {link.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent
                    matters, feel free to send a follow-up message or reach out
                    through multiple channels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
