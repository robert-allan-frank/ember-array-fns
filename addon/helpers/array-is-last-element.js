import { isArray } from '@ember/array';
import { helper } from '@ember/component/helper';

/**
 * Determine if element is last in array.
 *
 * @public
 * @function arrayIsLastElement
 * @param {Object[]} array The array to check.
 * @param {Object} element The item to compare.
 * @returns {boolean} True if element is last.
 */
export function arrayIsLastElement([array, element]) {
  let result = false;

  // array and element are required
  if (isArray(array) && array.length && element) {
    // if last element
    result = array[array.length - 1] === element;
  }

  return result;
}

export default helper(arrayIsLastElement);
