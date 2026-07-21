document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.imagens-projeto .imagem');

    if (!projectImages.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close" type="button" aria-label="Fechar imagem">×</button>
            <img class="image-modal-image" src="" alt="Imagem do projeto">
        </div>
    `;

    document.body.appendChild(overlay);

    const modalImage = overlay.querySelector('.image-modal-image');
    const closeButton = overlay.querySelector('.image-modal-close');

    const openModal = (element) => {
        const bgImage = window.getComputedStyle(element).backgroundImage;
        let imageUrl = '';

        if (bgImage && bgImage !== 'none') {
            const match = bgImage.match(/url\((['"]?)(.*?)\1\)/i);
            imageUrl = match ? match[2] : bgImage;
        }

        if (!imageUrl) return;

        modalImage.src = imageUrl;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        modalImage.removeAttribute('src');
    };

    projectImages.forEach((image) => {
        image.addEventListener('click', () => openModal(image));
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay || event.target === closeButton) {
            closeModal();
        }
    });

    closeButton.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
