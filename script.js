// Set current year in footer
document.querySelector('.current-year').innerText = new Date().getFullYear();
// Make the mobile toggler work
const navBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
navBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});
// Make the mobile navigation disappear when a link is clicked
header.querySelectorAll('.main-nav-link').forEach((a) => {
    a.addEventListener('click', () => {
        header.classList.remove('nav-open');
    });
});
// Sticky navigation
const sectionHero = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        if (!ent.isIntersecting) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }, {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px"
    }
);
observer.observe(sectionHero);
