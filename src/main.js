import {NumConst, NAME_FILTERS} from './utils/index.js';
import {createTask} from './data.js';
import {getHtmlTask} from './create-task.js';
import {getHtmlFilter} from './create-filter.js';

const sectionFilter = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

const renderFilters = (arrFilters) => {
  arrFilters.forEach(function (element) {
    sectionFilter.insertAdjacentHTML(`beforeend`, getHtmlFilter(element));
  });
};

const renderTasks = (num) => {
  const arrTasks = [];
  for (let i = 0; i < num; i += 1) {
    arrTasks[i] = createTask();
    boardTasks.insertAdjacentHTML(`beforeend`, getHtmlTask(arrTasks[i]));
  }
};

renderFilters(NAME_FILTERS);
renderTasks(NumConst.START_TASKS);

sectionFilter.onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numTasks = toggleFilter(event);
    boardTasks.innerHTML = ``;
    numTasks = numTasks < NumConst.MAX_TASKS_IN_FILTER ? numTasks : NumConst.MAX_TASKS_IN_FILTER;
    renderTasks(numTasks);
  }
};
