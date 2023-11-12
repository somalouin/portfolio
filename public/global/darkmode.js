if (typeof window !== "undefined") {
  const toggle = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    icon.src = "icons/sun.png";
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    icon.src = "icons/moon.png";
    document.documentElement.classList.remove("dark");
  }

  toggle.addEventListener("click", function () {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      icon.src = "icons/moon.png";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      icon.src = "icons/sun.png";
      document.documentElement.classList.add("dark");
    }
  });
}
