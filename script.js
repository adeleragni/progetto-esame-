document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.style.transform = 'scale(1.05)';
            product.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            product.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            product.style.border = '2px solid #4d6719';
        });

        product.addEventListener('mouseleave', () => {
            product.style.transform = 'scale(1)';
            product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            product.style.border = 'none';
        });
    });
});
