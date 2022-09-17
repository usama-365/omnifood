// Set current year
document.querySelector('.current-year').innerText = new Date().getFullYear();
// Make the mobile navigation work
const navBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
navBtn.addEventListener('click', () => {
    header.classList.toggle('nav-open');
});

header.querySelectorAll('.main-nav-link').forEach((a) => {
    a.addEventListener('click', () => {
        header.classList.remove('nav-open');
    });
});