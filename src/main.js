import {renderCards, boardTasks} from './card.js';
import {renderFilters, sectionFilter} from './filter.js';

const Num = {
  MAX_CARDS_IN_FILTER: 8,
  START_CARDS: 7
};
const NAME_FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];

export const getRandomInt = (max) => Math.floor(Math.random() * max);

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

renderFilters(NAME_FILTERS);
renderCards(Num.START_CARDS);

sectionFilter.onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numCard = toggleFilter(event);
    boardTasks.innerHTML = ``;
    numCard = numCard < Num.MAX_CARDS_IN_FILTER ? numCard : Num.MAX_CARDS_IN_FILTER;
    renderCards(numCard);
  }
};
