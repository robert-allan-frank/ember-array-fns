import { helper } from '@ember/component/helper';

/**
 * Perform filter of array by function.
 *
 * @public
 * @function arrayFilter
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {Object[]} The filtered array.
 */
export function arrayFilter([array, fn]) {
  return array.filter(fn);
}

export default helper(arrayFilter);
