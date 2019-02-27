import {NumConst, NAME_FILTERS} from './utils/index.js';
import {renderCards, boardTasks} from './card.js';
import {renderFilters, sectionFilter} from './filter.js';

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

renderFilters(NAME_FILTERS);
renderCards(NumConst.START_CARDS);

sectionFilter.onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numCard = toggleFilter(event);
    boardTasks.innerHTML = ``;
    numCard = numCard < NumConst.MAX_CARDS_IN_FILTER ? numCard : NumConst.MAX_CARDS_IN_FILTER;
    renderCards(numCard);
  }
};
