const getTag = (ob) => {
  let htmlTag = ``;
  for (let tag of ob._tags) {
    htmlTag += `<div class="card__hashtag-name">#${tag}</div>`;
  }
  return htmlTag;
};

export const createTask = (obTask) => {
  return `<article class="card card--${obTask._colorType} ${obTask._isRepeat ? `card--repeat` : ``}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">edit</button>
                  <button type="button" class="card__btn card__btn--archive ${(obTask._state.isDone === true) ? `` : `card__btn--disabled`}">archive</button>
                  <button type="button" class="card__btn card__btn--favorites ${(obTask._state.isFavorite === true) ? `` : `card__btn--disabled`}">favorites</button>
                </div>
                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>
                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text">${obTask._title}</textarea>
                  </label>
                </div>
                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        ${getTag(obTask)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </article>`.trim();
};
