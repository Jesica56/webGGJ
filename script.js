const navbar = document.querySelector('.custom-navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });



  const galeriaImgs = document.querySelectorAll('.galeria-img');
  const modalImg = document.getElementById('galeriaModalImg');

  galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.dataset.img;
    });
  });

