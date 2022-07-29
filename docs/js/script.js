'use strict';
import tabs from '../js/tabs.js';
import generateShop from '../js/generate-shop.js';
import accordion from '../js/accordion';
// --------Hamburger menu------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-container');
const socialMenu = document.querySelector('.social-icons-container');
const body = document.querySelector('body');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  socialMenu.classList.toggle('active');
  body.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((l) =>
  l.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    socialMenu.classList.remove('active');
    body.classList.remove('active');
  })
);
// ------------Turn on tabs---------
tabs();
// ------------Generate all product cards on website------
generateShop(shop);
generateShop(interior);
generateShop(wreaths);
generateShop(christmasBalls);
generateShop(stockings);
// ------------Turn on accordion menu----------
accordion();
