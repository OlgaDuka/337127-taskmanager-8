import {NumConst, NAME_FILTERS} from './utils/index.js';
import {Task} from './task.js';
import {createFilter} from './create-filter.js';

const sectionFilter = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

const renderFilters = (arrFilters) => {
  arrFilters.forEach(function (element) {
    sectionFilter.insertAdjacentHTML(`beforeend`, createFilter(element));
  });
};

const renderTasks = (dist, amount) => {
  for (let i = 0; i < amount; i += 1) {
    let task = new Task();
    dist.insertAdjacentHTML(`beforeend`, task.template);
    // dist.innerHTML = task.render(); - почему так не работает???
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
