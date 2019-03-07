import {createTask} from './create-task.js';

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export class Task {
  constructor(data) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._picture = data.picture;
    this._isRepeat = data.isRepeat;
    this._tags = data.tags;
    this._colorType = data.colorType;
    this._isFavorite = data.isFavorite;
    this._isDone = data.isDone;

    this._state = {
      // состояние компонента
    };
    this._element = null;
    this._onEdit = null;
  }

  _onEditButtonClick() {
    return (typeof this._onEdit === `function`) && this._onEdit();
  }

  get element() {
    return this._element;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return createTask(this);
  }

  bind() {
    this._element.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this._onEditButtonClick.bind(this));
  }

  unbind() {
    this._onEdit = null;
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
