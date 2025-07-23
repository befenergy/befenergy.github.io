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


// ---------- Comptador animat ----------
const counters = document.querySelectorAll('.numero-contador');
const speed = 200;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = Math.min(count + increment, target);
      setTimeout(updateCount, 25);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});


// ---------- Gràfica (Chart.js) ----------
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('graficaProyectos').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Proyectos completados',
        data: [12, 19, 3, 5, 2, 3],
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

