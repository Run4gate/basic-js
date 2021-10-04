import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let cats = 0
  matrix.forEach( function callbackFn(element) {
    let i = 0
    while (i < element.length) {
      if (element[i] === '^^') {
        i++
        cats++
      } else {
        i++
      }
    }
  })
  return cats
}

