import {NumConst, getRandomInt} from './utils/index.js';

export const sectionFilter = document.querySelector(`.main__filter`);

const getHtmlFilter = (nameFilter) => {
  const num = getRandomInt(NumConst.MAX_TASCS_IN_FILTER);
  return `<input
    type="radio"
    id="filter__${nameFilter}"
    class="filter__input visually-hidden"
    name="filter"
    ${nameFilter === `all` ? `checked` : ``}
    ${num === 0 ? `disabled` : ``}
  />
  <label for="filter__${nameFilter}" class="filter__label">
    ${nameFilter.toUpperCase()} <span class="filter__${nameFilter}-count">${num}</span></label
  >`;
};

export const renderFilters = (arrFilters) => {
  arrFilters.forEach(function (element) {
    sectionFilter.insertAdjacentHTML(`beforeend`, getHtmlFilter(element));
  });
};
