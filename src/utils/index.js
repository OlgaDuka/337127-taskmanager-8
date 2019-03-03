export const NumConst = {
  MAX_TASKS_IN_FILTER: 8,
  START_TASKS: 7
};

export const TITLE_TASKS = [
  `To make the project`,
  `To do homework`,
  `To cook something`,
];

export const TAGS = new Set([
  `homework`,
  `entertainment`,
  `myself`,
  `education`,
  `family`,
  `theory`,
  `practice`
]);

export const NAME_FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];
export const COLOR_TASKS = [`black`, `green`, `yellow`, `pink`, `blue`];

export const getRandomInt = (max) => Math.floor(Math.random() * max);
