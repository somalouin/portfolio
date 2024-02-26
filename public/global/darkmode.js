if (typeof window !== "undefined") {
  const toggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const githubIcon = document.getElementById("github");
  
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeIcon.src = "icons/sun.png";
    githubIcon.src = "icons/github-light.png";
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    themeIcon.src = "icons/moon.png";
    githubIcon.src = "icons/github-dark.png";
    document.documentElement.classList.remove("dark");
  }

  toggle.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      themeIcon.src = "icons/moon.png";
      githubIcon.src = "icons/github-dark.png";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      themeIcon.src = "icons/sun.png";
      githubIcon.src = "icons/github-light.png";
      document.documentElement.classList.add("dark");
    }
  });
}
