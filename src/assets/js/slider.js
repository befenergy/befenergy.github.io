document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#sliderFondo .slide');
  let actual = 0;

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('activo', i === n);
    });
  }

  // Cambia el slide cada 4 segundos
  setInterval(() => {
    actual = (actual + 1) % slides.length;
    mostrarSlide(actual);
  }, 4000);

  mostrarSlide(actual);
});
