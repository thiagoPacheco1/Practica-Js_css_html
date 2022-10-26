const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menumovil = document.querySelector('.menu-container');
const MenuMovil = document.querySelector('.menu');

const carrito = document.querySelector('.carrito');
const titlee= document.querySelector('.titleg');
const toggcarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




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


const productList=[];

productList.push({
    name: 'Bike',
    price: 120,
    imagen:"/recursos/icons/bike.jpeg",
});
productList.push({
    name: 'TV',
    price: 520,
    imagen:"/recursos/icons/bike.jpeg",
});
productList.push({
    name: 'card',
    price: 20000,
    imagen:"/recursos/icons/bike.jpeg",
});
productList.push({
    name: 'Bike',
    price: 120,
    imagen:"/recursos/icons/bike.jpeg",
});
productList.push({
    name: 'TV',
    price: 520,
    imagen:"/recursos/icons/bike.jpeg",
});
productList.push({
    name: 'card',
    price: 20000,
    imagen:"/recursos/icons/bike.jpeg",
});



function renderProducts(arr) {
    for (product of arr){
        
        const productCard = document.createElement('div');
productCard.classList.add('product-card');

const productImg = document.createElement('img');
productImg.setAttribute('src', product.imagen);

const productInfo = document.createElement('div');
productInfo.classList.add('product-info');

const productInfoDiv = document.createElement('div');

const productInfoDivPrice = document.createElement('p');
productInfoDivPrice.innerHTML='$' + product.price;

const productInfoDivName = document.createElement('p');
productInfoDivName.innerHTML= product.name;

productInfoDiv.appendChild(productInfoDivPrice);
productInfoDiv.appendChild(productInfoDivName);

const productInfoFigure = document.createElement('figure');
const productImgCart = document.createElement('img');
productImgCart.setAttribute('src', '/recursos/icons/bt_add_to_cart.svg');


productInfoFigure.appendChild(productImgCart);


productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);  

productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);
};   

};

renderProducts(productList);