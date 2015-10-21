'use strict';

var Ship = require('./ship'),
  util = require('./util'),
  constants = require('./constants');

const BATTLESHIPS = [
  // 1x BattleShip (5 squares)
  new Ship(5),
  // 2x Destroyers (4 squares)
  new Ship(4),
  new Ship(4)
];

var grid = [];

/**
 *  Initializes the board
 */
function init() {
  // Fills the board initially with, erh, water
  for (var i = 0; i<constants.SIZE; i++) {
    grid[i] = [];
    for (var j = 0; j<constants.SIZE; j++) {
      grid[i][j] = constants.WATER;
    }
  }
  // Randomly allocates the battleships
  for (var k = 0; k < BATTLESHIPS.length; k++)
    BATTLESHIPS[k].place(grid);
}

/**
 *  Prints the board
 */
function print() {
  var buf = ['  '];
  for (var j = 0; j<constants.SIZE; j++) {
    var col = j + 1;
    buf.push(col < 10 ? ' ' + col + ' ' : col + ' ');
  }
  buf.push('\n');
  for (var i = 0; i<constants.SIZE; i++) {
    buf.push(util.itoa(i) + ' ');
    for (var j = 0; j<constants.SIZE; j++) {
      buf.push(value(grid[i][j]));
    }
    buf.push('\n');
  }
  console.log(buf.join(''));
}

/**
 * Returns the value of a square of the grid
 */
function value(square) {
  return (square instanceof Ship) ? constants.SHIP : square;
}

/**
 *  Hits a square on the board
 */
function hit(x, y) {
  var square = grid[x][y];
  if (square instanceof Ship) {
    if (square.hit())
      console.log('Ship sunken!');
    return true;
  }
  return false;
}

/**
 *  Returns true if there are ships afloat on the board
 */
function hasShips() {
  return BATTLESHIPS.some(function(ship) {
    return ship.isAfloat();
  })
}

module.exports = {
  init: init,
  print: print,
  hit: hit,
  hasShips: hasShips
};
