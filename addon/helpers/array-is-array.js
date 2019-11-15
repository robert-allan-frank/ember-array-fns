import { isArray } from '@ember/array';
import { helper } from '@ember/component/helper';

/**
 * Determine if an array.
 *
 * @public
 * @function arrayIsArray
 * @param {Object[]} array The array.
 * @returns {boolean} True if an array.
 */
export function arrayIsArray([array]) {
  return isArray(array);
}

export default helper(arrayIsArray);
