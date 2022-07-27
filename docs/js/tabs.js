'use strict';
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');
function tabs() {
  tabsBtn.forEach(function (item) {
    item.addEventListener('click', () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);
      if (!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function (item) {
          item.classList.remove('active');
        });
        tabsItems.forEach(function (item) {
          item.classList.remove('active');
        });
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  });
}
tabs();

export default tabs;
