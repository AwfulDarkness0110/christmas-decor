'use strict';
let image = document.querySelectorAll('.about__slider-line img ');
let slider = document.querySelector('.about__slider-line');

function rollSlider() {
  slider.appendChild(slider.firstElementChild);
}
const startSlide = () => {
  setInterval(() => {
    rollSlider();
  }, 5000);
};
startSlide();
