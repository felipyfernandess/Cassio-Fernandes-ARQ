// CARROSSEL

const carousel = document.querySelector('.servicos-grid');
const viewport = document.querySelector('.servicos-viewport');
const arrows = document.querySelectorAll('.servicos-carousel .seta');

if (carousel && viewport && arrows.length) {
    const cards = Array.from(carousel.children);
    const step = 1;
    let currentIndex = 0;

    const getStepSize = () => {
        const card = cards[0];
        const gap = parseFloat(getComputedStyle(carousel).columnGap || getComputedStyle(carousel).gap);

        return (card.offsetWidth * step) + gap;
    };

    const updateCarousel = () => {
        const maxIndex = Math.ceil(cards.length / step) - 1;

        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

        const target = cards[currentIndex * step];

        carousel.style.transform =
            `translateX(-${target.offsetLeft}px)`;
    };

    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', () => {
            if (index === 0) {
                currentIndex = Math.max(0, currentIndex - 1);
            } else {
                const maxIndex = Math.max(0, Math.ceil(cards.length / step) - 1);
                currentIndex = Math.min(currentIndex + 1, maxIndex);
            }

            updateCarousel();
        });
    });

    window.addEventListener('resize', updateCarousel);
    window.addEventListener('load', updateCarousel);
    updateCarousel();
}
