import { helper } from '@ember/component/helper';

/**
 * Perform map of array by function.
 *
 * @public
 * @function arrayMap
 * @param {Object[]} array The array.
 * @param {Function} fn The comparison function.
 * @returns {Object[]} The new array of mapped elements.
 */
export function arrayMap([array, fn]) {
  return array.map(fn);
}

export default helper(arrayMap);
