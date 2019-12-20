import { helper } from '@ember/component/helper';

/**
 * Perform reduce of array by function.
 *
 * @public
 * @function arrayReduce
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @param {Object} accumulator The accumlator.
 * @returns {Object} The reduced object.
 */
export function arrayReduce([array, fn, accumulator]) {
  if (Array.isArray(array)) {
    return array.reduce(fn, accumulator);
  }

  return [];
}

export default helper(arrayReduce);
