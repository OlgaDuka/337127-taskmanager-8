import {createElement} from './utils/index.js';

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

    this._element = null;
    this._onEdit = null;
  }

  _onEditButtonClick() {
    return (typeof this._onEdit === `function`) && this._onEdit();
  }

  _getTag() {
    let htmlTag = ``;
    for (let tag of this._tags) {
      htmlTag += `<div class="card__hashtag-name">#${tag}</div>`;
    }
    return htmlTag;
  }

  _getDate(time) {
    return new Date(time).toLocaleString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});
  }

  _getTime(time) {
    return new Date(time).toLocaleString(`en-US`, {hour: `numeric`, minute: `numeric`});
  }

  get element() {
    return this._element;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `<article class="card card--${this._colorType} ${this._isRepeat ? `card--repeat` : ``}">
              <form class="card__form" method="get">
                <div class="card__inner">
                  <div class="card__control">
                    <button type="button" class="card__btn card__btn--edit">edit</button>
                    <button type="button" class="card__btn card__btn--archive ${(this._isDone === true) ? `` : `card__btn--disabled`}">archive</button>
                    <button type="button" class="card__btn card__btn--favorites ${(this._isFavorite === true) ? `` : `card__btn--disabled`}">favorites</button>
                  </div>
                  <div class="card__color-bar">
                    <svg width="100%" height="10">
                      <use xlink:href="#wave"></use>
                    </svg>
                  </div>
                  <div class="card__textarea-wrap">
                    <label>
                      <textarea class="card__text" placeholder="Start typing your text here..." name="text">${this._title}</textarea>
                    </label>
                  </div>
                  <div class="card__settings">
                    <div>
                      <div class="card__dates">${this._getDate(this._dueDate)}</div>
                      <div class="card__dates">${this._getTime(this._dueDate)}</div>
                      <div class="card__details">
                        <div class="card__hashtag">
                          <div class="card__hashtag-list">
                            ${this._getTag()}
                          </div>
                        </div>
                      </div>
                    </div>
                    <label class="card__img-wrap">
                      <input type="file" class="card__img-input visually-hidden" name="img"/>
                      <img src="${this._picture}" alt="task picture" class="card__img"/>
                    </label>
                  </div>
                </div>
              </form>
            </article>`.trim();
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
