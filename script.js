const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav__link");

/* Toggle Menu open */

menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  
  /* Close Toggle Menu when link is clicked */
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  });
