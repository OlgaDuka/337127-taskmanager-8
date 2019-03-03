import {getRandomInt, TITLE_TASKS, COLOR_TASKS, TAGS} from './utils/index.js';

const setTags = function () {
  const arrTags = [];
  const arrNumber = [];
  let i = 0;
  while (i < 3) {
    let num = getRandomInt(TAGS.size);
    if (arrNumber.indexOf(num) === -1) {
      arrTags[i] = [...TAGS][num];
      arrNumber[i] = num;
      i += 1;
    }
  }
  return arrTags;
};

export const createTask = () => {
  const task = {
    title: TITLE_TASKS[Math.floor(Math.random() * TITLE_TASKS.length)],
    dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
    picture: `//picsum.photos/100/100?r=${Math.random()}`,
    isRepeat: true,
    repeatingDays: {
      'mo': false,
      'tu': false,
      'we': false,
      'th': false,
      'fr': false,
      'sa': false,
      'su': false,
    },
    tags: setTags(),
    colorType: COLOR_TASKS[Math.floor(Math.random() * COLOR_TASKS.length)],
    isFavorite: false,
    isDone: false
  };
  return task;
};
