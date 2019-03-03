/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create-filter.js":
/*!******************************!*\
  !*** ./src/create-filter.js ***!
  \******************************/
/*! exports provided: getHtmlFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtmlFilter", function() { return getHtmlFilter; });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");


const getHtmlFilter = (nameFilter) => {
  const num = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["NumConst"].MAX_TASKS_IN_FILTER);
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


/***/ }),

/***/ "./src/create-task.js":
/*!****************************!*\
  !*** ./src/create-task.js ***!
  \****************************/
/*! exports provided: getHtmlTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHtmlTask", function() { return getHtmlTask; });
const getHtmlTask = (obTask) => {
  return `<article class="card card--edit card--${obTask.colorType}">
            <form class="card__form" method="get">
              <div class="card__inner">
                <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">edit</button>
                  <button type="button" class="card__btn card__btn--archive">archive</button>
                  <button type="button" class="card__btn card__btn--favorites card__btn--disabled">favorites</button>
                </div>
                <div class="card__color-bar">
                  <svg width="100%" height="10">
                    <use xlink:href="#wave"></use>
                  </svg>
                </div>
                <div class="card__textarea-wrap">
                  <label>
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text">${obTask.title}</textarea>
                  </label>
                </div>
                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">date: ${obTask.dueDate}<span class="card__date-status">no</span></button>
                      <fieldset class="card__date-deadline" disabled>
                        <label class="card__input-deadline-wrap">
                          <input class="card__date" type="text" placeholder="23 September" name="date"/>
                        </label>
                        <label class="card__input-deadline-wrap">
                          <input class="card__time" type="text" placeholder="11:15 PM" name="time"/>
                        </label>
                      </fieldset>
                      <button class="card__repeat-toggle" type="button">repeat:<span class="card__repeat-status">no</span></button>
                      <fieldset class="card__repeat-days" disabled>
                        <div class="card__repeat-days-inner">
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-1" name="repeat" value="mo" ${(obTask.repeatingDays[`mo`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-mo-1">mo</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-1" name="repeat" value="tu" ${(obTask.repeatingDays[`tu`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-tu-1">tu</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-1" name="repeat" value="we" ${(obTask.repeatingDays[`we`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-we-1">we</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-1" name="repeat" value="th" ${(obTask.repeatingDays[`th`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-th-1">th</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-1" name="repeat" value="fr" ${(obTask.repeatingDays[`fr`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-fr-1">fr</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-sa-1" name="repeat" value="sa" ${(obTask.repeatingDays[`sa`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-sa-1">sa</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-1" name="repeat" value="su" ${(obTask.repeatingDays[`tu`] === true) ? `checked` : ``}/>
                          <label class="card__repeat-day" for="repeat-su-1">su</label>
                        </div>
                      </fieldset>
                    </div>
                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        <div class="card__hashtag-name">${obTask.tags[0]}</div>
                        <div class="card__hashtag-name">${obTask.tags[1]}</div>
                        <div class="card__hashtag-name">${obTask.tags[2]}</div>
                      </div>
                      <label>
                        <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
                      </label>
                    </div>
                  </div>
                  <label class="card__img-wrap card__img-wrap--empty">
                    <input type="file" class="card__img-input visually-hidden" name="img"/>
                    <img src="${obTask.picture}" alt="task picture" class="card__img"/>
                  </label>
                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input type="radio" id="color-black-1" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" ${(obTask.colorType === `black`) ? `checked` : ``}/>
                      <label for="color-black-1" class="card__color card__color--black">black</label>
                      <input type="radio" id="color-yellow-1" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow" ${(obTask.colorType === `yellow`) ? `checked` : ``}/>
                      <label for="color-yellow-1" class="card__color card__color--yellow">yellow</label>
                      <input type="radio" id="color-blue-1" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue" ${(obTask.colorType === `blue`) ? `checked` : ``}/>
                      <label for="color-blue-1" class="card__color card__color--blue">blue</label>
                      <input type="radio" id="color-green-1" class="card__color-input card__color-input--green visually-hidden" name="color" value="green" ${(obTask.colorType === `green`) ? `checked` : ``}/>
                      <label for="color-green-1" class="card__color card__color--green">green</label>
                      <input type="radio" id="color-pink-1" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink" ${(obTask.colorType === `pink`) ? `checked` : ``}/>
                      <label for="color-pink-1" class="card__color card__color--pink">pink</label>
                    </div>
                  </div>
                </div>
                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;
};


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "task", function() { return task; });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");


const title = [
  `To make the project`,
  `To do homework`,
  `To cook something`,
];

const tags = new Set([
  `homework`,
  `entertainment`,
  `myself`,
  `education`,
  `family`,
  `theory`,
  `practice`
]);

const setTags = function () {
  let arrTags = [];
  let arrNumber = [];
  let i = 0;
  while (i < 3) {
    let num = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(7);
    if (arrNumber.indexOf(num) === -1) {
      arrTags[i] = tags[num];
      arrNumber[i] = num;
      i = i + 1;
    }
  }
  return arrTags;
};

const task = {
  title: title[Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  picture: `//picsum.photos/100/100?r=${Math.random()}`,
  flagRepeat: true,
  repeatingDays: {
    'mo': true,
    'tu': false,
    'we': true,
    'th': false,
    'fr': false,
    'sa': true,
    'su': false,
  },
  tags: setTags(),
  colorType: [
    `black`,
    `green`,
    `yellow`,
    `pink`,
    `blue`
  ][Math.floor(Math.random() * 5)],
  isFavorite: false,
  isDone: false
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _create_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task.js */ "./src/create-task.js");
/* harmony import */ var _create_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-filter.js */ "./src/create-filter.js");





const sectionFilter = document.querySelector(`.main__filter`);
const boardTasks = document.querySelector(`.board__tasks`);

const toggleFilter = (event) => {
  sectionFilter.querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

const renderFilters = (arrFilters) => {
  arrFilters.forEach(function (element) {
    sectionFilter.insertAdjacentHTML(`beforeend`, Object(_create_filter_js__WEBPACK_IMPORTED_MODULE_3__["getHtmlFilter"])(element));
  });
};

const renderTasks = (num) => {
  for (let i = 0; i < num; i += 1) {
    boardTasks.insertAdjacentHTML(`beforeend`, Object(_create_task_js__WEBPACK_IMPORTED_MODULE_2__["getHtmlTask"])(_data_js__WEBPACK_IMPORTED_MODULE_1__["task"]));
  }
};

renderFilters(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["NAME_FILTERS"]);
renderTasks(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["NumConst"].START_TASKS);

sectionFilter.onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numTasks = toggleFilter(event);
    boardTasks.innerHTML = ``;
    numTasks = numTasks < _utils_index_js__WEBPACK_IMPORTED_MODULE_0__["NumConst"].MAX_TASKS_IN_FILTER ? numTasks : _utils_index_js__WEBPACK_IMPORTED_MODULE_0__["NumConst"].MAX_TASKS_IN_FILTER;
    renderTasks(numTasks);
  }
};


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: NumConst, NAME_FILTERS, COLOR_TASKS, getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumConst", function() { return NumConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_FILTERS", function() { return NAME_FILTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_TASKS", function() { return COLOR_TASKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
const NumConst = {
  MAX_TASKS_IN_FILTER: 8,
  START_TASKS: 7
};

const NAME_FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];
const COLOR_TASKS = [`black`, `green`, `yellow`, `pink`, `blue`];

const getRandomInt = (max) => Math.floor(Math.random() * max);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map