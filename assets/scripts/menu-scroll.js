document.addEventListener('DOMContentLoaded', () => {
    const headerOffset = 90;

    document.querySelectorAll('.logo-topo').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('.links-navegacao a[href^="#"], .footer-menu a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (!targetElement) return;

            event.preventDefault();

            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
            const isServices = targetId === '#servicos';

            window.scrollTo({
                top: isServices ? targetPosition + 20 : targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
