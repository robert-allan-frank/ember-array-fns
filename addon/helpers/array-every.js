import { helper } from '@ember/component/helper';

/**
 * Perform every of array by function.
 *
 * @public
 * @function arrayEvery
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {boolean} True if all matches are found.
 */
export function arrayEvery([array, fn]) {
  return array.every(fn);
}

export default helper(arrayEvery);
