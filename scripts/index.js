// burger-menu

let burgerButtonOpen = document.querySelector('.header__burger-menu-btn');
let burgerButtonClose = document.querySelector('.header__burger-menu-btn--mobile');
let burgerMenu = document.querySelector('.header__burger-menu');
let body = document.querySelector('.body');
let menuLinks = document.querySelectorAll('.burger-menu__link');

burgerButtonOpen.addEventListener('click', function() {
  burgerMenu.classList.add('header__burger-menu--active');
  body.classList.add('body-overflow-hidden');
})

burgerButtonClose.addEventListener('click', function() {
  burgerMenu.classList.remove('header__burger-menu--active');
  body.classList.remove('body-overflow-hidden');
})

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burgerMenu.classList.remove('header__burger-menu--active');
    body.classList.remove('body-overflow-hidden');
  })
})

// endburger-menu


