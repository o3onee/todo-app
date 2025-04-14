/** @format */

import {
  elemCreate,
  createSubject,
  render,
  loadLocalStorage,
  saveLocalStorage,
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

//Иниципализируем субьект состоянием из Local Storage
window.onload = subject.initialization(loadLocalStorage());

const output = document.getElementById('output');
const input = document.getElementById('input');
const button = document.getElementById('test');
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
  if (event.key === 'Enter') {
    subject.addData({
      name: event.target.value,
      id: Date.now(),
      done: false,
    });
    event.target.value = '';
  }
});

button.addEventListener('click', function () {
  subject.addData({
    name: input.value,
    id: Date.now(),
    done: false,
  });
  input.value = '';
});