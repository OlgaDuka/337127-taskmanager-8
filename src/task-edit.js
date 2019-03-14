import Component from './component.js';
import flatpickr from 'flatpickr';
import {COLOR_TASKS} from './utils/index.js';

export default class TaskEdit extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._picture = data.picture;
    this._repeatingDays = data.repeatingDays;
    this._tags = data.tags;
    this._colorType = data.colorType;
    this._isFavorite = data.isFavorite;
    this._isDone = data.isDone;

    this._state = {
      isDate: false,
      isRepeated: this._isRepeated()
    };

    this._onSubmit = null;
    this._onDelete = null;
    this._onKeyEsc = null;

    this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
    this._onDeleteButtonClick = this._onDeleteButtonClick.bind(this);
    this._onDeleteHashTag = this._onDeleteHashTag.bind(this);
    this._onKeydownEsc = this._onKeydownEsc.bind(this);
    this._onChangeDate = this._onChangeDate.bind(this);
    this._onChangeRepeated = this._onChangeRepeated.bind(this);
  }

  _onChangeDate() {
    this._state.isDate = !this._state.isDate;
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _onChangeColor() {
    this._colorType = !this._colorType;
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _onDeleteHashTag(evt) {
    evt.currentTarget.parentElement.parentElement.removeChild(evt.currentTarget.parentElement);
    //  this._tags.delete();
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _onChangeRepeated() {
    this._state.isRepeated = !this._state.isRepeated;
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _partialUpdate() {
    this._element.innerHTML = this.template;
  }

  _isRepeated() {
    const arr = [];
    arr[0] = this._repeatingDays[`mo`];
    arr[1] = this._repeatingDays[`tu`];
    arr[2] = this._repeatingDays[`we`];
    arr[3] = this._repeatingDays[`th`];
    arr[4] = this._repeatingDays[`fr`];
    arr[5] = this._repeatingDays[`sa`];
    arr[6] = this._repeatingDays[`su`];
    //  for (let prop in this._repeatingDays) {
    //    if (this._repeatingDays.hasOwnProperty(prop)) {
    //      arr.push(this._repeatingDays[prop]);
    //    }
    //  }
    const flag = arr.some((elem) => elem === true);
    return flag;
  }

  _processForm(formData) {
    const entry = {
      title: ``,
      colorType: ``,
      tags: new Set(),
      dueDate: new Date(),
      repeatingDays: {
        'mo': false,
        'tu': false,
        'we': false,
        'th': false,
        'fr': false,
        'sa': false,
        'su': false
      }
    };

    const taskEditMapper = TaskEdit.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      if (taskEditMapper[property]) {
        taskEditMapper[property](value);
      }
    }
    return entry;
  }

  _onSubmitButtonClick(evt) {
    evt.preventDefault();

    const formData = new FormData(this._element.querySelector(`.card__form`));
    const newData = this._processForm(formData);
    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }
    this.update(newData);
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

  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__date-deadline-toggle`)
      .addEventListener(`click`, this._onChangeDate);
    this._element.querySelector(`.card__repeat-toggle`)
      .addEventListener(`click`, this._onChangeRepeated);
    this._element.querySelector(`.card__delete`)
        .addEventListener(`click`, this._onDeleteButtonClick);

    const hashtags = this._element.querySelectorAll(`.card__hashtag-delete`);
    [].forEach.call(hashtags, (element) => {
      element.addEventListener(`click`, this._onDeleteHashTag);
    });

    if (this._state.isDate) {
      flatpickr(`.card__date`, {altInput: true, altFormat: `j F`, dateFormat: `j F`});
      flatpickr(`.card__time`, {enableTime: true, noCalendar: true, altInput: true, altFormat: `h:i K`, dateFormat: `h:i K`});
    }

    document.addEventListener(`keydown`, this._onKeydownEsc);
  }

  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`submit`, this._onSubmitButtonClick);
    this._element.querySelector(`.card__date-deadline-toggle`)
      .removeEventListener(`click`, this._onChangeDate);
    this._element.querySelector(`.card__repeat-toggle`)
      .removeEventListener(`click`, this._onChangeRepeated);
    this._element.querySelector(`.card__delete`)
      .removeEventListener(`click`, this._onDeleteButtonClick);

    const hashtags = this._element.querySelectorAll(`.card__hashtag-delete`);
    [].forEach.call(hashtags, (element) => {
      element.removeEventListener(`click`, this._onDeleteHashTag);
    });

    document.removeEventListener(`keydown`, this._onKeydownEsc);
  }

  update(data) {
    this._title = data.title;
    this._tags = data.tags;
    this._colorType = data.colorType;
    this._repeatingDays = data.repeatingDays;
    this._dueDate = data.dueDate;
  }

  static createMapper(target) {
    return {
      text: (value) => {
        target.title = value;
      },
      date: (value) => {
        target.dueDate = value;
      },
      time: (value) => {
        target.dueDate = value;
      },
      repeat: (value) => {
        target.repeatingDays[value] = true;
      },
      hashtag: (value) => {
        target.tags.add(value);
      },
      hashtaginput: (value) => {
        if (value !== ``) {
          target.tags.add(value);
        }
      },
      color: (value) => {
        target.colorType = value;
      },
    };
  }

  _getTag() {
    return [...this._tags].map((elem) => {
      return `<span class="card__hashtag-inner">
                <input type="hidden" name="hashtag" value="${elem}" class="card__hashtag-hidden-input">
                <button type="button" class="card__hashtag-name">
                  #${elem}
                </button>
                <button type="button" class="card__hashtag-delete">
                  delete
                </button>
              </span>`.trim();
    }).join(``);
  }

  _getColor() {
    return COLOR_TASKS.map((elem, index) => {
      return `<input type="radio"
        id="color-${elem}-${index + 1}"
        class="card__color-input card__color-input--${elem} visually-hidden"
        name="color"
        value="${elem}"
        ${(this._colorType === elem) ? `checked` : ``}/>
      <label for="color-${elem}-${index + 1}" class="card__color card__color--${elem}">${elem}</label>`.trim();
    }).join(``);
  }

  _getRepeatDays() {
    return Object.entries(this._repeatingDays).map(([key, value], index) => {
      return `<input class="visually-hidden card__repeat-day-input"
        type="checkbox" id="repeat-${key}-${index + 1}" name="repeat"
        value="${key}"
        ${value ? `checked` : ``}/>
      <label class="card__repeat-day" for="repeat-${key}-${index + 1}">${key}</label>`.trim();
    }).join(``);
  }

  get template() {
    return `<article class="card card--edit card--${this._colorType}  ${this._isRepeated() ? `card--repeat` : ``}">
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
                          date:
                          <span class="card__date-status">
                            ${this._state.isDate ? `yes` : `no`}
                          </span>
                        </button>

                        <fieldset class="card__date-deadline" ${!this._state.isDate && `disabled`}>
                          <label class="card__input-deadline-wrap">
                            <input class="card__date" type="text" placeholder="${this.getDate(this._dueDate)}" name="date" value="${this.getDate(this._dueDate)}"/>
                          </label>
                          <label class="card__input-deadline-wrap">
                            <input class="card__time" type="text" placeholder="${this.getTime(this._dueDate)}" name="time" value="${this.getTime(this._dueDate)}"/>
                          </label>
                        </fieldset>

                        <button class="card__repeat-toggle" type="button">
                          repeat:<span class="card__repeat-status">${(this._isRepeated() === true) ? `yes` : `no`}</span>
                        </button>
                        <fieldset class="card__repeat-days" ${(this._isRepeated() === true) ? `` : `disabled`}>
                          <div class="card__repeat-days-inner">
                            ${this._getRepeatDays()}
                          </div>
                        </fieldset>

                      </div>
                      <div class="card__hashtag">
                        <div class="card__hashtag-list">
                          ${this._getTag()}
                        </div>
                        <label>
                          <input type="text" class="card__hashtag-input" name="hashtaginput" placeholder="Type new hashtag here"/>
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
            </article>`;
  }
}
