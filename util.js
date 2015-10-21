'use strict';

const I_TO_A = 'ABCDEFGHIJ';

/**
 * Converts a zero-based coord to a letter e.g. 0->A, 1->B, ... 10->J
 */
function itoa(n) {
  return I_TO_A.charAt(n);
}

/**
 * Converts a letter to a zero-based coord e.g. A->0, B->1, ... J->10
 */
function atoi(a) {
  return I_TO_A.indexOf(a.toUpperCase());
}

module.exports = {
  itoa: itoa,
  atoi: atoi
};
