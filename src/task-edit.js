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
    this._isFavorite = data.isFavorite;
    this._isDone = data.isDone;

    this._state = {
      // сщстояние компонента
    };
    this._element = null;
    this._onSubmit = null;
  }

  get element() {
    return this._element;
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();
    return (typeof this._onSubmit === `function`) && this._onSubmit();
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
    this._onSubmit = null;
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
