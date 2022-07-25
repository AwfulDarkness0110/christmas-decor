'use strict';
// --------Hamburger menu------------
const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.navbar-container');
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})
document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click', ()=>{
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');

}))
// -------------