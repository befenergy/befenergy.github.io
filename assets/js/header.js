document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle'); // Botón (hamburguesa)
  const nav = document.getElementById('nav-menu'); // Menú de navegación

  // Al hacer click en el botón hamburguesa
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');        // Muestra u oculta el menú
    menuToggle.classList.toggle('active'); // Cambia el estado visual del botón
  });

  // Accesibilidad: permite usar el teclado
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menuToggle.click(); // Simula un click con Enter o barra espaciadora
    }
  });
});
