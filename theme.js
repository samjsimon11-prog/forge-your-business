document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Theme handling
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  // Hamburger menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.contains("active");
      if (isActive) {
        hamburger.classList.remove("active");
        mobileMenu.style.display = "none";
      } else {
        hamburger.classList.add("active");
        mobileMenu.style.display = "flex";
      }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.style.display = "none";
      });
    });
  }
});
