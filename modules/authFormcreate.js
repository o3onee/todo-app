/** @format */
import { subject } from './index.js';
export function authFormcreate() {
  const authDiv = document.getElementById('authorization');
  authDiv.innerHTML = `
  <form id="loginForm" class='pt-7'>
  <label for="username">Имя пользователя:</label>
  <input type="text" id="username" required>
  <label for="password">Пароль:</label>
  <input type="password" id="password" required>
  <button type="submit">Войти</button>
  </form>
  <div id="message" class=''></div>
  <button id="logout">Выйти</button>
  `;

  const app = document.getElementById('control');
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logout');
  const message = document.getElementById('message');

  //Обработчик формы регистрации
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Проверяем существует ли данный пользователь
    console.log(subject.isUser(userName));

    //Если пользователь уже создан, устанавливаем его в качестве текущего
    if (userName && subject.users.includes(userName)) {
      subject.setCurrentUser(userName);
    } else {
      confirm(
        `Пользователь "${userName}" не найден. Добавляю нового пользователя`
      );
      if (true) {
        subject.addNewUser(userName, password);
        subject.setCurrentUser(userName, password);
      }
    }

    //Отображаем список дел после авторизации
    if (subject.currentUser) {
      app.classList.remove('hidden');
      app.classList.add('block');
    }
  });

  // Строка состояния
  if (subject.currentUser) {
    message.innerText = `Вы вошли как ${subject.currentUser}`;
  } else {
    message.innerText = 'Вы не вошли в систему';
  }

  //Кнопка выйти
  logoutBtn.addEventListener('click', function () {
    subject.setCurrentUser(null);
    app.classList.remove('block');
    app.classList.add('hidden');
  });

  //Если текущий пользователь пустой, то отображаем форму регистрации
  if (!subject.currentUser) {
    loginForm.classList.remove('hidden');
    loginForm.classList.add('block');
    logoutBtn.classList.add('hidden');
  } else {
    loginForm.classList.remove('block');
    loginForm.classList.add('hidden');
    logoutBtn.classList.add('block');
  }
}
