/** @format */
import { subject } from './index.js';
export function authFormcreate() {
  const authDiv = document.getElementById('authorization');
  authDiv.innerHTML = `
  <h1 id="title">Вход</h1>
  <form id="loginForm" class=''>
  <label for="username">Имя пользователя:</label>
  <input type="text" id="username" required>
  <label for="password">Пароль:</label>
  <input type="password" id="password" required>
  <button type="submit">Войти</button>
  </form>
  <button id="logout">Выйти</button>
  <div id="message"></div>
  `;

  const app = document.getElementById('control');
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logout');
  console.log(logoutBtn);

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

  //Обработчик формы регистрации
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = document.getElementById('username').value;

    //
    if (subject.users.includes(userName)) {
      subject.setCurrentUser(userName);
    } else {
      confirm(
        `Пользователь "${userName}" не найден. Желаете зарегистрироваться?`
      );
    }
    subject.setCurrentUser(userName);

    //Отображаем список дел после авторизации
    if (subject.currentUser) {
      title.innerText = 'Вы вошли как ' + userName;
      app.classList.remove('hidden');
      app.classList.add('block');
      // logoutButton.style.display = 'block';
    }
  });
  // return authDiv;
}
