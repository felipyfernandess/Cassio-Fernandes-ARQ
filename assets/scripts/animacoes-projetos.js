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

    gsap.from('.content > .texto', {
        y: 60,
        opacity: 0,
        scrollTrigger: {
            trigger: '.texto',
            // markers: true,
            start: '50% 100%',
            end: '150% 100%',
            scrub: true
        }
    });

    gsap.from('.imagem', {
        y: 50,
        opacity: 0,
        // filter: 'blur(10px)',
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.imagens-projeto',
            // markers: true,
            start: '0% 80%',
            end: '100% 90%',
            scrub: true
        }
    });

    gsap.from('.proximo-projeto .texto',{
        opacity: 0,
        x: -100,
        scrollTrigger: {
            trigger: '.proximo-projeto',
            // markers: true,
            start: '0% 80%',
            end: '100% 90%',
            scrub: true
        }
    });

    gsap.from('.proximo-projeto .ver-projeto',{
        opacity: 0,
        x: 100,
        scrollTrigger: {
            trigger: '.proximo-projeto',
            // markers: true,
            start: '0% 80%',
            end: '100% 90%',
            scrub: true
        }
    });

    gsap.from('footer .footer-menu',{
        opacity: 0,
        x: -100,
        scrollTrigger: {
            trigger: 'footer',
            // markers: true,
            start: '0% 80%',
            end: '100% 100%',
            scrub: true
        }
    });

    gsap.from('footer .footer-info',{
        opacity: 0,
        x: 100,
        scrollTrigger: {
            trigger: 'footer',
            // markers: true,
            start: '0% 80%',
            end: '100% 100%',
            scrub: true
        }
    });

    gsap.from('footer .footer-brand',{
        opacity: 0,
        y: -100,
        scrollTrigger: {
            trigger: 'footer',
            // markers: true,
            start: '0% 80%',
            end: '100% 100%',
            scrub: true
        }
    });

    // ANIMAR NAV

    gsap.to("header", {
        backgroundColor: "#F7F5F1",
        borderBottom: "1px solid #E4DDD2",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: true
        }
    });

    gsap.to("header .nome-empresa a", {
        color: "#1A1A1A",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: true
        }
    });

    gsap.to("header .links-navegacao a", {
        color: "#6A6560",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: true
        }
    });

    gsap.to("header .menu-toggle svg", {
        fill: "#1A1A1A",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "200 top",
            scrub: true
        }
    });
}

animarPagina();