(() => {
    const section = document.querySelector('.informacoes');

    if (!section) return;

    const counters = Array.from(section.querySelectorAll('.valor'));

    if (!counters.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = 4000;
    const easeOutQuart = (value) => 1 - Math.pow(1 - value, 4);

    const animateValue = (element, target, prefix = '', suffix = '') => {
        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            const currentValue = Math.round(target * easeOutQuart(progress));

            element.textContent = `${prefix}${currentValue}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                element.textContent = `${prefix}${target}${suffix}`;
            }
        };

        requestAnimationFrame(step);
    };

    const startAnimation = () => {
        counters.forEach((element, index) => {
            const target = Number(element.dataset.target || 0);
            const prefix = element.dataset.prefix || '';
            const suffix = element.dataset.suffix || '';
            const delay = prefersReducedMotion ? 0 : index * 120;

            window.setTimeout(() => {
                element.classList.add('is-visible');

                if (prefersReducedMotion) {
                    element.textContent = `${prefix}${target}${suffix}`;
                } else {
                    animateValue(element, target, prefix, suffix);
                }
            }, delay);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !section.dataset.animated) {
                section.dataset.animated = 'true';
                startAnimation();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
})();
