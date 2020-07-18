const navbar = document.querySelector("nav");
const hero = document.querySelector(".hero")
const rubber = document.querySelector(".animate__animated")

const rubberBand = document.querySelector(".animate__animated")
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")

//  HERO    //
const heroOptions = {
    rootMargin: "-550px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver((entries, heroObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("nav-scrolled");
            navbar.classList.remove("nav-scroll");
        } else {
            navbar.classList.remove("nav-scrolled");
            navbar.classList.add("nav-scroll");

        }
    });
}, heroOptions);

heroObserver.observe(hero);
//  HERO    //

//  ANIMATE RUBBERBAND  //
const animateOptions = {
    threshold: .7,
    rootMargin: "0px 0px -200px 0px"
};

const animateObserver = new IntersectionObserver((entries, animateObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        }
        entry.target.classList.add("animate__rubberBand")
        animateObserver.unobserve(entry.target)
    })
}, animateOptions)

animateObserver.observe(rubber, faders)
//  ANIMATE RUBBERBAND  //

//  APPEAR ON SCROLL    //
const appearOptions = {
    threshold: .3,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions)

appearOnScroll.observe(rubber)

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})
// APPEAR ON SCROLL //