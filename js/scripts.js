// Smooth Scroll for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
