// ---------- Animacions al fer scroll ----------
function activateAnimations() {
  const windowHeight = window.innerHeight;

  const activateIfVisible = (elements, offset = 150) => {
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - offset) {
        el.classList.add('visible');
      }
    });
  };

  activateIfVisible(document.querySelectorAll('.fade-in'), 150);
  activateIfVisible(document.querySelectorAll('.slide-in-left'), 100);
  activateIfVisible(document.querySelectorAll('.zoom-in'), 120);
}

window.addEventListener('load', activateAnimations);
window.addEventListener('scroll', activateAnimations);

// ---------- Botó "Volver arriba" ----------
const toTopBtn = document.getElementById('to-top');

if (toTopBtn) {
  window.addEventListener('scroll', () => {
    toTopBtn.classList.toggle('show', window.scrollY > 400);
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Escriptura automàtica al header ----------
const words = ["fotovoltaica", "aerotermia", "eficiencia energética"];
let current = 0;
let letter = 0;
let isDeleting = false;

const typingSpeed = 150;
const deletingSpeed = 100;
const delayAfterWord = 1000;

function typeEffect() {
  const element = document.getElementById("typed-text");
  if (!element) return;

  const word = words[current];
  const text = word.substring(0, letter);
  element.textContent = text;

  if (!isDeleting && letter < word.length) {
    letter++;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && letter > 0) {
    letter--;
    setTimeout(typeEffect, deletingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) current = (current + 1) % words.length;
    setTimeout(typeEffect, delayAfterWord);
  }
}

window.addEventListener('load', typeEffect);

// ---------- Comptador animat amb prefix + ----------
const counters = document.querySelectorAll('.numero-contador');
const speed = 600;

counters.forEach(counter => {
  const prefix = counter.getAttribute('data-prefix') || '';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText.replace(prefix, '') || 0;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = prefix + Math.min(count + increment, target);
      setTimeout(updateCount, 25);
    } else {
      counter.innerText = prefix + target;
    }
  };
  updateCount();
});

// ---------- Gràfica de projectes completats ----------
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('graficaProyectos');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  const labelItems = document.querySelectorAll('#labelsGrafica li');
  const labels = Array.from(labelItems).map(li => li.textContent.trim());

  const tituloElem = document.getElementById('graficaTitulo');
  const titulo = tituloElem ? tituloElem.textContent.trim() : 'Proyectos completados';

  window.miGrafica = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: titulo,
        data: [12, 19, 3, 5, 2, 3, 3, 7, 8, 6, 4, 10],
        backgroundColor: '#ff8c32',
        borderRadius: 5,
        barPercentage: 0.5,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
});

// ---------- Botons de correu per pressupost ----------
document.addEventListener("DOMContentLoaded", function () {
  const btnPresupuesto = document.getElementById("presupuestoBtn");
  const opcionesCorreo = document.getElementById("opcionesCorreo");

  if (btnPresupuesto && opcionesCorreo) {
    btnPresupuesto.addEventListener("click", function (e) {
      e.preventDefault();
      opcionesCorreo.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (
        !btnPresupuesto.contains(e.target) &&
        !opcionesCorreo.contains(e.target)
      ) {
        opcionesCorreo.classList.remove("show");
      }
    });
  }

  const btnCorreo = document.getElementById("btnCorreo");
  if (btnCorreo) {
    btnCorreo.addEventListener("click", function () {
      window.location.href = "mailto:empresa@befenergy.com";
    });
  }

  const btnGmail = document.getElementById("btnGmail");
  if (btnGmail) {
    btnGmail.addEventListener("click", function () {
      window.open("https://mail.google.com/", "_blank");
    });
  }
});

// ---------- Funcionalidad de la barra de navegación ----------
document.getElementById("presupuestoBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  const submenu = document.getElementById("opcionesCorreo");
  submenu.classList.toggle("visible");
});

document.addEventListener("click", function (e) {
  const submenu = document.getElementById("opcionesCorreo");
  const btn = document.getElementById("presupuestoBtn");
  if (!btn.contains(e.target) && !submenu.contains(e.target)) {
    submenu.classList.remove("visible");
  }
});
