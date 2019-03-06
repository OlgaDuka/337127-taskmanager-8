import {NumConst, NAME_FILTERS} from './utils/index.js';
import {Task} from './task.js';
import {renderFilters, sectionFilter} from './create-filter.js';

const boardTasks = document.querySelector(`.board__tasks`);

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

const renderTasks = (dist, amount) => {
  for (let i = 0; i < amount; i += 1) {
    let task = new Task();
    dist.insertAdjacentHTML(`beforeend`, task.template);
    // task.render(); - как заставить эту функцию работать?
    // dist.innerHTML = task.render(); - не понимаю пока.
  }
};

renderFilters(NAME_FILTERS);
renderTasks(boardTasks, NumConst.START_TASKS);

sectionFilter.onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numTasks = toggleFilter(event);
    boardTasks.innerHTML = ``;
    numTasks = numTasks < NumConst.MAX_TASKS_IN_FILTER ? numTasks : NumConst.MAX_TASKS_IN_FILTER;
    renderTasks(boardTasks, numTasks);
  }
};
