'use strict';
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-container');
const socialMenu = document.querySelector('.social-icons-container');
const body = document.querySelector('body');
function hamburgerMenu() {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    socialMenu.classList.toggle('active');
    body.classList.toggle('stop-scroll');
  });
  document.querySelectorAll('.nav-link').forEach((l) =>
    l.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      socialMenu.classList.remove('active');
      body.classList.remove('stop-scroll');
    })
  );
}
export default hamburgerMenu;
