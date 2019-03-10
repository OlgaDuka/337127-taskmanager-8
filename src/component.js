import {createElement} from './utils/index.js';

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
    this._element = null;
  }

  get element() {
    return this._element;
  }

  _getDate(time) {
    return new Date(time).toLocaleString(`en-US`, {year: `numeric`, month: `long`, day: `numeric`});
  }

  _getTime(time) {
    return new Date(time).toLocaleString(`en-US`, {hour: `numeric`, minute: `numeric`});
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  bind() {}

  unbind() {}

  render() {
    this._element = createElement(this.template);
    this.bind();

    return this._element;
  }

  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }
}

export {Component};
