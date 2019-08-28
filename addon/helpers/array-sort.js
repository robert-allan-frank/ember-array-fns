import { helper } from '@ember/component/helper';

/**
 * Perform sort of array by function.
 *
 * @public
 * @param {Object[]} The array.
 * @param {Function} fn The comparison function.
 * @returns {Object[]} The sorted array
 */
export function arraySort([array, fn]) {
  return array.sort(fn);
}

export default helper(arraySort);
