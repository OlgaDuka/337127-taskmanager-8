import {getRandomBoolean, getRandomIndexArr, getRandomDate, getArrFromSet, NumConst, TITLE_TASKS, COLOR_TASKS, TAGS} from './utils/index.js';
import {createTask} from './create-task.js';

export class TaskEdit {
  constructor() {
    this.title = getRandomIndexArr(TITLE_TASKS);
    this.dueDate = getRandomDate();
    this.picture = `//picsum.photos/100/100?r=${Math.random()}`;
    this.isRepeat = getRandomBoolean();
    this.tags = getArrFromSet(TAGS, NumConst.DEF_NUM_TAGS);
    this.colorType = getRandomIndexArr(COLOR_TASKS);
    this.isFavorite = getRandomBoolean();
    this.isDone = getRandomBoolean();
    this._element = document.createElement(`div`);
  }
  get template() {
    return createTask(this);
  }
  render() {
    return this._element.insertAdjacentHTML(`beforeend`, this.template);
  }
  unrender() {
    this._element = null;
  }
}
