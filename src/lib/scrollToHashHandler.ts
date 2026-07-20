import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  announceActiveSection,
  getScrollOffset,
  getSectionScrollTop,
} from "./scrollToId";

export default function ScrollToHashHandler() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));
    const offset = getScrollOffset();
    let frameId = 0;
    let timeoutId = 0;
    let attempts = 0;

    const scrollToSection = () => {
      const el = document.getElementById(id);

      if (!el) {
        attempts += 1;

        if (attempts < 20) {
          timeoutId = window.setTimeout(scrollToSection, 50);
        }

        return;
      }

      const y = getSectionScrollTop(el, offset);
      announceActiveSection(id);
      window.scrollTo({ top: y, behavior: "smooth" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };

    frameId = window.requestAnimationFrame(scrollToSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [hash, pathname]);

  return null;
}
