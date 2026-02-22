const item01 = document.querySelector('#item-01');
const item02 = document.querySelector('#item-02');
const item03 = document.querySelector('#item-03');
const item04 = document.querySelector('#item-04');
const item05 = document.querySelector('#item-05');

const items01 = document.querySelectorAll('.item');

const card01 = document.querySelector('.card');

const paragrafo01 = document.querySelector('p');
paragrafo01.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
paragrafo01.innerHTML += ' <strong>Esse é um texto em negrito.</strong>';
card01.appendChild(paragrafo01);

card01.classList.add('super-border');
card01.classList.remove('super-border');
card01.classList.toggle('super-border');

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.classList.toggle('super-border');
});

Array.from(cards).map((card) => {
    card.classList.toggle('super-border');
});

console.log(item01);
console.log(item02);
console.log(item03);
console.log(item04);
console.log(item05);

console.log(items01);

console.log(item01.innerHTML);
console.log(item01.outerHTML);

console.log(card01.innerHTML);
console.log(card01.outerHTML);