import {COLOR_TASKS} from './utils/index.js';

const REPEATING_DAYS = new Map([
  [`mo`, false],
  [`tu`, false],
  [`we`, false],
  [`th`, false],
  [`fr`, false],
  [`sa`, false],
  [`su`, false],
]);

const createRepeatDays = (elem, randomBoolean) => {
  return `<input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-${elem}-1" name="repeat" value="${elem}" ${(randomBoolean === true) ? `checked` : ``}/>
  <label class="card__repeat-day" for="repeat-${elem}-1">${elem}</label>`;
};

const getRepeat = (ob) => {
  let htmlRepeat = ``;
  if (ob.isRepeat) {
    for (let days of REPEATING_DAYS.keys()) {
      htmlRepeat += createRepeatDays(days, Boolean(Math.round(Math.random())));
    }
  }
  return htmlRepeat;
};

const createColor = (elem, type) => {
  return `<input type="radio" id="color-${elem}-1" class="card__color-input card__color-input--${elem} visually-hidden" name="color" value="${elem}" ${(type === elem) ? `checked` : ``}/>
  <label for="color-${elem}-1" class="card__color card__color--${elem}">${elem}</label>`;
};

const getColor = (ob) => {
  let htmlColor = ``;
  COLOR_TASKS.forEach((elem) => {
    htmlColor += createColor(elem, ob.colorType);
  });
  return htmlColor;
};

const getTag = (ob) => {
  let htmlTag = ``;
  for (let tag of ob.tags) {
    htmlTag += `<div class="card__hashtag-name">#${tag}</div>`;
  }
  return htmlTag;
};

export const createTask = (obTask) => {
  return `<article class="card card--edit card--${obTask.colorType}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">edit</button>
                  <button type="button" class="card__btn card__btn--archive">archive</button>
                  <button type="button" class="card__btn card__btn--favorites ${(obTask.isFavorite === true) ? `` : `card__btn--disabled`}">favorites</button>
                </div>
                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>
                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text">${obTask.title}</textarea>
                  </label>
                </div>
                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">date: ${obTask.dueDate.toLocaleString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`})}<span class="card__date-status">&nbsp;${(obTask.dueDate <= Date.now()) ? `yes` : `no`}</span></button>
                      <fieldset class="card__date-deadline" disabled>
                        <label class="card__input-deadline-wrap">
                          <input class="card__date" type="text" placeholder="23 September" name="date"/>
                        </label>
                        <label class="card__input-deadline-wrap">
                          <input class="card__time" type="text" placeholder="11:15 PM" name="time"/>
                        </label>
                      </fieldset>
                      <button class="card__repeat-toggle" type="button">repeat:<span class="card__repeat-status">${(obTask.isRepeat === true) ? `yes` : `no`}</span></button>
                      <fieldset class="card__repeat-days" ${(obTask.isRepeat === true) ? `` : `disabled`}>
                        <div class="card__repeat-days-inner">
                          ${getRepeat(obTask)}
                        </div>
                      </fieldset>
                    </div>
                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${getTag(obTask)}
                      </div>
                      <label>
                        <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
                      </label>
                    </div>
                  </div>
                  <label class="card__img-wrap card__img-wrap--empty">
                    <input type="file" class="card__img-input visually-hidden" name="img"/>
                    <img src="${obTask.picture}" alt="task picture" class="card__img"/>
                  </label>
                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      ${getColor(obTask)}
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
};
