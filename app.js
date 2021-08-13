// hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.burger-menu');
const navBar = document.querySelector('.nav-bar')
let menuOpen = false;
burgerMenu.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        navBar.classList.add('nav-active')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBar.classList.remove('nav-active')
        menuOpen = false;
    }
});