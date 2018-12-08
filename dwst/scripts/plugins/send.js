
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

import process from '../process.js';

export default class Send {

  constructor(dwst) {
    this._dwst = dwst;
  }

  commands() {
    return ['send', 's', ''];
  }

  usage() {
    return [
      '/send [template]',
      '/s [template]',
    ];
  }

  examples() {
    return [
      '/send Hello world!',
      '/send multiline\\r\\nmessage',
      '/send rpc(${randomChars(5)})',
      '/send ${text()}',
      '/send ${bin()}',
      '/send ["JSON","is","cool"]',
      '/send ${time()}s since epoch',
      '/send From a to z: ${charRange(97,122)}',
      '/send From a to z: ${byteRange(97,122)}',
      '/send rpc(${randomBytes(5)})',
      '/send ${hex(1234567890abcdef)}',
      '/s Available now with 60% less typing!',
    ];
  }

  info() {
    return 'send textual data';
  }

  run(paramString) {
    const parsed = this._dwst.lib.particles.parseParticles(paramString);
    const processed = parsed.map(particle => {
      const [instruction, ...args] = particle;
      const textOrBinary = process(this._dwst, instruction, args);
      if (typeof textOrBinary === 'string') {
        return textOrBinary;
      }
      const text = new TextDecoder("utf-8").decode(textOrBinary, {fatal: true});
      return text;
    });
    const msg = processed.join('');

    const connection = this._dwst.model.connection;
    if (connection === null || connection.isClosing() || connection.isClosed()) {
      throw new this._dwst.lib.errors.NoConnection(msg);
    }
    this._dwst.ui.terminal.log(msg, 'sent');
    this._dwst.model.connection.send(msg);
  }
}

