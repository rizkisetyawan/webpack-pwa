import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

let restaurantElement = '';
data.restaurants.forEach((resto) => {
  restaurantElement += `
    <article class="post-item">
        <p class="post-item__city">${resto.city}</p>
        <img class="post-item__thumbnail"
            src="${resto.pictureId}"
            alt=${resto.name}>
        <div class="post-item__content">
            <p class="post-item__rate">Rate | <span class="post-item__rate_star">&#9733;</span> ${resto.rating}</p>
            <h3 class="post-item__title">${resto.name}</h3>
            <p class="post-item__description">${resto.description.substr(0, 150)} ...</p>
        </div>
    </article>
    `;
});

document.querySelector('.posts').innerHTML = restaurantElement;
