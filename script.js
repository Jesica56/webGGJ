document.addEventListener("DOMContentLoaded", () => {

  /* ===== NAVBAR ===== */
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

  document.addEventListener("click", e => {
const link = e.target.closest("a");
if (link && link.href.startsWith("http")) {
return; // deja pasar
}
});

  /* ===== CAROUSEL ===== */
  const carousel = document.querySelector("#historicoCarousel");
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 4500,
      ride: "carousel"
    });
  }

  /* ===== BOTÓN IR ARRIBA ===== */
  const btnArriba = document.getElementById("btn-arriba");

  if (btnArriba) {
    window.addEventListener("scroll", () => {
      btnArriba.style.display = window.scrollY > 300 ? "block" : "none";
    });

    btnArriba.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});