import { helper } from '@ember/component/helper';

/**
 * Perform find of array by function returning the index of the found element.
 *
 * @public
 * @function arrayFindIndex
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {number} Zero based index of the found element else -1.
 */
export function arrayFindIndex([array, fn]) {
  return array.findIndex(fn);
}

export default helper(arrayFindIndex);
