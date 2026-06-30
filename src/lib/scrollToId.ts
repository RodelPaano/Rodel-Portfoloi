export const ACTIVE_SECTION_EVENT = "portfolio:active-section";

export const getScrollOffset = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const navHeight = rootStyles.getPropertyValue("--nav-height").trim();

  if (navHeight.endsWith("rem")) {
    const remValue = Number.parseFloat(navHeight);
    return Number.isFinite(remValue) ? remValue * 16 : 80;
  }

  const parsedValue = Number.parseFloat(navHeight);
  return Number.isFinite(parsedValue) ? parsedValue : 80;
};

export const getSectionScrollTop = (element: HTMLElement, offset = getScrollOffset()) => {
  return window.scrollY + element.getBoundingClientRect().top - offset - 12;
};

export const announceActiveSection = (id: string) => {
  window.dispatchEvent(new CustomEvent(ACTIVE_SECTION_EVENT, { detail: id }));
};

export default function scrollToId(id: string, offset = getScrollOffset()) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = getSectionScrollTop(el, offset);

  window.history.pushState({}, "", `#${id}`);
  announceActiveSection(id);
  window.scrollTo({ top: y, behavior: "smooth" });
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}
