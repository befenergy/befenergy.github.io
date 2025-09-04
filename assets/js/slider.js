document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('#sliderFondo .slide');
  let actual = 0;

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('activo', i === n);
    });
  }

  setInterval(() => {
    actual = (actual + 1) % slides.length;
    mostrarSlide(actual);
  }, 4000);

  mostrarSlide(actual);
});

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookieBanner");
  const btn = document.getElementById("cookieAcceptBtn");
  if (banner && btn && !localStorage.getItem("befenergy_cookie_accepted")) {
    banner.style.display = "flex";
    btn.onclick = () => {
      localStorage.setItem("befenergy_cookie_accepted", "1");
      banner.style.display = "none";
    };
  }
});


