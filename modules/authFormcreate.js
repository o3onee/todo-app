/** @format */

export function authFormcreate() {
  const authDiv = document.getElementById('authorization');

  authDiv.innerHTML = `
    <h1 id="title">Вход</h1>
    <form id="loginForm">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" required>
        <label for="password">Пароль:</label>
        <input type="password" id="password" required>
        <button type="submit">Войти</button>
    </form>
    <button id="logoutButton" style="display: none;">Выйти</button>
    <button id="hide">Скрыть / отобразить</button>
    <div id="message"></div>
    `;

  return authDiv;
}
