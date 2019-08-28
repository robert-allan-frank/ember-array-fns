import { helper } from '@ember/component/helper';

/**
 * Perform filter of array by function.
 *
 * @public
 * @param {Object[]} The array.
 * @param {Function} fn The comparison function.
 * @returns {Object[]} The filtered array.
 */
export function arrayFilter([array, fn]) {
  return array.filter(fn);
}

export default helper(arrayFilter);
