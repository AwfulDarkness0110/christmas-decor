'use strict';
const accordionQuestions = document.querySelectorAll('.accordion__question');
function accordion() {
  accordionQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      const height = question.nextElementSibling.scrollHeight;
      question.classList.toggle('open-answer');
      if (question.classList.contains('open-answer')) {
        question.nextElementSibling.style.maxHeight = `${height}px`;
      } else {
        question.nextElementSibling.style.maxHeight = `0px`;
      }
    });
  });
}
accordion();

export default accordion;
