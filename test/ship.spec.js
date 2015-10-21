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

  describe('the isAfloat() method', function() {
    it('returns true when the ship is brand new', function() {
      var ship = new Ship(1);
      expect(ship.isAfloat()).toBeTruthy();
    });

    it('returns true when the ship has been hit fewer times than its size', function() {
      var ship;

      ship = new Ship(1);
      expect(ship.isAfloat()).toBeTruthy();

      ship = new Ship(2);
      ship.hit();
      expect(ship.isAfloat()).toBeTruthy();

      ship = new Ship(3);
      ship.hit();
      ship.hit();
      expect(ship.isAfloat()).toBeTruthy();
    });

    it('returns false when the ship has been hit as much as its size', function() {
      var ship;

      ship = new Ship(1);
      ship.hit();
      expect(ship.isAfloat()).toBeFalsy();

      ship = new Ship(2);
      ship.hit();
      ship.hit();
      expect(ship.isAfloat()).toBeFalsy();

      ship = new Ship(3);
      ship.hit();
      ship.hit();
      ship.hit();
      expect(ship.isAfloat()).toBeFalsy();
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

    it('returns false if the ship does not fit on the grid - empty grid', function() {
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
    });

    it('returns false if the ship does not fit on the grid - grid too small', function() {
      grid = [
        [W, W],
        [W, W]
      ];
      ship = new Ship(3);
      expect(ship.fits(grid, 0, 0, constants.HORIZONTAL)).toBeFalsy();
      expect(ship.fits(grid, 0, 1, constants.HORIZONTAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 0, constants.HORIZONTAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 1, constants.HORIZONTAL)).toBeFalsy();

      grid = [
        [W, W],
        [W, W]
      ];
      ship = new Ship(3);
      expect(ship.fits(grid, 0, 0, constants.VERTICAL)).toBeFalsy();
      expect(ship.fits(grid, 0, 1, constants.VERTICAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 0, constants.VERTICAL)).toBeFalsy();
      expect(ship.fits(grid, 1, 1, constants.VERTICAL)).toBeFalsy();
    });

    it('returns false if the ship does not fit on the grid - full grid', function() {
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
