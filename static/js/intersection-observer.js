const navbar = document.querySelector("nav");
const hero = document.querySelector(".hero")
const rubberBand = document.querySelector(".animate__animated")

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")

const sections = document.querySelectorAll("section")

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
            navbar.classList.add("nav-scroll")
            navbar.classList.remove("nav-scrolled");
        }
    });
}, heroOptions);

heroObserver.observe(hero);
//  HERO    //

//  ANIMATE RUBBERBAND  //
const animateOptions = {
    threshold: .7,
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

animateObserver.observe(rubberBand, faders)
//  ANIMATE RUBBERBAND  //

//  APPEAR ON SCROLL    //
const appearOptions = {
    threshold: .3,
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            entry.target.classList.add("active-nav-link")
            appearOnScroll.unobserve(entry.target)
        }
    })
}, appearOptions)

appearOnScroll.observe(rubberBand)

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})
// APPEAR ON SCROLL //

// //  NAVLINK //

// const navlinkOptions = {
//     threshold: 0,
// }

// const navlinkObserver = new IntersectionObserver((entries, navlinkObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             const activelink = entry.target.id
//             console.log(activelink)
//             const activeAnchor = document.querySelector("[data-page] =" + activeLink)
//             console.log("acctive " + activeAnchor)
//         }
//         // if (!entry.isIntersecting) {
//         //     activeAnchor.classList.remove("active-nav-link")
//         // }
//         // if (entry.isIntersecting) {
//         //     activeAnchor.classList.toggle("active-nav-link")
//         //     // entry.target.classList.add("active-nav-link")
//         // }

//         //     entry.target.classList.add(".active-nav-link")
//         // activelink.classList.add(".active-nav-link");
//         // navbar.classList.add("nav-scrolled");
//     })
// }, navlinkOptions)

// sections.forEach(section => {
//     navlinkObserver.observe(section);
// })