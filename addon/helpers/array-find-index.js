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
  if (Array.isArray(array)) {
    return array.findIndex(fn);
  }

  return -1;
}

export default helper(arrayFindIndex);
