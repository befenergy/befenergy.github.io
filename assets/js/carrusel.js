// carrusel.js - BefEnergy

document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.getElementById('ventajasCarrusel');
    const btnIzq = document.querySelector('.carrusel-flecha.izq');
    const btnDer = document.querySelector('.carrusel-flecha.der');
    const cardWidth = carrusel.querySelector('.ventaja').offsetWidth + 30;

    // Evento: mover carrusel a la izquierda
    btnIzq.addEventListener('click', () => {
        carrusel.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });

    // Evento: mover carrusel a la derecha
    btnDer.addEventListener('click', () => {
        carrusel.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
});
