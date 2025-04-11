import { elemCreate } from './index.js';
import { subject } from '../app.js';

export function checkButton(id, done, index) {
  const checkbox = elemCreate('input');
  checkbox.type = 'checkbox';
  checkbox.id = index;
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
