export const Price = {
  MIN_PRICE_EVENT: 20,
  MAX_PRICE_EVENT: 100,
  MIN_PRICE_SERVICE: 10,
  MAX_PRICE_SERVICE: 200
};

export const NumConst = {
  MAX_CARDS_IN_FILTER: 8,
  START_CARDS: 7
};

export const NAME_FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];
export const COLOR_CARDS = [`black`, `green`, `yellow`, `pink`, `blue`];

export const getRandomInt = (max) => Math.floor(Math.random() * max);
