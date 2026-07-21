document.addEventListener('DOMContentLoaded', () => {
    const grade = document.querySelector('.projetos-grade');
    const trigger = document.querySelector('.todos-projetos');

    if (!grade || !trigger) return;

    const cards = Array.from(grade.querySelectorAll('.projetos-card'));

    if (!cards.length) return;

    const updateVisibility = (expanded) => {
        cards.forEach((card, index) => {
            const shouldHide = !expanded && index >= 4;
            card.classList.toggle('is-hidden', shouldHide);
        });

        trigger.setAttribute('aria-expanded', String(expanded));
        trigger.querySelector('p')?.replaceChildren(
            document.createTextNode(expanded ? 'VER MENOS PROJETOS' : 'VER MAIS PROJETOS')
        );
    };

    const setInitialState = () => updateVisibility(false);

    const toggleProjects = () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        updateVisibility(!isExpanded);
    };

    trigger.addEventListener('click', toggleProjects);
    window.addEventListener('resize', setInitialState);
    window.addEventListener('load', setInitialState);
    setInitialState();
});
