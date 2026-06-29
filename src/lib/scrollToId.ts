const getScrollOffset = () => {
  const rootStyles = getComputedStyle(document.documentElement);
  const navHeight = rootStyles.getPropertyValue("--nav-height").trim();

  if (navHeight.endsWith("rem")) {
    const remValue = Number.parseFloat(navHeight);
    return Number.isFinite(remValue) ? remValue * 16 : 80;
  }

  const parsedValue = Number.parseFloat(navHeight);
  return Number.isFinite(parsedValue) ? parsedValue : 80;
};

export default function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;

  const navOffset = offset || getScrollOffset();
  const y = window.scrollY + el.getBoundingClientRect().top - navOffset - 12;

  window.history.pushState({}, "", `#${id}`);
  window.scrollTo({ top: y, behavior: "smooth" });
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}