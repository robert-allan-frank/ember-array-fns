import { isArray } from '@ember/array';
import { helper } from '@ember/component/helper';

/**
 * Determine if element is first in array.
 *
 * @public
 * @function arrayIsFirstElement
 * @param {Object[]} array The array to check.
 * @param {Object} element The item to compare.
 * @returns {boolean} True if element is first.
 */
export function arrayIsFirstElement([array, element]) {
  let result = false;

  // array and element are required
  if (isArray(array) && array.length && element) {
    // if first element
    result = array[0] === element;
  }

  return result;
}

export default helper(arrayIsFirstElement);
