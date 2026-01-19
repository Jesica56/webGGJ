  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});


  const galeriaImgs = document.querySelectorAll('.galeria-img');
  const modalImg = document.getElementById('galeriaModalImg');

  galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.dataset.img;
    });
  });