const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menumovil = document.querySelector('.menu-container');
const MenuMovil = document.querySelector('.menu');




menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}


MenuMovil.addEventListener('click',togglemenumovil);
function togglemenumovil() {
    menumovil.classList.toggle('inactive');
}