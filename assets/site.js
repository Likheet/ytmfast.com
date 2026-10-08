const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// Download buttons. The HTML defaults to Windows as the main button and Mac
// as the second, so the page works without this script. On a Mac, swap them.
// Builds live in a public, binaries-only repo; the app's source repo is private.
const RELEASES = "https://github.com/Likheet/ytfast-releases/releases/latest/download/";
const BUILDS = {
  windows: { href: RELEASES + "YTFast-for-Windows.zip", label: "Download for Windows" },
  mac: { href: RELEASES + "YTFast-for-Mac.zip", label: "Download for Mac" },
};

function isMac() {
  const platform = navigator.userAgentData?.platform || navigator.platform || "";
  return /mac/i.test(platform) && !/iphone|ipad/i.test(navigator.userAgent);
}

if (isMac()) {
  for (const link of document.querySelectorAll("[data-download]")) {
    const os = link.dataset.download === "primary" ? "mac" : "windows";
    link.href = BUILDS[os].href;
    const label = link.querySelector("[data-label]") || link;
    label.textContent = BUILDS[os].label;
  }
}
