import {NumConst, NAME_FILTERS} from './utils/index.js';
import {createNewTask} from './data.js';
import {Task} from './task.js';
import {TaskEdit} from './task-edit.js';
import {renderFilters, sectionFilter} from './create-filter.js';

const boardTasks = document.querySelector(`.board__tasks`);

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

const renderTasks = (dist, amount) => {
  const tasks = new Array(amount);
  for (let i = 0; i < amount; i += 1) {
    tasks[i] = createNewTask();
    let oneTask = new Task(tasks[i]);
    let oneEditTask = new TaskEdit(tasks[i]);
    dist.appendChild(oneTask.render());
    oneTask.onEdit = () => {
      oneEditTask.render();
      dist.replaceChild(oneEditTask.element, oneTask.element);
      oneTask.unrender();
    };
    oneEditTask.onSubmit = () => {
      oneTask.render();
      dist.replaceChild(oneTask.element, oneEditTask.element);
      oneEditTask.unrender();
    };
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
