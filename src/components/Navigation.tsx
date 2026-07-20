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
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background shadow-sm">
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
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-primary ${
                    isActive(item)
                      ? "bg-accent text-primary"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <SimpleThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <SimpleThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-105"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border shadow-lg">
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive(item)
                        ? "bg-accent text-primary"
                        : "text-foreground hover:bg-accent hover:text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
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
