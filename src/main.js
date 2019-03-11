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

const createData = (amount) => {
  const array = new Array(amount);
  for (let i = 0; i < amount; i += 1) {
    array[i] = createNewTask();
  }
  return array;
};

const renderTasks = (dist, arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    let oneTask = new Task(arr[i]);
    let oneEditTask = new TaskEdit(arr[i]);
    dist.appendChild(oneTask.render());
    oneTask.onEdit = () => {
      let taskOpen = dist.querySelector(`.card--edit`);
      if (!taskOpen) {
        oneEditTask.render();
        dist.replaceChild(oneEditTask.element, oneTask.element);
        oneTask.unrender();
      }
    };
    oneEditTask.onSubmit = () => {
      oneTask.render();
      dist.replaceChild(oneTask.element, oneEditTask.element);
      oneEditTask.unrender();
    };
    oneEditTask.onDelete = () => {
      oneEditTask.unrender();
      arr.splice(i, 1);
    };
    oneEditTask.onKeyEsc = () => {
      oneTask.render();
      dist.replaceChild(oneTask.element, oneEditTask.element);
      oneEditTask.unrender();
    };
  }
};

renderFilters(NAME_FILTERS);
const arrTasks = createData(NumConst.START_TASKS);
renderTasks(boardTasks, arrTasks);

sectionFilter.onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numTasks = toggleFilter(event);
    boardTasks.innerHTML = ``;
    numTasks = numTasks < NumConst.MAX_TASKS_IN_FILTER ? numTasks : NumConst.MAX_TASKS_IN_FILTER;
    const arr = createData(numTasks);
    renderTasks(boardTasks, arr);
  }
};
