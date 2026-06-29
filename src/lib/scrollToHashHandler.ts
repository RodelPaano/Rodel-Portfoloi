import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToHashHandler() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const offset = 96;

    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const y = window.scrollY + el.getBoundingClientRect().top - offset - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };

    const frameId = window.requestAnimationFrame(scrollToSection);
    return () => window.cancelAnimationFrame(frameId);
  }, [hash, pathname]);

  return null;
}