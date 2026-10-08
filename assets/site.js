const root = document.documentElement;
const themeBtn = document.querySelector("#theme-toggle");

function storedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function currentTheme() {
  return root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

const saved = storedTheme();
if (saved) root.dataset.theme = saved;

themeBtn?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
});

const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
