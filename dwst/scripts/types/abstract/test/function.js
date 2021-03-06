
/**

  Authors: Toni Ruottu, Finland 2010-2019

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

import {expect} from 'chai';

import DwstFunction from '../function.js';

describe('DwstFunction', () => {
  it('should be abstract', () => {
    expect(() => {
      new DwstFunction();
    }).to.throw();
  });
});
