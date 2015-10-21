'use strict';

var Ship = require('../ship'),
  constants = require('../constants');

describe('the Ship class', function() {
  it('implements the required interface', function() {
    var ship = new Ship(1);
    expect(ship.size).toEqual(1);

    expect(ship.getDirection).toEqual(jasmine.any(Function));
  });

  describe('the getDirection() method', function() {
    it('returns an integer value within 0 and 1 inclusive', function() {
      var ship = new Ship(1);
      for (var i = 0; i < 1000; i++) {
        var direction = ship.getDirection();
        expect(direction >= 0).toBeTruthy();
        expect(direction <= 1).toBeTruthy();
      }
    });
  });

  describe('the fits() method', function() {
    var grid, ship;
    const W = constants.WATER;

    it('returns true if the ship fits on the grid', function() {
      grid = [
        [W]
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.HORIZONTAL)).toBeTruthy();

      grid = [
        [W]
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.VERTICAL)).toBeTruthy();

      grid = [
        [W, W],
        [W, W]
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.HORIZONTAL)).toBeTruthy();
      expect(ship.fits(grid, 0, 1, constants.HORIZONTAL)).toBeTruthy();
      expect(ship.fits(grid, 1, 0, constants.HORIZONTAL)).toBeTruthy();
      expect(ship.fits(grid, 1, 1, constants.HORIZONTAL)).toBeTruthy();

      grid = [
        [W, W],
        [W, W]
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.VERTICAL)).toBeTruthy();
      expect(ship.fits(grid, 0, 1, constants.VERTICAL)).toBeTruthy();
      expect(ship.fits(grid, 1, 0, constants.VERTICAL)).toBeTruthy();
      expect(ship.fits(grid, 1, 1, constants.VERTICAL)).toBeTruthy();
    });

    it('returns false if the ship does not fit on the grid', function() {
      // Empty grid
      grid = [
        []
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.HORIZONTAL)).toBeFalsy();

      grid = [
        []
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.VERTICAL)).toBeFalsy();

      // Full grid
      grid = [
        ['x']
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.HORIZONTAL)).toBeFalsy();

      grid = [
        ['x']
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.VERTICAL)).toBeFalsy();

      grid = [
        ['x', 'x'],
        ['x', 'x']
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.HORIZONTAL)).toBeFalsy();
      expect(ship.fits(grid, 0, 1, constants.HORIZONTAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 0, constants.HORIZONTAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 1, constants.HORIZONTAL)).toBeFalsy();

      grid = [
        ['x', 'x'],
        ['x', 'x']
      ];
      ship = new Ship(1);
      expect(ship.fits(grid, 0, 0, constants.VERTICAL)).toBeFalsy();
      expect(ship.fits(grid, 0, 1, constants.VERTICAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 0, constants.VERTICAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 1, constants.VERTICAL)).toBeFalsy();
    });
  });
});
