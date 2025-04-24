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
subject.subscribe(saveLocalStorage);
subject.subscribe(render);
subject.subscribe(authFormcreate);

//Создаем форму авторизации
authFormcreate();

// const hideButton = document.getElementById('hide');
// const app = document.getElementById('control');

// hideButton.addEventListener('click', () => {
//   if (app.classList.contains('hidden')) {
//     app.classList.remove('hidden');
//     app.classList.add('block'); // Показываем элемент
//     console.log(app.classList);
//   } else {
//     app.classList.remove('block');
//     app.classList.add('hidden'); // Скрываем элемент
//   }
// });

//Иниципализируем субьект состоянием из Local Storage
window.onload = subject.initialization(loadLocalStorage());

const output = document.getElementById('output');
const input = document.getElementById('input');
const button = document.getElementById('addData');
const doneButton = document.getElementById('doneButton');
const unDoneButton = document.getElementById('unDoneButton');
const allTasks = document.getElementById('all');
const resetButton = document
  .getElementById('reset')
  .addEventListener('click', function () {
    subject.reset();
  });

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
      user: subject.getCurrentUser(),
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
      user: getCurrentUser(),
    });
    input.value = '';
  }
});