'use strict';
const shoppingCart = document.querySelector('.shopping__cart');
let shoppingCartCount = document.querySelectorAll('.shopping__count');
let shoppingCartDelete = document.querySelectorAll('.shopping__remove img');
let shoppingCartMessage = document.querySelector('.shopping__message');
let basket =
  JSON.parse(localStorage.getItem('data')) ||
  [
    // {
    //   id: 19,
    //   name: 'Stocking With Pompons',
    //   price: 22.0,
    //   img: './img/19.png',
    //   count: 0
    // }
  ];
const closeShopBtn = document.querySelector('.shopping__title');
const popUpWrapper = document.querySelector('.wrapper');
const popUpWindow = document.querySelector('.shopping__container');
let purchaseIcon = document.querySelector('.purchase__icon');
let purchaseIconIMG = document.querySelector('.right');
let purchaseIconCount = document.querySelector('.purchase__count');
const body = document.querySelector('body');

// window.onload = () => {
//   generateShoppingCart();
// };
///////////
document.addEventListener('DOMContentLoaded', function () {
  //dom is fully loaded, but maybe waiting on images & css files
  const btnAdd = document.querySelectorAll('.product__btn');
  btnAdd.forEach((add) => {
    add.addEventListener('click', (event) => {
      purchaseIconIMG.classList.toggle('jumping');
      event.preventDefault();
      event.target.nextElementSibling.value++;
      let name =
        event.target.previousElementSibling.previousElementSibling.innerText;
      let price = event.target.previousElementSibling.innerText;
      let count = event.target.nextElementSibling.value;
      let id = event.target.parentElement.firstElementChild.value;
      let img =
        event.target.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute(
          'src'
        );
      // let id = event.target.nextElementSibling.innerText;
      if (basket.some((e) => e.name === name)) {
        let objIndex = basket.findIndex((obj) => obj.name == name);
        basket[objIndex].count = count;
        localStorage.setItem('data', JSON.stringify(basket));
        generateShoppingCart();
        inputListener();
        trashBtn();
        totalCount();
        if (basket.length > 0) {
          shoppingCartMessage.style.display = 'none';
        }
      } else {
        let newItem = {};
        newItem.id = id;
        newItem.name = name;
        newItem.img = img;
        newItem.count = count;
        newItem.price = price.substring(1);
        basket.push(newItem);
        generateShoppingCart();
        inputListener();
        trashBtn();
        localStorage.setItem('data', JSON.stringify(basket));
        totalCount();
        if (basket.length > 0) {
          shoppingCartMessage.style.display = 'none';
        }
      }
    });
  });
  totalCount();
  generateShoppingCart();
  trashBtn();
  updateLocalStorage();
  inputListener();
  btnAdd();
  // purchaseIcon.classList.remove('jumping');
});
//////////////////

let generateShoppingCart = () => {
  return (shoppingCart.innerHTML = basket
    .map((x) => {
      return `
        <div class="shopping__row">
          <div class="shopping__img"><img src="${x.img}" alt="x"></div>
          <div class="shopping__name">${x.name}</div>
          <input class="shopping__count" type="number" value="${x.count}" min="0">
          <div class="shopping__price">$${x.price}</div>
              <div class="shopping__remove"><img src="img/trash-svgrepo-com.svg" alt="trash-icon" /></div>
        </div>
`;
    })
    .join(''));
};

function updateLocalStorage(event) {
  let name = event.target.previousElementSibling.innerText;
  let price = event.target.nextElementSibling.innerText;
  let count = +event.target.value;
  if (basket.some((e) => e.name === name)) {
    let objIndex = basket.findIndex((obj) => obj.name == name);
    basket[objIndex].count = count;
    localStorage.setItem('data', JSON.stringify(basket));
    generateShoppingCart();
    inputListener();
    trashBtn();
    totalCount();
  } else {
    let newItem = {};
    newItem.id = id;
    newItem.name = name;
    newItem.count = count;
    newItem.price = price;
    basket.push(newItem);
    generateShoppingCart();
    inputListener();
    trashBtn();
    localStorage.setItem('data', JSON.stringify(basket));
    totalCount();
  }
}
function inputListener() {
  shoppingCartCount = document.querySelectorAll('.shopping__count');
  shoppingCartCount.forEach((x) => {
    x.addEventListener('change', (event) => {
      let name = event.target.previousElementSibling.innerText;
      let price = event.target.nextElementSibling.innerText;
      let count = +event.target.value;
      if (basket.some((e) => e.name === name)) {
        let objIndex = basket.findIndex((obj) => obj.name == name);
        basket[objIndex].count = count;
        localStorage.setItem('data', JSON.stringify(basket));
        generateShoppingCart();
        inputListener();
        trashBtn();
        totalCount();
      } else {
        let newItem = {};
        newItem.id = id;
        newItem.name = name;
        newItem.count = count;
        newItem.price = price;
        basket.push(newItem);
        generateShoppingCart();
        inputListener();
        trashBtn();
        localStorage.setItem('data', JSON.stringify(basket));
        totalCount();
      }
    });
  });
}
function trashBtn() {
  shoppingCartDelete = document.querySelectorAll('.shopping__remove img');
  shoppingCartDelete.forEach((x) => {
    x.addEventListener('click', (event) => {
      if (basket.length === 0) {
        shoppingCartMessage.style.display = 'block';
        document.querySelector('.shopping__summary').style.display = 'none';
      } else if (basket.length > 0) {
        shoppingCartMessage.style.display = 'none';
      }
      let name =
        event.target.parentElement.parentElement.firstElementChild
          .nextElementSibling.innerText;
      basket = basket.filter((obj) => obj.name != name);
      localStorage.setItem('data', JSON.stringify(basket));
      event.target.parentElement.parentElement.remove();
      if (basket.length === 0) {
        shoppingCartMessage.style.display = 'block';
        document.querySelector('.shopping__summary').style.display = 'none';
      } else if (basket.length > 0) {
        shoppingCartMessage.style.display = 'none';
      }
      totalCount();
    });
  });
}
//--------------Run
// window.addEventListener('load', (event) => {
//   updateLocalStorage();
//   generateShoppingCart();
//   trashBtn();
//   inputListener();
//   totalCount();
//   btnAdd();
// });
// ----------Closing Shopping cart ---------
closeShopBtn.addEventListener('click', () => {
  popUpWindow.classList.toggle('d-none');
  popUpWrapper.classList.toggle('d-none');
  body.classList.remove('stop-scroll');
});
popUpWrapper.addEventListener('click', () => {
  popUpWindow.classList.toggle('d-none');
  popUpWrapper.classList.toggle('d-none');
  body.classList.remove('stop-scroll');
});
purchaseIcon.addEventListener('click', () => {
  popUpWindow.classList.remove('d-none');
  popUpWrapper.classList.remove('d-none');
  body.classList.add('stop-scroll');
});
//-----------Purchase Shopping bag icon - total count---------------
let totalCost = document.querySelector('.shopping__total');
function totalCount() {
  let sumCount = basket.reduce((sum, item) => sum + +item.count, 0);
  let sumCost = basket.reduce((sum, item) => sum + +item.count * item.price, 0);
  purchaseIconCount.innerText = sumCount;
  totalCost.innerText = `$` + sumCost.toFixed(2);
  if (sumCount === 0) {
    purchaseIcon.classList.add('d-none');
  } else {
    purchaseIcon.classList.remove('d-none');
  }
}
//-----------Purchase Shopping cart - the total cost---------------
