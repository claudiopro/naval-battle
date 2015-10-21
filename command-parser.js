'use strict';

var util = require('./util');

const COMMAND_REG = /([a-j])(1?[0-9])/i;

var parser = {
  // Transforms a command like A5 into a pair of zero-based coords {x:0, y:4}
  parse: function(str) {
    var matches = str.match(COMMAND_REG);
    if (!matches || +matches[2] > 10) {
      return false;
    }
    return {
      x: util.atoi(matches[1]),
      y: +matches[2] - 1 // coerce into a number, rebase to 0
    };
  }
};

module.exports = parser;
