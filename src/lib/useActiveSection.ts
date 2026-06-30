import { useEffect, useState } from "react";
import { ACTIVE_SECTION_EVENT, getScrollOffset } from "./scrollToId";

const getHashId = () => decodeURIComponent(window.location.hash.replace("#", ""));

export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("home");
  const idsKey = ids.join("|");

  useEffect(() => {
    let frameId = 0;
    const stableIds = idsKey.split("|").filter(Boolean);

    const getElements = () =>
      stableIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

    const setFromHash = () => {
      const hashId = getHashId();

      if (hashId && stableIds.includes(hashId)) {
        setActive(hashId);
        return true;
      }

      return false;
    };

    const updateActiveSection = () => {
      frameId = 0;

      if (window.scrollY < getScrollOffset()) {
        setActive("home");
        return;
      }

      const elements = getElements();

      if (!elements.length) {
        setFromHash();
        return;
      }

      const navOffset = getScrollOffset();
      const activationLine = window.scrollY + navOffset + window.innerHeight * 0.28;

      const currentSection = elements
        .map((element) => {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          return {
            id: element.id,
            top,
            bottom,
            distance: Math.abs(top - activationLine),
            containsLine: top <= activationLine && bottom > activationLine,
          };
        })
        .sort((a, b) => {
          if (a.containsLine && !b.containsLine) return -1;
          if (!a.containsLine && b.containsLine) return 1;
          return a.distance - b.distance;
        })[0];

      setActive(currentSection?.id ?? "home");
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const handleHashOrHistoryChange = () => {
      if (!setFromHash()) {
        scheduleUpdate();
      }
    };

    const handleAnnouncedSection = (event: Event) => {
      const sectionId = (event as CustomEvent<string>).detail;

      if (sectionId === "home" || stableIds.includes(sectionId)) {
        setActive(sectionId);
      }
    };

    if (!setFromHash()) {
      scheduleUpdate();
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", handleHashOrHistoryChange);
    window.addEventListener("popstate", handleHashOrHistoryChange);
    window.addEventListener(ACTIVE_SECTION_EVENT, handleAnnouncedSection);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", handleHashOrHistoryChange);
      window.removeEventListener("popstate", handleHashOrHistoryChange);
      window.removeEventListener(ACTIVE_SECTION_EVENT, handleAnnouncedSection);
    };
  }, [idsKey]);

  return active;
}
