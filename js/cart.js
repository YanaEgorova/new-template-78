import { products } from './data/products.js';
import { item, prodItem } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const prodList = document.querySelector('.js_prod__list');

products.forEach(product => {
    productsList.insertAdjacentHTML('beforeend',item(product));
    prodList.insertAdjacentHTML('beforeend',prodItem(product));
})
