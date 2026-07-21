document.addEventListener('DOMContentLoaded', () => {
    const headerOffset = 90;

    const scrollToSection = (targetId, extraOffset = 0) => {
        const targetElement = document.querySelector(targetId);

        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset + extraOffset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    };

    document.querySelectorAll('.logo-topo').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href') || '';

            if (href.startsWith('#')) {
                event.preventDefault();
                scrollToSection(href);
            }
        });
    });

    document.querySelectorAll('.links-navegacao a[href^="#"], .footer-menu a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            if (!targetId || !targetId.startsWith('#')) return;

            event.preventDefault();

            const isServices = targetId === '#servicos';
            scrollToSection(targetId, isServices ? 20 : 0);
        });
    });

    const initialHash = window.location.hash;

    if (initialHash) {
        window.setTimeout(() => {
            const isServices = initialHash === '#servicos';
            scrollToSection(initialHash, isServices ? 20 : 0);
        }, 100);
    }
});
