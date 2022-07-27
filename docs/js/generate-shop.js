'use strict';
const shop = document.querySelector('#shop');
const interior = document.querySelector('#tab-1');
const wreaths = document.querySelector('#tab-2');
const christmasBalls = document.querySelector('#tab-3');
const stockings = document.querySelector('#tab-4');
const shopItemsData = [
  {
    id: 1,
    section: 'shop',
    name: 'Citrus Wreath',
    price: 89.0,
    img: './img/1.png'
  },
  {
    id: 2,
    section: 'shop',
    name: 'Snowman',
    price: 10.0,
    img: './img/2.png'
  },
  {
    id: 3,
    section: 'shop',
    name: 'Wreath With Pine Cons',
    price: 98.0,
    img: './img/3.png'
  },
  {
    id: 4,
    section: 'shop',
    name: 'White Deer',
    price: 12.0,
    img: './img/4.png'
  },
  {
    id: 5,
    section: 'tab-1',
    name: 'Red Boot',
    price: 18.0,
    img: './img/5.png'
  },
  {
    id: 6,
    section: 'tab-1',
    name: 'White Deer',
    price: 12.0,
    img: './img/6.png'
  },
  {
    id: 7,
    section: 'tab-1',
    name: 'Gift Box',
    price: 12.0,
    img: './img/7.png'
  },
  {
    id: 8,
    section: 'tab-1',
    name: 'Snowman',
    price: 10.0,
    img: './img/8.png'
  },
  {
    id: 9,
    section: 'tab-2',
    name: 'Elegant Wreath',
    price: 78.0,
    img: './img/9.png'
  },
  {
    id: 10,
    section: 'tab-2',
    name: 'Wreath With Pine Cons',
    price: 98.0,
    img: './img/10.png'
  },
  {
    id: 11,
    section: 'tab-2',
    name: 'Cinnamon Wreath',
    price: 95.0,
    img: './img/11.png'
  },
  {
    id: 12,
    section: 'tab-2',
    name: 'Citrus Wreath',
    price: 89.0,
    img: './img/12.png'
  },
  {
    id: 13,
    section: 'tab-3',
    name: 'Red Christmas Balls',
    price: 20.0,
    img: './img/13.png'
  },
  {
    id: 14,
    section: 'tab-3',
    name: 'Silver Christmas Balls',
    price: 10.0,
    img: './img/14.png'
  },
  {
    id: 15,
    section: 'tab-3',
    name: 'Green Christmas Balls',
    price: 10.0,
    img: './img/15.png'
  },
  {
    id: 16,
    section: 'tab-3',
    name: 'Gold Christmas Balls',
    price: 10.0,
    img: './img/16.png'
  },
  {
    id: 17,
    section: 'tab-4',
    name: 'Santa Claus Stocking',
    price: 15.0,
    img: './img/17.png'
  },
  {
    id: 18,
    section: 'tab-4',
    name: 'Christmas Red Stocking',
    price: 22.0,
    img: './img/18.png'
  },
  {
    id: 19,
    section: 'tab-4',
    name: 'Stocking With Pompons',
    price: 22.0,
    img: './img/19.png'
  },
  {
    id: 20,
    section: 'tab-4',
    name: 'Stocking With Balls',
    price: 18.0,
    img: './img/20.png'
  }
];

let generateShop = (section) => {
  return (section.innerHTML = shopItemsData
    .map((product) => {
      if (section.id == product.section) {
        return `
              <div class="product__card">
              <img class="product__img" src="${product.img}" alt="product-photo" />
              <h3 class="product__name">${product.name}</h3>
              <p class="product__price">$${product.price},00</p>
              <button class="product__btn" type="button">Add to cart</button>
            </div>
`;
      }
    })
    .join(''));
};
generateShop(shop);
generateShop(interior);
generateShop(wreaths);
generateShop(christmasBalls);
generateShop(stockings);

export default generateShop;
