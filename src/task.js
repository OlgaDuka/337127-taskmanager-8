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

    this._state = {
      isEdit: false,
      _isFavorite: data.isFavorite,
      _isDone: data.isDone
    };

    this._element = null;
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
    this._element.querySelector(`.card__btn--edit`)
      .removeEventListener(`click`, this._onEditButtonClick.bind(this));
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
