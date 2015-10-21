var constants = require('./constants');

function Ship(size) {
  this.size = size;
  this.hits = 0;
}

function getRandom(range) {
  return Math.round(range * Math.random());
}

function fits(grid, x, y, direction, size) {
  // console.log('x:',x,'y:',y,'dir:',direction,'size:',size);
  if (size < 1) {
    // console.log('fits!')
    return true;
  }
  return (
    // Position has to be within boundaries
    x >= 0 &&
    x < grid.length &&
    y >= 0 &&
    y < grid[x].length &&
    // Square must be free
    grid[x][y] === constants.WATER &&
    // Recursive step: fit the rest of the ship
    fits(grid, (direction === constants.HORIZONTAL ? x + 1 : x), (direction === constants.VERTICAL ? y + 1 : y), direction, size - 1)
  );
}

Ship.prototype.fits = function(grid, x, y, direction) {
  return fits(grid, x, y, direction, this.size);
};

Ship.prototype.place = function(grid) {
  var placed = false, direction, x, y, max_attempts = 0;
  do {
    direction = this.getDirection();
    // Choose starting point so rest of the ship fits in the board
    x = getRandom(grid.length - this.size);
    y = getRandom(grid.length - this.size);

    if (fits(grid, x, y, direction, this.size)) {
      placed = true;
    }

  } while (!placed && max_attempts++ < 100);

  for (var i = 0; i < this.size; i++) {
    grid[direction === constants.HORIZONTAL ? x + i : x][direction === constants.VERTICAL ? y + i : y] = this;
  }
};

Ship.prototype.getDirection = function() {
  return getRandom(1);
};

Ship.prototype.isAfloat = function() {
  return this.hits < this.size;
};

Ship.prototype.hit = function() {
  if (++this.hits === this.size) {
    return true;
  }
};

module.exports = Ship;
