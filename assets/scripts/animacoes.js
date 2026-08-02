gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

function animarPagina(){
    gsap.from('header', {
        opacity: 0,
        duration: 3
    });

    gsap.from('nav', {
        x: -60,
        duration: 1.5
    });

    gsap.from('.hero-tag, h1', {
        y: -60,
        duration: 1.5
    });

    gsap.from('.button-hero',{
        y: 20,
        opacity: 0,
        duration: 1
    });

    gsap.from('.projetos .projetos-tag, .projetos .texto h2', {
        y: -60,
        opacity: 0,
        scrollTrigger: {
            trigger: '.projetos',
            // markers: true,
            start: '0% 100%',
            end: '50% 100%',
            scrub: true
        }
    });

    gsap.from('.projetos-card', {
        // opacity: 0,
        filter: 'blur(10px)',
        stagger: .3,
        scrollTrigger: {
            trigger: '.projetos-grade',
            start: '0% 80%',
            end: '100% 70%',
            scrub: true
        }
    });

    gsap.from('.estudio .content', {
        y: -60,
        opacity: 0,
        scrollTrigger: {
            trigger: '.estudio',
            // markers: true,
            start: '10% 100%',
            end: '100% 80%',
            scrub: true
        }
    });

    gsap.from('.topicos div', {
        y: 40,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            // markers: true,
            trigger: '.topicos',
            start: '50% 100%',
            end: '100% 80%',
            scrub: true
        }
    });

    gsap.from('.fundador .content', {
        x: -80,
        opacity: 0,
        scrollTrigger: {
            // markers: true,
            trigger: '.fundador',
            start: '30% 100%',
            end: '50% 80%',
            scrub: true
        }
    });

    gsap.from('.fundador .imagem', {
        x: 80,
        opacity: 0,
        scrollTrigger: {
            // markers: true,
            trigger: '.imagem',
            start: '30% 100%',
            end: '50% 100%',
            scrub: true
        }
    });

    gsap.from('.servicos .content', {
        y: 60,
        opacity: 0,
        scrollTrigger: {
            // markers: true,
            trigger: '.servicos',
            start: '30% 100%',
            end: '80% 100%',
            scrub: true
        }
    });

    gsap.from('footer', {
        y: '-30%',
        immediateRender: false,
        scrollTrigger: {
            trigger: 'footer',
            // markers: true,
            scrub: true,
            invalidateOnRefresh: true,
            end: '100% 100%' // end scroller-end
        }
    });

    // ANIMAR NAV

    gsap.to("header", {
    backgroundColor: "#0f0f0f",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "200 top",
        scrub: true
    }
    });

    // ANIMAR PALAVRAS

    const textoSplithero = document.querySelectorAll('.subtitle');

    textoSplithero.forEach(palavra => {
        const splitHero = SplitText.create(palavra, {
            type: 'line, words, chars',
            mask: 'lines'
        });

        gsap.from(splitHero.chars,{
            y: 40,
            opacity: 0,
            duration: 0.3,
            stagger: 0.03,
            scrollTrigger: {
                trigger: palavra,
            }
        });
    });

    const textoSplitprojeto = document.querySelectorAll('.projetos .texto p');

    textoSplitprojeto.forEach(palavra => {
        const splitHero = SplitText.create(palavra, {
            type: 'line, words, chars',
            mask: 'lines'
        });

        gsap.from(splitHero.chars,{
            y: 20,
            opacity: 0,
            duration: 0.1,
            stagger: 0.03,
            scrollTrigger: {
                trigger: palavra,
            }
        });
    });
}

const tl = gsap.timeline({
    onComplete(){
        gsap.to('#preloader', {
            opacity: 0,
            display: 'none'
        });

        animarPagina();
    }
});

tl.to('#preloader path', {
    duration: 3,
    strokeDashoffset: 0
});

tl.to('#preloader path', {
    duration: 0.7,
    fill: 'rgb(102, 111, 52)'
});
