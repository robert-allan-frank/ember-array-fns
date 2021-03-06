import { helper } from '@ember/component/helper';

/**
 * Perform sort of array by function.
 *
 * @public
 * @function arraySort
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {Object[]} The sorted array
 */
export function arraySort([array, fn]) {
  if (Array.isArray(array)) {
    return array.sort(fn);
  }

  return [];
}

export default helper(arraySort);
