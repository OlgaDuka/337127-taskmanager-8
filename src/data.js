import {getRandomInt, TITLE_TASKS, COLOR_TASKS, TAGS} from './utils/index.js';

const DEF_NUM_TAGS = 3;
const TIME = 86400000;
const DAY = 7;

const setTags = () => {
  const arrTags = [];
  const arrNumber = [];
  let i = 0;
  while (i < DEF_NUM_TAGS) {
    let num = getRandomInt(TAGS.size);
    if (arrNumber.indexOf(num) === -1) {
      arrTags[i] = [...TAGS][num];
      arrNumber[i] = num;
      i += 1;
    }
  }
  return arrTags;
};

export const task = () => {
  return {
    title: TITLE_TASKS[Math.floor(Math.random() * TITLE_TASKS.length)],
    dueDate: new Date(Date.now() + Math.floor(Math.random() * DAY) * TIME),
    picture: `//picsum.photos/100/100?r=${Math.random()}`,
    isRepeat: Boolean(Math.round(Math.random())),
    tags: setTags(),
    colorType: COLOR_TASKS[Math.floor(Math.random() * COLOR_TASKS.length)],
    isFavorite: Boolean(Math.round(Math.random())),
    isDone: Boolean(Math.round(Math.random()))
  };
};
