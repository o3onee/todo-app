/** @format */

import { subject } from './index.js';

export function saveLocalStorage() {
  const data = subject.getTodos();
  localStorage.setItem('todos', JSON.stringify(data));
}
