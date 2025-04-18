/** @format */

import {
  elemCreate,
  createSubject,
  render,
  loadLocalStorage,
  saveLocalStorage,
  authFormcreate,
} from './modules/index.js';
export { subject };

// Создаем субъект
const subject = createSubject();

// // Создаем наблюдателей
subject.subscribe(render);
subject.subscribe(saveLocalStorage);
// const observer1 = (data) => {
//   console.log('Наблюдатель 1: Новые данные', data);
// };
authFormcreate();
const hideButton = document.getElementById('hide');
const app = document.getElementById('control');

hideButton.addEventListener('click', () => {
  if (app.classList.contains('hidden')) {
    // app.style.display = 'block'; // Показываем элемент
    app.classList.remove('hidden');
    app.classList.add('block');
    console.log(app.classList);
  } else {
    // app.style.display = 'none'; // Скрываем элемент
    app.classList.remove('block');
    app.classList.add('hidden');
  }
});



//Иниципализируем субьект состоянием из Local Storage
window.onload = subject.initialization(loadLocalStorage());

const output = document.getElementById('output');
const input = document.getElementById('input');
const button = document.getElementById('addData');
const doneButton = document.getElementById('doneButton');
const unDoneButton = document.getElementById('unDoneButton');
const allTasks = document.getElementById('all');

doneButton.addEventListener('click', function () {
  subject.filterTasks(true);
});

unDoneButton.addEventListener('click', function () {
  subject.filterTasks(false);
});
allTasks.addEventListener('click', function () {
  subject.allTasks();
});

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && input.value.trim() !== '') {
    subject.addData({
      name: event.target.value,
      id: Date.now(),
      done: false,
    });
    event.target.value = '';
  }
});

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    subject.addData({
      name: input.value,
      id: Date.now(),
      done: false,
    });
    input.value = '';
  }
});