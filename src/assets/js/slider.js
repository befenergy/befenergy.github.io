document.addEventListener('DOMContentLoaded', function () {
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
    }, 4000); // Cambia cada 4 segundos

    mostrarSlide(actual);
});

function toggleFaq(btn) {
    document.querySelectorAll('.faq-answer').forEach(function(ans) {
        if (ans !== btn.nextElementSibling) ans.classList.remove('abierto');
    });
    document.querySelectorAll('.faq-question').forEach(function(q) {
        if (q !== btn) q.classList.remove('abierto');
    });
    btn.classList.toggle('abierto');
    btn.nextElementSibling.classList.toggle('abierto');
}

function toggleExperto(btn) {
    const detalle = btn.nextElementSibling;
    if (detalle.classList.contains('activo')) {
        detalle.classList.remove('activo');
    } else {
        detalle.classList.add('activo');
    }
}
