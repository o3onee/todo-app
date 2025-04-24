/** @format */

import { subject } from '../app.js';
import { checkButton } from './checkButton.js';
import { elemCreate } from './elemCreate.js';

export function render(data) {
  output.innerHTML = '';
  // console.log(subject.currentUser);
  data.forEach((element, index) => {
    // console.log(element.user);
    if (subject.currentUser == element.user) {
      const checkbox = checkButton(element.id, element.done);
      const li = elemCreate('li');
      li.innerHTML = `${element.name} , ${index} , ${element.done}`;
      li.appendChild(checkbox);
      output.appendChild(li);
    }
  });
}
