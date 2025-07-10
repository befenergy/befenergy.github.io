document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.getElementById('ventajasCarrusel');
    const btnIzq = document.querySelector('.carrusel-flecha.izq');
    const btnDer = document.querySelector('.carrusel-flecha.der');
    const cardWidth = carrusel.querySelector('.ventaja').offsetWidth + 30; // ancho + gap

    btnIzq.addEventListener('click', () => {
        carrusel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    btnDer.addEventListener('click', () => {
        carrusel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
});