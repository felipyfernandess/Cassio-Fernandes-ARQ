gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


// ========================================
// SCROLL SUAVE EM TODOS OS DISPOSITIVOS
// ========================================

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});


// ========================================
// TODAS AS ANIMAÇÕES DA PÁGINA
// TODOS OS DISPOSITIVOS
// ========================================

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
            start: '0% 100%',
            end: '50% 100%',
            scrub: true
        }
    });

    gsap.from('.projetos-card', {
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
            scrub: true,
            invalidateOnRefresh: true,
            end: '100% 100%'
        }
    });


    // ========================================
    // ANIMAÇÃO DO HEADER AO ROLAR
    // ========================================

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


    // ========================================
    // SPLIT TEXT - HERO
    // ========================================

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


    // ========================================
    // SPLIT TEXT - PROJETOS
    // ========================================

    const textoSplitprojeto =
        document.querySelectorAll('.projetos .texto p');

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


// ========================================
// PRELOADER APENAS EM NOTEBOOK/DESKTOP
// ========================================

const mm = gsap.matchMedia();

const jaViuPreloader = document.documentElement.classList.contains('sem-preloader');

mm.add("(min-width: 1024px)", () => {

    // Já viu o preloader nesta sessão: pula direto para as animações
    if (jaViuPreloader) {
        animarPagina();
        return;
    }

    // Marca que o preloader já foi exibido
    try {
        sessionStorage.setItem('preloaderVisto', 'true');
    } catch (e) {}

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
});


// ========================================
// CELULAR E TABLET
// SEM PRELOADER
// MAS COM TODAS AS ANIMAÇÕES
// ========================================

mm.add("(max-width: 1023px)", () => {

    animarPagina();

});