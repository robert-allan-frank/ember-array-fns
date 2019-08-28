import { helper } from '@ember/component/helper';

/**
 * Perform every of array by function.
 *
 * @public
 * @param {Object[]} The array.
 * @param {Function} fn The comparison function.
 * @returns {boolean} True if all matches is found.
 */
export function arrayEvery([array, fn]) {
  return array.every(fn);
}

export default helper(arrayEvery);
