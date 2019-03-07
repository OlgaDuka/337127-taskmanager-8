export const NumConst = {
  MAX_TASKS_IN_FILTER: 8,
  START_TASKS: 4,
  DEF_NUM_TAGS: 3,
  TIME: 86400000,
  DAY: 7
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
export const getRandomBoolean = () => Boolean(Math.round(Math.random()));
export const getRandomIndexArr = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const getRandomDate = () => new Date(Date.now() + Math.floor(Math.random() * NumConst.DAY) * NumConst.TIME);
export const getRandomPhoto = () => `//picsum.photos/300/150?r=${Math.random()}`;

export const getArrFromSet = (originalSet, amount) => {
  const arrResult = [];
  const arrNumber = [];
  let i = 0;
  while (i < amount) {
    let num = getRandomInt(originalSet.size);
    if (arrNumber.indexOf(num) === -1) {
      arrResult[i] = [...originalSet][num];
      arrNumber[i] = num;
      i += 1;
    }
  }
  return arrResult;
};
