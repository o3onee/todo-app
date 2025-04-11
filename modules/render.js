import { checkButton } from './checkButton.js';
import { elemCreate } from './elemCreate.js';

export function render(data) {
  output.innerHTML = '';
  data.forEach((element, index) => {
    const checkbox = checkButton(element.id, element.done);
    const li = elemCreate('li');
    li.innerHTML = `${element.name} , ${index} , ${element.done}`;
    li.appendChild(checkbox);
    output.appendChild(li);
  });
}
