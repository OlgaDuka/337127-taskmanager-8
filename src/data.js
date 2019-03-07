import {
  getRandomBoolean,
  getRandomIndexArr,
  getRandomDate,
  getArrFromSet,
  getRandomPhoto,
  TITLE_TASKS, COLOR_TASKS, TAGS} from './utils/index.js';

const DEF_NUM_TAGS = 3;
const DAY = 7;

export const createNewTask = () => {
  return {
    title: getRandomIndexArr(TITLE_TASKS),
    dueDate: new Date(getRandomDate(DAY)),
    picture: getRandomPhoto(),
    isRepeat: getRandomBoolean(),
    tags: getArrFromSet(TAGS, DEF_NUM_TAGS),
    colorType: getRandomIndexArr(COLOR_TASKS),
    isFavorite: getRandomBoolean(),
    isDone: getRandomBoolean()
  };
};
