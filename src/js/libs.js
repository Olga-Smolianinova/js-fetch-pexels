import { createClient } from 'pexels';
import refs from './refs';
import template from '../templates/item.hbs';

let key = '563492ad6f9170000100000173d511d149cb45ac97276e613fa4d08a';

const client = createClient(key);
console.log(client);

// refs.gallery.append(img);

// let query = 'lotus';

// получаем 1 объект
// client.photos.random().then(obj => {
//   console.log(obj);
//   img.src = obj.src.original;
// });

// ======================================
// через map выводим несколько объектов
// client.photos
//   .search({ query, per_page: 10 })
//   .then(result => {
//     console.log(result.photos);
//     const images = result.photos.map(el => {
//       const img = document.createElement('img');
//       img.width = '300';
//       img.src = el.src.original;
//       return img;
//     });
//     console.log(images);
//     return images;
//   })
//   .then(images => {
//     return refs.gallery.append(...images);
//     return refs.gallery;
//   });
// ============================
// получаем несколько объектов
// через шаблон вставляем img
client.photos.search({ query, per_page: 10 }).then(result => {
  console.log(result.photos);
  const items = template(result.photos);
  refs.gallery.insertAdjacentHTML('afterbegin', items);
});
