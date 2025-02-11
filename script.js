document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const products = document.querySelectorAll('.product');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle per il burger menu
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active');
        });
    }

    // Effetti hover sui prodotti
    products.forEach(product => {
        product.addEventListener('mouseenter', () => product.classList.add('hover-effect'));
        product.addEventListener('mouseleave', () => product.classList.remove('hover-effect'));
    });

    // Chiusura del menu quando si clicca su un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });
});
