'use strict';

const I_TO_A = 'ABCDEFGHIJ'.split('');

function itoa(n) {
  return I_TO_A[n];
}

function atoi(a) {
  return I_TO_A.indexOf(a.toUpperCase());
}

module.exports = {
  itoa: itoa,
  atoi: atoi
};
