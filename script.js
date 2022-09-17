// Set current year
document.querySelector('.current-year').innerText = new Date().getFullYear();
// Make the mobile navigation work
const navBtn = document.querySelector('.btn-mobile-nav');
navBtn.sty
const header = document.querySelector('.header');
navBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});
