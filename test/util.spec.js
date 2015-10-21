'use strict';

var util = require('../util');

const CHARS = 'ABCDEFGHIJ';

describe('the util module', function() {
  describe('the atoi method', function() {
    function verify(upper) {
      CHARS.split('').forEach(function(letter, pos){
        var ret = util.atoi(upper ? letter : letter.toLowerCase());
        expect(ret).toEqual(pos);
      });
    }

    it('translates a letter into an index - lowercase', function() {
      verify(false);
    });

    it('translates a letter into an index - uppercase', function() {
      verify(true);
    });

    it('returns -1 for letters out of range', function() {
      expect(util.atoi('k')).toEqual(-1);
      expect(util.atoi('z')).toEqual(-1);
      expect(util.atoi('#')).toEqual(-1);
    });
  });

  describe('the itoa method', function() {
    function verify() {
      for (var i = 0; i < 10; i++) {
        var ret = util.itoa(i);
        expect(ret).toEqual(CHARS.charAt(i));
      }
    }

    it('translates an index into a letter', function() {
      verify();
    });

    it('returns an empty string for indices out of range', function() {
      expect(util.itoa(-1)).toEqual('');
      expect(util.itoa(11)).toEqual('');
    });
  });
});
