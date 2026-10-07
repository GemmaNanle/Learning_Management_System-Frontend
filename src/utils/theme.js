const THEME_KEY = "learnhub-theme";

export function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

export function applyTheme(theme) {
  const html = document.documentElement;

  html.classList.remove("dark-mode");
  html.classList.remove("light-mode");

  if (theme === "dark") {
    html.classList.add("dark-mode");
  } else {
    html.classList.add("light-mode");
  }
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
}

export function initializeTheme() {
  const theme = getSavedTheme();

  applyTheme(theme);
}