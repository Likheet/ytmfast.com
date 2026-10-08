// Site-wide details. Anything left empty stays hidden on the pages instead
// of showing a broken link.
const SITE = {
  founder: "Likheet Shetty",
  company: "",  // legal or trading name, if you have one
  location: "", // e.g. "Bengaluru, India"
  email: "hello@ytmfast.com",
  github: "",   // full URL of the repository, once the source is public
};

for (const el of document.querySelectorAll("[data-site]")) {
  const value = SITE[el.dataset.site];
  if (value) el.textContent = value;
}

for (const el of document.querySelectorAll("[data-site-href]")) {
  const key = el.dataset.siteHref;
  const value = SITE[key];
  if (value) el.href = key === "email" ? `mailto:${value}` : value;
}

for (const el of document.querySelectorAll("[data-site-if]")) {
  el.hidden = !SITE[el.dataset.siteIf];
}

for (const el of document.querySelectorAll("[data-site-unless]")) {
  el.hidden = Boolean(SITE[el.dataset.siteUnless]);
}

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
