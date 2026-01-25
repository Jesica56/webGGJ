  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});


 const btn = document.getElementById("scrollTopBtn");

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});


const carousel = document.querySelector('#historicoCarousel');
  new bootstrap.Carousel(carousel, {
    interval: 4500,
    ride: 'carousel'
  });