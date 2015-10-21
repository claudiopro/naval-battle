'use strict';

var board = require('../board');

describe('the board module', function() {
  it('implements the required interface', function() {
    expect(board.init).toEqual(jasmine.any(Function));
    expect(board.print).toEqual(jasmine.any(Function));
    expect(board.hit).toEqual(jasmine.any(Function));
  });
});
