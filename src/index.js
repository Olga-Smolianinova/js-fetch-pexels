import './styles.css';

// import './js/libs.js';

import fetchObject from './js/fetch';

import x from './js/refs.js';
// console.log(x.form);

// деструктуризируем ключи из './js/refs.js' и получаем к ним доступ. Теперь к ним можно обращаться сразу напрямую как к переменным, а не через свойство объекта
const { form, searchBtn, gallery } = x;
console.log(form, searchBtn, gallery);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.query.value);
  const inputValue = e.target.elements.query.value;
  fetchObject.getFetch(inputValue, gallery);
});

// fetchObject.getFetch();
