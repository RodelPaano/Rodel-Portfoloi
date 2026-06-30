import { useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BriefcaseBusiness, Home, Mail, Menu, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SimpleThemeToggle from "@/components/SimpleThemeToggle";
import scrollToId, { announceActiveSection } from "@/lib/scrollToId";
import useActiveSection from "@/lib/useActiveSection";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", id: "about", icon: UserRound },
  {
    name: "Projects",
    href: "/#projects",
    id: "projects",
    icon: BriefcaseBusiness,
  },
  { name: "Contact", href: "/#contact", id: "contact", icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const sectionIds = ["about", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);

  const isActive = (item: (typeof navigation)[number]) => {
    if (item.id) {
      if (location.pathname !== "/") return false;
      return activeSection === item.id;
    }

    if (location.pathname !== "/") return false;
    return activeSection === "home";
  };

  const handleNavClick = (e: MouseEvent, item: (typeof navigation)[number]) => {
    e.preventDefault();

    if (item.id) {
      if (location.pathname === "/") {
        scrollToId(item.id, 96);
      } else {
        navigate(item.href);
      }
    } else {
      if (location.pathname === "/") {
        window.history.pushState({}, "", "/");
        announceActiveSection("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 shadow-sm backdrop-blur-xl">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-nav-height">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center gap-2 text-lg font-semibold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground transition-transform group-hover:-translate-y-0.5">
                RP
              </span>
              <span>Portfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-primary ${
                    isActive(item)
                      ? "bg-accent text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <SimpleThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <SimpleThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full w-9 h-9 border border-border"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="animate-fade-in md:hidden">
            <div className="space-y-2 border-t border-border px-2 pb-4 pt-3">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-primary ${
                      isActive(item)
                        ? "text-primary bg-accent"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
