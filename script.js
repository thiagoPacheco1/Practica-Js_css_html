const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menumovil = document.querySelector('.menu-container');
const MenuMovil = document.querySelector('.menu');

const carrito = document.querySelector('.carrito');
const titlee= document.querySelector('.titleg');
const toggcarrito = document.querySelector('.product-detail');




menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    if (!desktopMenu.classList.contains('inactive')) {
        toggcarrito.classList.add('inactive')
    }
}
MenuMovil.addEventListener('click',togglemenumovil);
function togglemenumovil() {
    menumovil.classList.toggle('inactive');
if (!menumovil.classList.contains('inactive')) {
    toggcarrito.classList.add('inactive');
}
}
titlee.addEventListener('click',togcarrito);
carrito.addEventListener('click',togcarrito);
function togcarrito() {
    toggcarrito.classList.toggle('inactive');

    if (!toggcarrito.classList.contains('inactive')) {
        menumovil.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }  
}

