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

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! exports provided: boardTasks, renderCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardTasks", function() { return boardTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCards", function() { return renderCards; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/main.js");


const boardTasks = document.querySelector(`.board__tasks`);

const COLOR_CARDS = [`black`, `green`, `yellow`, `pink`, `blue`];
const getHtmlCard = () => {
  return `<article class="card card--edit card--${COLOR_CARDS[Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(COLOR_CARDS.length - 1)]}">
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
                    <textarea class="card__text" placeholder="Start typing your text here..." name="text"></textarea>
                  </label>
                </div>
                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">date: <span class="card__date-status">no</span></button>
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
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-1" name="repeat" value="mo"/>
                          <label class="card__repeat-day" for="repeat-mo-1">mo</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-1" name="repeat" value="tu" checked/>
                          <label class="card__repeat-day" for="repeat-tu-1">tu</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-1" name="repeat" value="we"/>
                          <label class="card__repeat-day" for="repeat-we-1">we</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-1" name="repeat" value="th"/>
                          <label class="card__repeat-day" for="repeat-th-1">th</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-1" name="repeat" value="fr" checked/>
                          <label class="card__repeat-day" for="repeat-fr-1">fr</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" name="repeat" value="sa" id="repeat-sa-1"/>
                          <label class="card__repeat-day" for="repeat-sa-1">sa</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-1" name="repeat" value="su" checked/>
                          <label class="card__repeat-day" for="repeat-su-1">su</label>
                        </div>
                      </fieldset>
                    </div>
                    <div class="card__hashtag">
                      <div class="card__hashtag-list"></div>
                      <label>
                        <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here"/>
                      </label>
                    </div>
                  </div>
                  <label class="card__img-wrap card__img-wrap--empty">
                    <input type="file" class="card__img-input visually-hidden" name="img"/>
                    <img src="img/add-photo.svg" alt="task picture" class="card__img"/>
                  </label>
                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input type="radio" id="color-black-1" class="card__color-input card__color-input--black visually-hidden" name="color" value="black" checked/>
                      <label for="color-black-1" class="card__color card__color--black">black</label>
                      <input type="radio" id="color-yellow-1" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow"/>
                      <label for="color-yellow-1" class="card__color card__color--yellow">yellow</label>
                      <input type="radio" id="color-blue-1" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue"/>
                      <label for="color-blue-1" class="card__color card__color--blue">blue</label>
                      <input type="radio" id="color-green-1" class="card__color-input card__color-input--green visually-hidden" name="color" value="green"/>
                      <label for="color-green-1" class="card__color card__color--green">green</label>
                      <input type="radio" id="color-pink-1" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink"/>
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

const renderCards = (num) => {
  for (let i = 0; i < num; i += 1) {
    boardTasks.insertAdjacentHTML(`beforeend`, getHtmlCard());
  }
};


/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! exports provided: sectionFilter, renderFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionFilter", function() { return sectionFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFilters", function() { return renderFilters; });
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/main.js");


const sectionFilter = document.querySelector(`.main__filter`);

const MAX_TASCS_IN_FILTER = 20;
const getHtmlFilter = (nameFilter) => {
  const num = Object(_main_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInt"])(MAX_TASCS_IN_FILTER);
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

const renderFilters = (arrFilters) => {
  arrFilters.forEach(function (element) {
    sectionFilter.insertAdjacentHTML(`beforeend`, getHtmlFilter(element));
  });
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ "./src/card.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ "./src/filter.js");



const Num = {
  MAX_CARDS_IN_FILTER: 8,
  START_CARDS: 7
};
const NAME_FILTERS = [`all`, `overdue`, `today`, `favorites`, `repeating`, `tags`, `archive`];

const getRandomInt = (max) => Math.floor(Math.random() * max);

const clearBoardTasks = () => {
  while (_card_js__WEBPACK_IMPORTED_MODULE_0__["boardTasks"].firstChild) {
    _card_js__WEBPACK_IMPORTED_MODULE_0__["boardTasks"].firstChild.remove();
  }
};

const toggleFilter = (event) => {
  _filter_js__WEBPACK_IMPORTED_MODULE_1__["sectionFilter"].querySelector(`input:checked`).checked = false;
  event.target.checked = true;
  return parseInt(event.target.textContent.slice(-2), 10);
};

Object(_filter_js__WEBPACK_IMPORTED_MODULE_1__["renderFilters"])(NAME_FILTERS);
Object(_card_js__WEBPACK_IMPORTED_MODULE_0__["renderCards"])(Num.START_CARDS);

_filter_js__WEBPACK_IMPORTED_MODULE_1__["sectionFilter"].onclick = (event) => {
  if (event.target.className === `filter__label` && !event.target.previousElementSibling.disabled) {
    let numCard = toggleFilter(event);
    clearBoardTasks();
    numCard = numCard < Num.MAX_CARDS_IN_FILTER ? numCard : Num.MAX_CARDS_IN_FILTER;
    Object(_card_js__WEBPACK_IMPORTED_MODULE_0__["renderCards"])(numCard);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map