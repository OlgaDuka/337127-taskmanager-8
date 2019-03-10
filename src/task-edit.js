import {Component} from './component.js';
import {getRandomBoolean, COLOR_TASKS, REPEATING_DAYS} from './utils/index.js';

class TaskEdit extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._picture = data.picture;
    this._isRepeat = data.isRepeat;
    this._tags = data.tags;
    this._colorType = data.colorType;
    this._isFavorite = data.isFavorite;
    this._isDone = data.isDone;

    this._onSubmit = null;
    this._onDelete = null;
    this._onKeyEsc = null;

    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
    this._onKeydownEsc = this._onKeydownEsc.bind(this);
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

  _onDeleteButtonClick() {
    if (typeof this._onDelete === `function`) {
      this._onDelete();
    }
  }

  set onDelete(fn) {
    this._onDelete = fn;
  }

  _onKeydownEsc(evt) {
    if ((typeof this._onKeyEsc === `function`) && (evt.keyCode === 27)) {
      this._onKeyEsc();
    }
  }

  set onKeyEsc(fn) {
    this._onKeyEsc = fn;
  }


  _getTag() {
    let htmlTag = ``;
    for (let tag of this._tags) {
      htmlTag += `<div class="card__hashtag-name">#${tag}</div>`;
    }
    return htmlTag;
  }

  _createColor(elem, type) {
    return `<input type="radio" id="color-${elem}-1" class="card__color-input card__color-input--${elem} visually-hidden" name="color" value="${elem}" ${(type === elem) ? `checked` : ``}/>
    <label for="color-${elem}-1" class="card__color card__color--${elem}">${elem}</label>`;
  }

  _getColor() {
    let htmlColor = ``;
    COLOR_TASKS.forEach((elem) => {
      htmlColor += this._createColor(elem, this._colorType);
    });
    return htmlColor;
  }

  _createRepeatDays(elem, randomBoolean) {
    return `<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-${elem}-1" name="repeat" value="${elem}" ${(randomBoolean === true) ? `checked` : ``}/>
    <label class="card__repeat-day" for="repeat-${elem}-1">${elem}</label>`;
  }

  _getRepeat() {
    let htmlRepeat = ``;
    if (this._isRepeat) {
      for (let days of REPEATING_DAYS.keys()) {
        htmlRepeat += this._createRepeatDays(days, getRandomBoolean());
      }
    }
    return htmlRepeat;
  }

  get template() {
    return `<article class="card card--edit card--${this._colorType}  ${this._isRepeat ? `card--repeat` : ``}">
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
                    <div class="card__details">
                      <div class="card__dates">
                        <button class="card__date-deadline-toggle" type="button">
                          date: ${this._getDate(this._dueDate)}<span class="card__date-status">&nbsp;${(this._dueDate <= Date.now()) ? `yes` : `no`}</span>
                        </button>
                        <div class="card__dates">${this._getTime(this._dueDate)}</div>
                        <fieldset class="card__date-deadline" disabled>
                          <label class="card__input-deadline-wrap">
                            <input class="card__date" type="text" placeholder="23 September" name="date"/>
                          </label>
                          <label class="card__input-deadline-wrap">
                            <input class="card__time" type="text" placeholder="11:15 PM" name="time"/>
                          </label>
                        </fieldset>
                        <button class="card__repeat-toggle" type="button">repeat:<span class="card__repeat-status">${(this._isRepeat === true) ? `yes` : `no`}</span></button>
                        <fieldset class="card__repeat-days" ${(this._isRepeat === true) ? `` : `disabled`}>
                          <div class="card__repeat-days-inner">
                            ${this._getRepeat()}
                          </div>
                        </fieldset>
                      </div>
                      <div class="card__hashtag">
                        <div class="card__hashtag-list">
                          ${this._getTag()}
                        </div>
                        <label>
                          <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
                        </label>
                      </div>
                    </div>
                    <label class="card__img-wrap card__img-wrap--empty">
                      <input type="file" class="card__img-input visually-hidden" name="img"/>
                      <img src="${this._picture}" alt="task picture" class="card__img"/>
                    </label>
                    <div class="card__colors-inner">
                      <h3 class="card__colors-title">Color</h3>
                      <div class="card__colors-wrap">
                        ${this._getColor()}
                      </div>
                    </div>
                  </div>
                  <div class="card__status-btns">
                    <button class="card__save" type="submit">save</button>
                    <button class="card__delete" type="button">delete</button>
                  </div>
                </div>
              </form>
            </article>`.trim();
  }

  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__delete`)
        .addEventListener(`click`, this._onDeleteButtonClick);
    document.addEventListener(`keydown`, this._onKeydownEsc);
  }

  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__delete`)
      .removeEventListener(`click`, this._onDeleteButtonClick);
    document.removeEventListener(`keydown`, this._onKeydownEsc);
  }
}

export {TaskEdit};
