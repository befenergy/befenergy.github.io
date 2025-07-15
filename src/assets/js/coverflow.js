document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.getElementById('coverflowCarrusel');
  if (!carrusel) return; // ⛔ Si no hay carrusel, no sigue el script

  const tarjetas = Array.from(carrusel.querySelectorAll('.ventaja'));
  const btnIzq = carrusel.querySelector('.coverflow-flecha.izq');
  const btnDer = carrusel.querySelector('.coverflow-flecha.der');
  let actual = 0;

  function actualizar() {
    const len = tarjetas.length;
    tarjetas.forEach((card, i) => {
      card.classList.remove('active', 'left', 'right', 'far-left', 'far-right');
      const leftIndex = (actual - 1 + len) % len;
      const rightIndex = (actual + 1) % len;
      const farLeftIndex = (actual - 2 + len) % len;
      const farRightIndex = (actual + 2) % len;
      if (i === actual) {
        card.classList.add('active');
        card.style.display = 'block';
      } else if (i === leftIndex) {
        card.classList.add('left');
        card.style.display = 'block';
      } else if (i === rightIndex) {
        card.classList.add('right');
        card.style.display = 'block';
      } else if (i === farLeftIndex) {
        card.classList.add('far-left');
        card.style.display = 'block';
      } else if (i === farRightIndex) {
        card.classList.add('far-right');
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    actualizarIndicadoresCoverflow(actual);
  }

  function actualizarIndicadoresCoverflow(indice) {
    const puntos = document.querySelectorAll('.coverflow-indicador');
    puntos.forEach((p, i) => {
      p.classList.toggle('activo', i === indice);
    });
  }

  btnIzq?.addEventListener('click', () => {
    actual = (actual - 1 + tarjetas.length) % tarjetas.length;
    actualizar();
  });
  btnDer?.addEventListener('click', () => {
    actual = (actual + 1) % tarjetas.length;
    actualizar();
  });

  // Arrastrar con ratón/táctil
  let startX = null;
  carrusel.addEventListener('mousedown', e => startX = e.clientX);
  carrusel.addEventListener('mouseup', e => {
    if (startX !== null) {
      if (e.clientX < startX - 30) btnDer?.click();
      else if (e.clientX > startX + 30) btnIzq?.click();
      startX = null;
    }
  });
  carrusel.addEventListener('touchstart', e => startX = e.touches[0].clientX);
  carrusel.addEventListener('touchend', e => {
    if (startX !== null) {
      const endX = e.changedTouches[0].clientX;
      if (endX < startX - 30) btnDer?.click();
      else if (endX > startX + 30) btnIzq?.click();
      startX = null;
    }
  });

  actualizar();
});
