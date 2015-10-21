'use strict';

var parser = require('../command-parser');

describe('the parser module', function() {
  describe('the parse method', function() {
    it('translates a position into coords', function() {
      expect(parser.parse('A1')).toEqual({x:0, y:0});
      expect(parser.parse('A2')).toEqual({x:0, y:1});
      expect(parser.parse('A3')).toEqual({x:0, y:2});
      expect(parser.parse('A4')).toEqual({x:0, y:3});
      expect(parser.parse('A5')).toEqual({x:0, y:4});

      expect(parser.parse('C1')).toEqual({x:2, y:0});
      expect(parser.parse('C2')).toEqual({x:2, y:1});
      expect(parser.parse('C3')).toEqual({x:2, y:2});
      expect(parser.parse('C4')).toEqual({x:2, y:3});
      expect(parser.parse('C5')).toEqual({x:2, y:4});
    });

    it('returns false for coors out of range', function() {
      expect(parser.parse('A11')).toBe(false);
      expect(parser.parse('A12')).toBe(false);

      expect(parser.parse('C11')).toBe(false);
      expect(parser.parse('C12')).toBe(false);

      expect(parser.parse('K1')).toBe(false);
      expect(parser.parse('K10')).toBe(false);
    });

    it('returns false for an invalid input', function() {
      expect(parser.parse('foo')).toBe(false);
      expect(parser.parse('bar')).toBe(false);
      expect(parser.parse('-1')).toBe(false);
    });
  });
});
