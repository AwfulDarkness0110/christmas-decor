'use strict';
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');
function tabs() {
  tabsBtn.forEach(function (item) {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('open')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('open');
        });
        tabsItems.forEach(function (item) {
          item.classList.remove('open');
        });
        currentBtn.classList.add('open');
        currentTab.classList.add('open');
        console.log(currentBtn);
      }
    });
  });
}
tabs();

export default tabs;
