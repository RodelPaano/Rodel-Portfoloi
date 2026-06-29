import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[], rootMargin = "-25% 0px -25% 0px") {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const hashId = window.location.hash.replace("#", "");
    if (hashId && ids.includes(hashId)) {
      setActive(hashId);
      return;
    }

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActive("home");
        return;
      }

      const viewportMid = window.innerHeight * 0.4 + window.scrollY;
      const visibleSections = elements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = rect.bottom + window.scrollY;
          const visibleHeight = Math.max(0, Math.min(bottom, viewportMid + 120) - Math.max(top, viewportMid - 120));
          const ratio = visibleHeight / Math.max(rect.height, 1);

          return { id: element.id, ratio, top, bottom };
        })
        .filter((section) => section.ratio > 0.05)
        .sort((a, b) => b.ratio - a.ratio);

      if (visibleSections.length) {
        setActive(visibleSections[0].id);
        return;
      }

      const nearestSection = [...elements]
        .map((element) => ({
          id: element.id,
          distance: Math.abs((element.getBoundingClientRect().top + window.scrollY) - viewportMid),
        }))
        .sort((a, b) => a.distance - b.distance)[0];

      if (nearestSection) {
        setActive(nearestSection.id);
      }
    };

    updateActiveSection();
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActive(visibleEntries[0].target.id);
        } else {
          updateActiveSection();
        }
      },
      { root: null, rootMargin, threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [ids, rootMargin]);

  return active;
}
