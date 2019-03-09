import {createTaskEdit} from './create-taskedit.js';

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export class TaskEdit {
  constructor(data) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._picture = data.picture;
    this._isRepeat = data.isRepeat;
    this._tags = data.tags;
    this._colorType = data.colorType;

    this._element = null;
    this._onSubmit = null;

    this._state = {
      isEdit: false,
      _isFavorite: data.isFavorite,
      _isDone: data.isDone
    };
  }

  get element() {
    return this._element;
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return createTaskEdit(this);
  }

  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick.bind(this));
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
