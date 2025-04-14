/** @format */

export function loadLocalStorage() {
  const saved = localStorage.getItem('todos');
  if (saved) {
    return JSON.parse(saved);
  } else {
    return [];
  }
}
