/** @format */

import { elemCreate, subject } from './index.js';

export function checkButton(id, done) {
  const checkbox = elemCreate('input');
  checkbox.type = 'checkbox';
  checkbox.id = id;
  if (done) {
    checkbox.checked = 'checked';
  } else {
    checkbox.checked = '';
  }

  checkbox.addEventListener('change', (even) => {
    if (even.target.checked) {
      subject.modifyData(id, 'done', true);
    } else {
      subject.modifyData(id, 'done', false);
    }
  });
  return checkbox;
}
