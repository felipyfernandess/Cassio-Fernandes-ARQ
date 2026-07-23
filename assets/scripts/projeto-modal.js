document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.imagens-projeto .imagem');
    const renderButtons = document.querySelectorAll('.ver-render');

    if (!projectImages.length && !renderButtons.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <div class="image-modal-content">
            <button class="image-modal-close" type="button" aria-label="Fechar conteúdo">×</button>
            <img class="image-modal-image" src="" alt="Imagem do projeto">
            <video class="image-modal-video" controls playsinline></video>
        </div>
    `;

    document.body.appendChild(overlay);

    const modalImage = overlay.querySelector('.image-modal-image');
    const modalVideo = overlay.querySelector('.image-modal-video');
    const closeButton = overlay.querySelector('.image-modal-close');

    const openModal = ({ type, src }) => {
        if (type === 'image') {
            modalVideo.classList.add('hidden');
            modalVideo.pause();
            modalVideo.removeAttribute('src');
            modalVideo.load();
            modalImage.src = src;
            modalImage.classList.remove('hidden');
        } else {
            modalImage.classList.add('hidden');
            modalImage.removeAttribute('src');
            modalVideo.src = src;
            modalVideo.classList.remove('hidden');
            modalVideo.load();
            modalVideo.play().catch(() => {});
        }

        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        modalImage.removeAttribute('src');
        modalVideo.pause();
        modalVideo.removeAttribute('src');
        modalVideo.load();
    };

    const openImageModalFromElement = (element) => {
        const bgImage = window.getComputedStyle(element).backgroundImage;
        let imageUrl = '';

        if (bgImage && bgImage !== 'none') {
            const match = bgImage.match(/url\((['"]?)(.*?)\1\)/i);
            imageUrl = match ? match[2] : bgImage;
        }

        if (!imageUrl) return;
        openModal({ type: 'image', src: imageUrl });
    };

    const openVideoModalFromButton = (button) => {
        const videoUrl = button.dataset.video;
        if (!videoUrl) return;
        openModal({ type: 'video', src: videoUrl });
    };

    projectImages.forEach((image) => {
        image.addEventListener('click', () => openImageModalFromElement(image));
    });

    renderButtons.forEach((button) => {
        button.addEventListener('click', () => openVideoModalFromButton(button));
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
