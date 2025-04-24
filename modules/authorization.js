/** @format */

// /** @format */

// document
//   .getElementById('loginForm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Проверяем, есть ли уже пользователь с таким именем
//     const storedUser = JSON.parse(localStorage.getItem(username));

//     if (storedUser) {
//       // Если пользователь найден, проверяем пароль
//       if (storedUser.password === password) {
//         document.getElementById('message').innerText =
//           'Добро пожаловать, ' + username + '!';
//         localStorage.setItem('currentUser', username);
//         updateUI(); // Обновляем пользовательский интерфейс
//       } else {
//         document.getElementById('message').innerText = 'Неверный пароль.';
//       }
//     } else {
//       // Запрашиваем подтверждение для создания нового пользователя
//       if (
//         confirm(
//           `Пользователь "${username}" не найден. Желаете зарегистрироваться?`
//         )
//       ) {
//         localStorage.setItem(username, JSON.stringify({ password }));
//         document.getElementById('message').innerText =
//           'Пользователь создан. Добро пожаловать, ' + username + '!';
//         localStorage.setItem('currentUser', username);
//         updateUI(); // Обновляем пользовательский интерфейс
//       } else {
//         document.getElementById('message').innerText = 'Попробуйте еще раз.';
//       }
//     }
//   });

// // Функция для выполнения действий после входа
// function displayUserData() {
//   const currentUser = localStorage.getItem('currentUser');
//   if (currentUser) {
//     const userData = JSON.parse(localStorage.getItem(currentUser));
//     console.log('Данные пользователя:', userData);
//   }
// }

// // Функция для обновления UI
// function updateUI() {
//   const currentUser = localStorage.getItem('currentUser');
//   const title = document.getElementById('title');
//   const logoutButton = document.getElementById('logoutButton');

//   if (currentUser) {
//     title.innerText = 'Вы вошли как ' + currentUser;
//     document.getElementById('loginForm').style.display = 'none';
//     logoutButton.style.display = 'block';
//   } else {
//     title.innerText = 'Вход';
//     document.getElementById('loginForm').style.display = 'block';
//     logoutButton.style.display = 'none';
//   }

//   displayUserData();
// }

// // Обработчик для выхода из системы
// document.getElementById('logoutButton').addEventListener('click', function () {
//   localStorage.removeItem('currentUser');
//   document.getElementById('message').innerText = 'Вы вышли из системы.';
//   updateUI(); // Обновляем пользовательский интерфейс
// });

// // Вызываем функцию при загрузке
// window.onload = updateUI;
