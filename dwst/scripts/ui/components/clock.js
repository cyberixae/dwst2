
/**

  Authors: Toni Ruottu, Finland 2010-2019

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

import renderTime from '../renderers/time.js';

export default class Clock {

  constructor(dwst) {
    this._dwst = dwst;
  }

  init(element) {
    this._element = element;
  }

  refreshClock() {
    this._element.innerHTML = renderTime(true);
  }

  startClock() {
    this.refreshClock();
    this._element.classList.remove('dwst-time--placeholder');
    setInterval(() => this.refreshClock(), 500);
  }

  onLoad() {
    this.startClock();
  }

}
