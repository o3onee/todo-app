/** @format */

import { subject } from '../app.js';

export function saveLocalStorage() {
  const data = subject.getTodos();
  localStorage.setItem('todos', JSON.stringify(data));
}
