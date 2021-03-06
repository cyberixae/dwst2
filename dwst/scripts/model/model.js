
/**

  Authors: Toni Ruottu, Finland 2010-2019

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

import config from './config.js';
import History from './history.js';
import Variables from './variables.js';
import Help from './help/help.js';
import Plugins from './plugins.js';
import Connection from './connection.js';

export default class Model {

  constructor(dwst) {
    this.config = config;
    this.history = new History(dwst);
    this.help = new Help(dwst);
    this.connection = new Connection(dwst);
    this.intervalId = null;
    this.variables = new Variables(dwst);
    this.plugins = new Plugins(dwst);
  }

}
