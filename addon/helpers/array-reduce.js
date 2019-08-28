import { helper } from '@ember/component/helper';

/**
 * Perform reduce of array by function.
 *
 * @public
 * @param {Object[]} The array.
 * @param {Function} fn The comparison function.
 * @param {Object} accumulator The accumlator.
 * @returns {Object} The reduced object.
 */
export function arrayReduce([array, fn, accumulator]) {
  return array.reduce(fn, accumulator);
}

export default helper(arrayReduce);
