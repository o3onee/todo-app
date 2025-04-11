import { elemCreate, createSubject, render } from './modules/index.js'
export { subject }

// Создаем субъекта
const subject = createSubject();

// // Создаем наблюдателей
// const observer1 = (data) => {
//   console.log('Наблюдатель 1: Новые данные', data);
// };
subject.subscribe(render);

const output = document.getElementById('output');
const input = document.getElementById('input');
const button = document.getElementById('test');
const doneButton = document.getElementById('doneButton');
const unDoneButton = document.getElementById('unDoneButton');
const allTasks = document.getElementById('all');


doneButton.addEventListener('click', function () {
  subject.filterTasks(true);
}) 

unDoneButton.addEventListener('click', function () {
  subject.filterTasks(false);
}) 
allTasks.addEventListener('click', function () {
  subject.allTasks();
}) 



 input.addEventListener('keydown', function (event) {
   if (event.key === 'Enter') {
     subject.addData({
       name: event.target.value,
       id: Date.now(),
     done: false,}) 
     event.target.value=''
   }
 })

button.addEventListener('click', function () {
  subject.addData({
    name: input.value,
    id: Date.now(),
    done: false,
  });
  input.value = '';
});



// subject.addData({
//     name: '1',
//     b: '2',
//     c: '3',
// });
  
// subject.modifyData(0, 'b', 256)
// subject.removeItem(0)
// subject.modifyData(0,'a',5)
// subject.modifyData(0,'c',3)





