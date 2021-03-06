
/**

  Authors: Toni Ruottu, Finland 2010-2019

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

export default class MenuButton {

  constructor(dwst) {
    this._dwst = dwst;
  }

  init(element) {
    this._element = element;
    this._element.addEventListener('click', () => {
      this._dwst.controller.prompt.loud('/splash');
      this._dwst.ui.screen.scrollLog();
    });
  }

  connected(state) {
    if (state) {
      this._element.classList.replace('dwst-button--splash', 'dwst-button--splash-connected');
    } else {
      this._element.classList.replace('dwst-button--splash-connected', 'dwst-button--splash');
    }
  }
}
